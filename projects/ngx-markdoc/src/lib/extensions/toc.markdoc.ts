import { RenderableTreeNode, Tag } from '@markdoc/markdoc';

export type TableOfContent = Headings[];

export interface Headings {
  id: string;
  title: string;
  children: { id: string; title: string }[];

  [key: string]: any;
}

export function collectTableOfContent(
  nodes: RenderableTreeNode[]
): TableOfContent {
  let sections: Headings[] = [];

  for (let node of nodes) {
    if (!(node instanceof Tag)) {
      continue;
    }

    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node);
      if (title) {
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            console.warn(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            );
            continue;
          }
          sections[sections.length - 1].children?.push({
            ...node.attributes,
            id: node.attributes['id'],
            title,
          });
        } else {
          sections.push({
            ...node.attributes,
            id: node.attributes['id'],
            title,
            children: [],
          });
        }
      }
    }

    sections.push(...collectTableOfContent(node.children ?? []));
  }

  return sections;
}

function getNodeText(node: RenderableTreeNode) {
  let text = '';
  for (let child of (node as Tag).children ?? []) {
    if (typeof child === 'string') {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
}
