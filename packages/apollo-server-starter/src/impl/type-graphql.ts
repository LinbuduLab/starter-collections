import 'reflect-metadata';
import chalk from 'chalk';
import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';

import {
  Field,
  ObjectType,
  Int,
  Float,
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  ResolverInterface,
  Root,
  InputType,
  buildSchema,
} from 'type-graphql';
import path from 'path';

@ObjectType({ description: 'Object representing cooking recipe' })
export class Recipe {
  @Field()
  title!: string;

  @Field((type) => String, {
    nullable: true,
    deprecationReason: 'Use `description` field instead',
  })
  get specification(): string | undefined {
    return this.description;
  }

  @Field({
    nullable: true,
    description: 'The recipe description with preparation info',
  })
  description?: string;

  @Field((type) => [Int])
  ratings!: number[];

  @Field()
  creationDate!: Date;

  @Field((type) => Int)
  ratingsCount!: number;

  @Field((type) => Float, { nullable: true })
  get averageRating(): number | null {
    const ratingsCount = this.ratings.length;
    if (ratingsCount === 0) {
      return null;
    }
    const ratingsSum = this.ratings.reduce((a, b) => a + b, 0);
    return ratingsSum / ratingsCount;
  }
}

@InputType()
export class RecipeInput implements Partial<Recipe> {
  @Field()
  title!: string;

  @Field({ nullable: true })
  description?: string;
}

export function createRecipeSamples() {
  return [
    createRecipe({
      description: 'Desc 1',
      title: 'Recipe 1',
      ratings: [0, 3, 1],
      creationDate: new Date('2018-04-11'),
    }),
    createRecipe({
      description: 'Desc 2',
      title: 'Recipe 2',
      ratings: [4, 2, 3, 1],
      creationDate: new Date('2018-04-15'),
    }),
    createRecipe({
      description: 'Desc 3',
      title: 'Recipe 3',
      ratings: [5, 4],
      creationDate: new Date(),
    }),
  ];
}

function createRecipe(recipeData: Partial<Recipe>) {
  return Object.assign(new Recipe(), recipeData);
}

@Resolver((of) => Recipe)
export class RecipeResolver implements ResolverInterface<Recipe> {
  private readonly items: Recipe[] = createRecipeSamples();

  @Query((returns) => Recipe, { nullable: true })
  async recipe(@Arg('title') title: string): Promise<Recipe | undefined> {
    return await this.items.find((recipe) => recipe.title === title);
  }

  @Query((returns) => [Recipe], {
    description: 'Get all the recipes from around the world ',
  })
  async recipes(): Promise<Recipe[]> {
    return await this.items;
  }

  @Mutation((returns) => Recipe)
  async addRecipe(@Arg('recipe') recipeInput: RecipeInput): Promise<Recipe> {
    const recipe = Object.assign(new Recipe(), {
      description: recipeInput.description,
      title: recipeInput.title,
      ratings: [],
      creationDate: new Date(),
    });
    await this.items.push(recipe);
    return recipe;
  }

  @FieldResolver()
  ratingsCount(
    @Root() recipe: Recipe,
    @Arg('minRate', (type) => Int, { defaultValue: 0.0 }) minRate: number
  ): number {
    return recipe.ratings.filter((rating) => rating >= minRate).length;
  }
}

export async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [RecipeResolver],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, '../type-graphql.schema.gql'),
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  // Start the server
  const { url } = await server.listen(4001);
  console.log(
    `Server is running, GraphQL Playground available at ${chalk.green(url)}`
  );
}
