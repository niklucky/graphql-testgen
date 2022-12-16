export type Options = {
  targetUrl: string
  field?: string
  config?: string;
  schema?: string;
  output?: string;
  mocks?: Record<string, unknown>;
  depth?: number;
  append: boolean;
};
export type TConfigOptions = Required<Omit<Options, 'config' | 'field'>> & { field?: string };

type TClearOptions = {
  all: boolean;
  test: string;
};
