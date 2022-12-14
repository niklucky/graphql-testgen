const config = {
  targetUrl: process.env.TARGET_URL || 'http://localhost:3000/graphql',
  schemaUrl: process.env.SCHEMA_URL || 'http://localhost:3000/graphql',
};

export function getUrl() {
  return config.targetUrl;
}
