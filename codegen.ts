
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clgk36hqq2y1k01t29hqy2gjn/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
