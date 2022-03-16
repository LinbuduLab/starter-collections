import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { upperDirectiveTransformer } from './directives/upper-case';
import { RecipesModule } from './graphql/module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      sortSchema: true,
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
