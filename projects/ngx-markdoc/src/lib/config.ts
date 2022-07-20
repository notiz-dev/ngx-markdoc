import { Config } from '@markdoc/markdoc';
import { heading, image } from './extensions';

export const defaultConfig: Config = { nodes: { heading, image } };
