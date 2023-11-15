import {
  collectTableOfContent,
  TableOfContent,
} from './extensions/toc.markdoc';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import MarkdocRenderer, {
  Config,
  Node,
  RenderableTreeNode,
  Tag,
} from '@markdoc/markdoc';
import * as yaml from 'js-yaml';
import { defaultConfig } from './config';

@Component({
  selector: 'markdoc, [markdoc]',
  standalone: true,
  template: ` <ng-content></ng-content>`,
})
export class Markdoc implements OnChanges, AfterViewInit {
  private element = inject(ElementRef<HTMLElement>);
  private http = inject(HttpClient);

  @Input() content: string | undefined;
  @Input() src: string | undefined;

  @Input() config: Config | undefined;

  private _contentNode: RenderableTreeNode | undefined;
  /**
   * Renderable nodes return from `Markdoc.transform(...)`.
   */
  public get contentNode(): RenderableTreeNode | undefined {
    return this._contentNode;
  }
  public set contentNode(value: RenderableTreeNode | undefined) {
    this._contentNode = value;
    if (value) {
      this.contentNodeChange.emit(value);
    }
  }

  @Output() contentNodeChange = new EventEmitter<RenderableTreeNode>();

  private _toc: TableOfContent | undefined;
  /**
   * Table of Content.
   */
  public get toc(): TableOfContent | undefined {
    return this._toc;
  }
  public set toc(value: TableOfContent | undefined) {
    this._toc = value;
    if (value) {
      this.tocChange.emit(value);
    }
  }
  @Output() tocChange = new EventEmitter<TableOfContent>();

  private _frontmatter: Record<string, any> | undefined;
  public get frontmatter(): Record<string, any> | undefined {
    return this._frontmatter;
  }
  public set frontmatter(value: Record<string, any> | undefined) {
    this._frontmatter = value;
    if (value) {
      this.frontmatterChange.emit(value);
    }
  }
  @Output() frontmatterChange = new EventEmitter<Record<string, any>>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.content != undefined) {
      this.render(this.content);
      return;
    }

    if (this.src != undefined) {
      this.loadSrcFile(this.src);
      return;
    }
  }

  ngAfterViewInit(): void {
    if (!this.content && !this.src) {
      this.render(this.element.nativeElement.innerHTML);
    }
  }

  private loadSrcFile(source: string) {
    this.getSource(source).subscribe({
      next: (markdown) => {
        this.render(markdown);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  private getSource(source: string) {
    return this.http.get(source, { responseType: 'text' });
  }

  private render(markdown: string) {
    const ast = MarkdocRenderer.parse(markdown);

    const configWithFrontmatter = this.configWithHeadingAndFrontmatter(
      ast,
      this.config,
    );

    const content = MarkdocRenderer.transform(ast, configWithFrontmatter);

    this.element.nativeElement.innerHTML =
      MarkdocRenderer.renderers.html(content);

    if (content instanceof Tag) {
      this.contentNode = content;
      this.toc = collectTableOfContent(content.children);
    }
  }

  private configWithHeadingAndFrontmatter(
    ast: Node,
    config: Config | undefined,
  ): Config {
    const frontmatter = this.loadFrontmatter(ast);

    const markdoc = { ...(config?.variables?.['markdoc'] || {}), frontmatter };
    const variables = { ...(config?.variables || {}), markdoc };

    const nodes = {
      ...defaultConfig.nodes,
      ...(config?.nodes || {}),
    };
    return { ...config, tags: { ...defaultConfig.tags }, nodes, variables };
  }

  private loadFrontmatter(ast: Node) {
    const frontmatter = ast.attributes['frontmatter']
      ? yaml.load(ast.attributes['frontmatter'])
      : {};

    this.frontmatter = frontmatter as Record<string, any>;
    return frontmatter;
  }
}
