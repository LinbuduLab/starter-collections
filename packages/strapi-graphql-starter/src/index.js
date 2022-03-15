"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    const extension = ({ nexus }) => ({
      // Nexus
      types: [],
      plugins: [],
      typeDefs: `
          type ExtraType {
              name: String
          }

          type Query {
              extra: ExtraType
          }
      `,
      resolvers: {
        Query: {
          extra: {
            resolve() {
              return { name: "Linbudu" };
            },
          },
        },
      },
      resolversConfig: {
        "Query.extra": {
          auth: false,
          policies: [
            (context, { strapi }) => {
              // allowed
              return true;
            },
          ],
          middlewares: [
            async (next, parent, args, context, info) => {
              console.time("Start resolving categories");
              console.timeEnd("Start resolving categories");

              return await next(parent, args, context, info);
            },
            (resolve, parent, ...rest) => {
              return resolve(parent, ...rest);
            },
          ],
        },
      },
    });
    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
