export type Options = {
  targetUrl: string
  config?: string;
  schema?: string;
  output?: string;
  mocks?: string;
  depth?: number;
  append: boolean;
};
export type TConfigOptions = Required<Omit<Options, 'config'>>;

type TClearOptions = {
  all: boolean;
  test: string;
};
