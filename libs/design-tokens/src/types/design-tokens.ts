export interface DesignTokensResponse {
  status: number;
  error: boolean;
  meta: DesignTokensMeta;
}

export interface DesignTokensMeta {
  variableCollections: VariableCollections;
  variables: Variables;
}

export interface Variables {
  [key: string]: Variable;
}

export interface VariableCollections {
  [key: string]: VariableCollection;
}

export interface VariableCollection {
  defaultModeId: string;
  id: string;
  name: VariableCollectionName;
  remote: boolean;
  modes: Mode[];
  key: string;
  hiddenFromPublishing: boolean;
  variableIds: string[];
}

export interface Mode {
  modeId: string;
  name: ModeName;
}

export enum ModeName {
  MAIN = 'main',
  SAID = 'side',
  VALUE = 'value',
  LIGHT = 'light',
  DARK = 'dark',
  DEFAULT = 'default',
}

export interface Variable {
  id: string;
  name: string;
  remote: boolean;
  key: string;
  variableCollectionId: string;
  resolvedType: ResolvedType;
  description: string;
  hiddenFromPublishing: boolean;
  valuesByMode: ValuesByMode;
  scopes: Scope[];
  codeSyntax?: object;
}

export enum ResolvedType {
  COLOR = 'COLOR',
  FLOAT = 'FLOAT',
  STRING = 'STRING',
}

export enum Scope {
  AllScopes = 'ALL_SCOPES',
}

export interface ValuesByMode {
  [key: string]: ModeValue | number | string;
}

export interface ModeValue {
  type?: Type;
  id?: string;
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

export enum Type {
  VariableAlias = 'VARIABLE_ALIAS',
}

export enum VariableCollectionName {
  SYS = 'Semantic',
  REF = 'Primitives',
  COMP = 'Component',
}
