export type Options = {
  configPath?: string;
  schemaPath?: string;
  outputDir?: string;
  mockDir?: string;
  depth?: number;
  append: boolean;
};
export type TConfigOptions = Required<Omit<Options, 'configPath'>>;
