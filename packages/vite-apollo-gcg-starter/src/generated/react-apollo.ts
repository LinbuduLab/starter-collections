import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecipe: Recipe;
};


export type MutationAddRecipeArgs = {
  recipe: RecipeInput;
};

export type Query = {
  __typename?: 'Query';
  recipe?: Maybe<Recipe>;
  /** Get all the recipes from around the world  */
  recipes: Array<Recipe>;
};


export type QueryRecipeArgs = {
  title: Scalars['String'];
};

/** Object representing cooking recipe */
export type Recipe = {
  __typename?: 'Recipe';
  averageRating?: Maybe<Scalars['Float']>;
  creationDate: Scalars['DateTime'];
  /** The recipe description with preparation info */
  description?: Maybe<Scalars['String']>;
  ratings: Array<Scalars['Int']>;
  ratingsCount: Scalars['Int'];
  /** @deprecated Use `description` field instead */
  specification?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


/** Object representing cooking recipe */
export type RecipeRatingsCountArgs = {
  minRate?: InputMaybe<Scalars['Int']>;
};

export type RecipeInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', title: string, ratings: Array<number>, averageRating?: number | null, ratingsCount: number, description?: string | null, creationDate: any }> };


export const RecipesDocument = gql`
    query recipes {
  recipes {
    title
    ratings
    averageRating
    ratingsCount
    description
    creationDate
  }
}
    `;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
      }
export function useRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
        }
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<RecipesQuery, RecipesQueryVariables>;