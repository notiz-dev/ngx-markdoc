import { Schema, Tag } from '@markdoc/markdoc';

export const markdocExample: Schema = {
  render: 'pre',
  attributes: {},
  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const { content, language } = node.children[0].attributes;

    return new Tag('pre', { ...attributes, language }, [content]);
  },
};
