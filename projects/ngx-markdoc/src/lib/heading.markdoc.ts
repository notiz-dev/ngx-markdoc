import {
  Config,
  Node,
  nodes,
  RenderableTreeNode,
  Schema,
  Tag,
} from '@markdoc/markdoc';

function generateID(
  children: RenderableTreeNode[],
  attributes: Record<string, any>
) {
  if (attributes['id'] && typeof attributes['id'] === 'string') {
    return attributes['id'];
  }
  return children
    .filter((child: any) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export const heading: Schema = {
  ...nodes.heading,
  transform: (node: Node, config: Config) => {
    const base = nodes.heading.transform!(node, config)! as Tag;
    base.attributes['id'] = generateID(base.children, base.attributes);
    return base;
  },
};
