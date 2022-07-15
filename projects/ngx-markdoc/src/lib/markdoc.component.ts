import { collectTableOfContent, TableOfContent } from './toc.markdoc';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import MarkdocRenderer, {
  Config,
  Node,
  RenderableTreeNode,
  Tag,
} from '@markdoc/markdoc';
import * as yaml from 'js-yaml';
import { heading } from './heading.markdoc';

@Component({
  selector: 'markdoc, [markdoc]',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: ` <ng-content></ng-content>`,
  styles: [],
})
export class Markdoc implements OnChanges, AfterViewInit {
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

  constructor(
    public element: ElementRef<HTMLElement>,
    private http: HttpClient
  ) {}

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
    if (!this.http) {
      throw new Error('HttpClient is required.');
    }

    return this.http.get(source, { responseType: 'text' });
  }

  private render(markdown: string) {
    const ast = MarkdocRenderer.parse(markdown);

    const configWithFrontmatter = this.configWithHeadingAndFrontmatter(
      ast,
      this.config
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
    config: Config | undefined
  ): Config {
    const frontmatter = this.loadFrontmatter(ast);

    const markdoc = { ...(config?.variables?.['markdoc'] || {}), frontmatter };
    const variables = { ...(config?.variables || {}), markdoc };

    const nodes = { heading, ...(config?.nodes || {}) };
    return { ...config, nodes, variables };
  }

  private loadFrontmatter(ast: Node) {
    return ast.attributes['frontmatter']
      ? yaml.load(ast.attributes['frontmatter'])
      : {};
  }
}
