import {
  EnvironmentProviders,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';
import { Config } from '@markdoc/markdoc';
import { figure, heading, image } from './extensions';

export const MARKDOC_CONFIG = new InjectionToken<Config>('MARKDOC_CONFIG');

export interface MarkdocOptions {
  config?: Config;
}

const defaultConfig: Config = {
  nodes: { heading, image },
  tags: { figure },
};

export function provideMarkdocOptions(
  markdocOptions?: MarkdocOptions,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: MARKDOC_CONFIG,
      useValue: markdocOptions?.config ?? defaultConfig,
    },
  ]);
}
