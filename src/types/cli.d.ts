export type Options = {
  targetUrl: string
  field?: string
  config?: string;
  schema?: string;
  output?: string;
  mocks?: Record<string, unknown>;
  depth?: number;
  append: boolean;
  snapshots: TSnapshotOptions;
};

export type TSnapshotOptions = {
  path: string | null
  ignoreFields: string[]
}
export type TConfigOptions = Required<Omit<Options, 'config' | 'field'>> & { field?: string };

type TClearOptions = {
  all: boolean;
  test: string;
};

type TResponse = {
  data: {
    data: Record<string, unknown>
  }
}
