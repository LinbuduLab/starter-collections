# Strapi + GraphQL

> A sample project of strapi with GraphQL + Web Components.

- [Strapi](https://github.com/strapi/strapi)
- [Apollo Elements](https://apolloelements.dev/)
- [Lit](https://lit.dev/)
- [GraphQL-Code-Gen](https://www.graphql-code-generator.com/)

## Quick Start

```bash
# use option --shamefully-hoist to ensure deps under @babel scope can be found
pnpm i --shamefully-hoist

# start strapi server
pnpm develop

# start client application
cd client

pnpm i

pnpm start
```

**The CodeGen configuration here is directly connected to the GraphQL Playground launched by Strapi, refer to the following configurations:**

```yml
schema: http://localhost:1337/graphql

extensions:
  codegen:
    config:
      # as original config

    generates:
      src/introspection.json:
        plugins:
          - introspection
      src/schema.ts:
        plugins:
          - typescript
      src/:
        preset: near-operation-file
        presetConfig:
          baseTypesPath: schema.ts
          extension: .graphql.ts
        plugins:
          - typescript-operations
          - typed-document-node
        documents:
          - src/**/*.fragment.graphql
          - src/**/*.mutation.graphql
          - src/**/*.query.graphql
          - src/**/*.subscription.graphql
```

When starting the application, CodeGen generate [schema.ts](client/src/schema.ts) from your GraphQL Server(by Strapi), which is also relied upon for generating operation definition file(.ts) from GraphQL operation(.graphql).

Write GraphQL operation schema([App.query.graphql](client/src/components/app/App.query.graphql)) like below:

```graphql
query BlogQuery {
  queryBlogList: blogs {
    data {
      id
      attributes {
        Title
        Body
        Date
      }
    }
  }
}
```

Waiting for the watching CodeGen process to restart and generate **App.query.graphql.ts**:

```typescript
import * as Types from "../../schema";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type BlogQueryVariables = Types.Exact<{ [key: string]: never }>;

export type BlogQueryData = {
  readonly __typename?: "Query";
  readonly queryBlogList?:
    | // ...types
    | null
    | undefined;
};

export const BlogQuery = {
  kind: "Document",
  definitions: [
    // ...definitions
  ],
} as unknown as DocumentNode<BlogQueryData, BlogQueryVariables>;
```

Use named import to import the generated **DocumentNode** in your application(some extraneous code has been omitted):

```typescript
import { BlogQuery } from "./App.query.graphql";

@customElement("apollo-app")
export class ApolloApp extends LitElement {
  static readonly is = "apollo-app";

  static readonly styles = [shared, style];

  blogQuery = new ApolloQueryController(this, BlogQuery);

  render(): TemplateResult {
    console.log(this.blogQuery);

    return html`
      <dl>
        <dt>
          Blog Count: ${this.blogQuery.data?.queryBlogList.data.length ?? 0}
        </dt>
      </dl>
    `;
  }
}
```
