import { nodes, Schema } from '@markdoc/markdoc';

export const image: Schema = {
  ...nodes.image,
  attributes: {
    ...nodes.image.attributes,
    loading: {
      type: String,
      default: 'lazy',
    },
  },
};
