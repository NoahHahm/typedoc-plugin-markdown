import { ReflectionKind, TypeDocOptionMap } from 'typedoc';

export interface TypedocPluginMarkdownOptions extends TypeDocOptionMap {
  hideBreadcrumbs: boolean;
  hideInPageTOC: boolean;
  hidePageTitle: boolean;
  hideHierarchy: boolean;
  entryDocument: string;
  indexTitle: string;
  namedAnchors: boolean;
  publicPath: string;
  symbolsWithOwnFile: string | string[];
  typeDeclarationStyle: 'list' | 'table';
  fileStructure: 'modules' | 'symbols';
  flattenOutput: boolean;
}

export interface TemplateMapping {
  directory: string | null;
  template: any;
  isLeaf: boolean;
  kind: ReflectionKind;
  labelSingular: string;
  labelPlural: string;
}

export type Collapse = 'object' | 'function' | 'all' | 'none';
