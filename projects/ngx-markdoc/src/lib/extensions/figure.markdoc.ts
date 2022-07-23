import { Config, Schema, Tag, Node } from '@markdoc/markdoc';

export const figure: Schema = {
  selfClosing: true,
  attributes: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String, required: true },
  },
  transform: (node: Node, config: Config) => {
    const { src, alt, caption } = node.transformAttributes(config);
    const imageTag = new Tag('img', { src, alt });
    const captionTag = new Tag('figcaption', {}, [caption]);
    return new Tag('figure', {}, [imageTag, captionTag]);
  },
};
