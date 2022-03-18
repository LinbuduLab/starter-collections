export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export interface Blog {
  readonly __typename?: 'Blog';
  readonly Body?: Maybe<Scalars['String']>;
  readonly Date?: Maybe<Scalars['Date']>;
  readonly PostType?: Maybe<ENUM_BLOG_POSTTYPE>;
  readonly Title?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface BlogEntity {
  readonly __typename?: 'BlogEntity';
  readonly attributes?: Maybe<Blog>;
  readonly id?: Maybe<Scalars['ID']>;
}

export interface BlogEntityResponse {
  readonly __typename?: 'BlogEntityResponse';
  readonly data?: Maybe<BlogEntity>;
}

export interface BlogEntityResponseCollection {
  readonly __typename?: 'BlogEntityResponseCollection';
  readonly data: ReadonlyArray<BlogEntity>;
  readonly meta: ResponseCollectionMeta;
}

export interface BlogFiltersInput {
  readonly Body?: InputMaybe<StringFilterInput>;
  readonly Date?: InputMaybe<DateFilterInput>;
  readonly PostType?: InputMaybe<StringFilterInput>;
  readonly Title?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<BlogFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly id?: InputMaybe<IDFilterInput>;
  readonly not?: InputMaybe<BlogFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<BlogFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface BlogInput {
  readonly Body?: InputMaybe<Scalars['String']>;
  readonly Date?: InputMaybe<Scalars['Date']>;
  readonly PostType?: InputMaybe<ENUM_BLOG_POSTTYPE>;
  readonly Title?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface BooleanFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly contains?: InputMaybe<Scalars['Boolean']>;
  readonly containsi?: InputMaybe<Scalars['Boolean']>;
  readonly endsWith?: InputMaybe<Scalars['Boolean']>;
  readonly eq?: InputMaybe<Scalars['Boolean']>;
  readonly gt?: InputMaybe<Scalars['Boolean']>;
  readonly gte?: InputMaybe<Scalars['Boolean']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly lt?: InputMaybe<Scalars['Boolean']>;
  readonly lte?: InputMaybe<Scalars['Boolean']>;
  readonly ne?: InputMaybe<Scalars['Boolean']>;
  readonly not?: InputMaybe<BooleanFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Boolean']>;
  readonly notContainsi?: InputMaybe<Scalars['Boolean']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly startsWith?: InputMaybe<Scalars['Boolean']>;
}

export interface DateFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly contains?: InputMaybe<Scalars['Date']>;
  readonly containsi?: InputMaybe<Scalars['Date']>;
  readonly endsWith?: InputMaybe<Scalars['Date']>;
  readonly eq?: InputMaybe<Scalars['Date']>;
  readonly gt?: InputMaybe<Scalars['Date']>;
  readonly gte?: InputMaybe<Scalars['Date']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt?: InputMaybe<Scalars['Date']>;
  readonly lte?: InputMaybe<Scalars['Date']>;
  readonly ne?: InputMaybe<Scalars['Date']>;
  readonly not?: InputMaybe<DateFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Date']>;
  readonly notContainsi?: InputMaybe<Scalars['Date']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly startsWith?: InputMaybe<Scalars['Date']>;
}

export interface DateTimeFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly contains?: InputMaybe<Scalars['DateTime']>;
  readonly containsi?: InputMaybe<Scalars['DateTime']>;
  readonly endsWith?: InputMaybe<Scalars['DateTime']>;
  readonly eq?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly ne?: InputMaybe<Scalars['DateTime']>;
  readonly not?: InputMaybe<DateTimeFilterInput>;
  readonly notContains?: InputMaybe<Scalars['DateTime']>;
  readonly notContainsi?: InputMaybe<Scalars['DateTime']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly startsWith?: InputMaybe<Scalars['DateTime']>;
}

export const enum ENUM_BLOG_POSTTYPE {
  Explore = 'Explore',
  Note = 'Note',
  Sample = 'Sample',
  Source = 'Source'
};

export interface ExtraType {
  readonly __typename?: 'ExtraType';
  readonly name?: Maybe<Scalars['String']>;
}

export interface FileInfoInput {
  readonly alternativeText?: InputMaybe<Scalars['String']>;
  readonly caption?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
}

export interface FloatFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly contains?: InputMaybe<Scalars['Float']>;
  readonly containsi?: InputMaybe<Scalars['Float']>;
  readonly endsWith?: InputMaybe<Scalars['Float']>;
  readonly eq?: InputMaybe<Scalars['Float']>;
  readonly gt?: InputMaybe<Scalars['Float']>;
  readonly gte?: InputMaybe<Scalars['Float']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt?: InputMaybe<Scalars['Float']>;
  readonly lte?: InputMaybe<Scalars['Float']>;
  readonly ne?: InputMaybe<Scalars['Float']>;
  readonly not?: InputMaybe<FloatFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Float']>;
  readonly notContainsi?: InputMaybe<Scalars['Float']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly startsWith?: InputMaybe<Scalars['Float']>;
}

export type GenericMorph = Blog | I18NLocale | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export interface I18NLocale {
  readonly __typename?: 'I18NLocale';
  readonly code?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface I18NLocaleEntity {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes?: Maybe<I18NLocale>;
  readonly id?: Maybe<Scalars['ID']>;
}

export interface I18NLocaleEntityResponse {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data?: Maybe<I18NLocaleEntity>;
}

export interface I18NLocaleEntityResponseCollection {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
}

export interface I18NLocaleFiltersInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly id?: InputMaybe<IDFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<I18NLocaleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface IDFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly contains?: InputMaybe<Scalars['ID']>;
  readonly containsi?: InputMaybe<Scalars['ID']>;
  readonly endsWith?: InputMaybe<Scalars['ID']>;
  readonly eq?: InputMaybe<Scalars['ID']>;
  readonly gt?: InputMaybe<Scalars['ID']>;
  readonly gte?: InputMaybe<Scalars['ID']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly lt?: InputMaybe<Scalars['ID']>;
  readonly lte?: InputMaybe<Scalars['ID']>;
  readonly ne?: InputMaybe<Scalars['ID']>;
  readonly not?: InputMaybe<IDFilterInput>;
  readonly notContains?: InputMaybe<Scalars['ID']>;
  readonly notContainsi?: InputMaybe<Scalars['ID']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly startsWith?: InputMaybe<Scalars['ID']>;
}

export interface IntFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly contains?: InputMaybe<Scalars['Int']>;
  readonly containsi?: InputMaybe<Scalars['Int']>;
  readonly endsWith?: InputMaybe<Scalars['Int']>;
  readonly eq?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly ne?: InputMaybe<Scalars['Int']>;
  readonly not?: InputMaybe<IntFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Int']>;
  readonly notContainsi?: InputMaybe<Scalars['Int']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly startsWith?: InputMaybe<Scalars['Int']>;
}

export interface JSONFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly contains?: InputMaybe<Scalars['JSON']>;
  readonly containsi?: InputMaybe<Scalars['JSON']>;
  readonly endsWith?: InputMaybe<Scalars['JSON']>;
  readonly eq?: InputMaybe<Scalars['JSON']>;
  readonly gt?: InputMaybe<Scalars['JSON']>;
  readonly gte?: InputMaybe<Scalars['JSON']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly lt?: InputMaybe<Scalars['JSON']>;
  readonly lte?: InputMaybe<Scalars['JSON']>;
  readonly ne?: InputMaybe<Scalars['JSON']>;
  readonly not?: InputMaybe<JSONFilterInput>;
  readonly notContains?: InputMaybe<Scalars['JSON']>;
  readonly notContainsi?: InputMaybe<Scalars['JSON']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly startsWith?: InputMaybe<Scalars['JSON']>;
}

export interface Mutation {
  readonly __typename?: 'Mutation';
  readonly createBlog?: Maybe<BlogEntityResponse>;
  readonly createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteBlog?: Maybe<BlogEntityResponse>;
  readonly deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly updateBlog?: Maybe<BlogEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
}


export interface MutationcreateBlogArgs {
  data: BlogInput;
}


export interface MutationcreateUploadFileArgs {
  data: UploadFileInput;
}


export interface MutationcreateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
}


export interface MutationcreateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
}


export interface MutationdeleteBlogArgs {
  id: Scalars['ID'];
}


export interface MutationdeleteUploadFileArgs {
  id: Scalars['ID'];
}


export interface MutationdeleteUsersPermissionsRoleArgs {
  id: Scalars['ID'];
}


export interface MutationdeleteUsersPermissionsUserArgs {
  id: Scalars['ID'];
}


export interface MutationemailConfirmationArgs {
  confirmation: Scalars['String'];
}


export interface MutationforgotPasswordArgs {
  email: Scalars['String'];
}


export interface MutationloginArgs {
  input: UsersPermissionsLoginInput;
}


export interface MutationmultipleUploadArgs {
  field?: InputMaybe<Scalars['String']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
}


export interface MutationregisterArgs {
  input: UsersPermissionsRegisterInput;
}


export interface MutationremoveFileArgs {
  id: Scalars['ID'];
}


export interface MutationresetPasswordArgs {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
}


export interface MutationupdateBlogArgs {
  data: BlogInput;
  id: Scalars['ID'];
}


export interface MutationupdateFileInfoArgs {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
}


export interface MutationupdateUploadFileArgs {
  data: UploadFileInput;
  id: Scalars['ID'];
}


export interface MutationupdateUsersPermissionsRoleArgs {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
}


export interface MutationupdateUsersPermissionsUserArgs {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
}


export interface MutationuploadArgs {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
}

export interface Pagination {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly pageSize: Scalars['Int'];
  readonly total: Scalars['Int'];
}

export interface PaginationArg {
  readonly limit?: InputMaybe<Scalars['Int']>;
  readonly page?: InputMaybe<Scalars['Int']>;
  readonly pageSize?: InputMaybe<Scalars['Int']>;
  readonly start?: InputMaybe<Scalars['Int']>;
}

export const enum PublicationState {
  LIVE = 'LIVE',
  PREVIEW = 'PREVIEW'
};

export interface Query {
  readonly __typename?: 'Query';
  readonly blog?: Maybe<BlogEntityResponse>;
  readonly blogs?: Maybe<BlogEntityResponseCollection>;
  readonly extra?: Maybe<ExtraType>;
  readonly i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me?: Maybe<UsersPermissionsMe>;
  readonly uploadFile?: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  readonly usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
}


export interface QueryblogArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryblogsArgs {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}


export interface Queryi18NLocaleArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface Queryi18NLocalesArgs {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}


export interface QueryuploadFileArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryuploadFilesArgs {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}


export interface QueryusersPermissionsRoleArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryusersPermissionsRolesArgs {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}


export interface QueryusersPermissionsUserArgs {
  id?: InputMaybe<Scalars['ID']>;
}


export interface QueryusersPermissionsUsersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}

export interface ResponseCollectionMeta {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
}

export interface StringFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly containsi?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly eq?: InputMaybe<Scalars['String']>;
  readonly gt?: InputMaybe<Scalars['String']>;
  readonly gte?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly lt?: InputMaybe<Scalars['String']>;
  readonly lte?: InputMaybe<Scalars['String']>;
  readonly ne?: InputMaybe<Scalars['String']>;
  readonly not?: InputMaybe<StringFilterInput>;
  readonly notContains?: InputMaybe<Scalars['String']>;
  readonly notContainsi?: InputMaybe<Scalars['String']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']>;
  readonly null?: InputMaybe<Scalars['Boolean']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
}

export interface UploadFile {
  readonly __typename?: 'UploadFile';
  readonly alternativeText?: Maybe<Scalars['String']>;
  readonly caption?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly ext?: Maybe<Scalars['String']>;
  readonly formats?: Maybe<Scalars['JSON']>;
  readonly hash: Scalars['String'];
  readonly height?: Maybe<Scalars['Int']>;
  readonly mime: Scalars['String'];
  readonly name: Scalars['String'];
  readonly previewUrl?: Maybe<Scalars['String']>;
  readonly provider: Scalars['String'];
  readonly provider_metadata?: Maybe<Scalars['JSON']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly url: Scalars['String'];
  readonly width?: Maybe<Scalars['Int']>;
}

export interface UploadFileEntity {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes?: Maybe<UploadFile>;
  readonly id?: Maybe<Scalars['ID']>;
}

export interface UploadFileEntityResponse {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data?: Maybe<UploadFileEntity>;
}

export interface UploadFileEntityResponseCollection {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
}

export interface UploadFileFiltersInput {
  readonly alternativeText?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly ext?: InputMaybe<StringFilterInput>;
  readonly formats?: InputMaybe<JSONFilterInput>;
  readonly hash?: InputMaybe<StringFilterInput>;
  readonly height?: InputMaybe<IntFilterInput>;
  readonly id?: InputMaybe<IDFilterInput>;
  readonly mime?: InputMaybe<StringFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UploadFileFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl?: InputMaybe<StringFilterInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly provider_metadata?: InputMaybe<JSONFilterInput>;
  readonly size?: InputMaybe<FloatFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly url?: InputMaybe<StringFilterInput>;
  readonly width?: InputMaybe<IntFilterInput>;
}

export interface UploadFileInput {
  readonly alternativeText?: InputMaybe<Scalars['String']>;
  readonly caption?: InputMaybe<Scalars['String']>;
  readonly ext?: InputMaybe<Scalars['String']>;
  readonly formats?: InputMaybe<Scalars['JSON']>;
  readonly hash?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Int']>;
  readonly mime?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly previewUrl?: InputMaybe<Scalars['String']>;
  readonly provider?: InputMaybe<Scalars['String']>;
  readonly provider_metadata?: InputMaybe<Scalars['JSON']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly url?: InputMaybe<Scalars['String']>;
  readonly width?: InputMaybe<Scalars['Int']>;
}

export interface UsersPermissionsCreateRolePayload {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean'];
}

export interface UsersPermissionsDeleteRolePayload {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean'];
}

export interface UsersPermissionsLoginInput {
  readonly identifier: Scalars['String'];
  readonly password: Scalars['String'];
  readonly provider?: Scalars['String'];
}

export interface UsersPermissionsLoginPayload {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt?: Maybe<Scalars['String']>;
  readonly user: UsersPermissionsMe;
}

export interface UsersPermissionsMe {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked?: Maybe<Scalars['Boolean']>;
  readonly confirmed?: Maybe<Scalars['Boolean']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly role?: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String'];
}

export interface UsersPermissionsMeRole {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly type?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsPasswordPayload {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean'];
}

export interface UsersPermissionsPermission {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String'];
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly role?: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
}

export interface UsersPermissionsPermissionEntity {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes?: Maybe<UsersPermissionsPermission>;
  readonly id?: Maybe<Scalars['ID']>;
}

export interface UsersPermissionsPermissionFiltersInput {
  readonly action?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly id?: InputMaybe<IDFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
}

export interface UsersPermissionsPermissionRelationResponseCollection {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
}

export interface UsersPermissionsRegisterInput {
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
}

export interface UsersPermissionsRole {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
}


export interface UsersPermissionsRolepermissionsArgs {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}


export interface UsersPermissionsRoleusersArgs {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
}

export interface UsersPermissionsRoleEntity {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes?: Maybe<UsersPermissionsRole>;
  readonly id?: Maybe<Scalars['ID']>;
}

export interface UsersPermissionsRoleEntityResponse {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data?: Maybe<UsersPermissionsRoleEntity>;
}

export interface UsersPermissionsRoleEntityResponseCollection {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
}

export interface UsersPermissionsRoleFiltersInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly description?: InputMaybe<StringFilterInput>;
  readonly id?: InputMaybe<IDFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users?: InputMaybe<UsersPermissionsUserFiltersInput>;
}

export interface UsersPermissionsRoleInput {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly permissions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
}

export interface UsersPermissionsUpdateRolePayload {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean'];
}

export interface UsersPermissionsUser {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked?: Maybe<Scalars['Boolean']>;
  readonly confirmed?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly email: Scalars['String'];
  readonly provider?: Maybe<Scalars['String']>;
  readonly role?: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly username: Scalars['String'];
}

export interface UsersPermissionsUserEntity {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes?: Maybe<UsersPermissionsUser>;
  readonly id?: Maybe<Scalars['ID']>;
}

export interface UsersPermissionsUserEntityResponse {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data?: Maybe<UsersPermissionsUserEntity>;
}

export interface UsersPermissionsUserEntityResponseCollection {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
}

export interface UsersPermissionsUserFiltersInput {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked?: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken?: InputMaybe<StringFilterInput>;
  readonly confirmed?: InputMaybe<BooleanFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly email?: InputMaybe<StringFilterInput>;
  readonly id?: InputMaybe<IDFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password?: InputMaybe<StringFilterInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken?: InputMaybe<StringFilterInput>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly username?: InputMaybe<StringFilterInput>;
}

export interface UsersPermissionsUserInput {
  readonly blocked?: InputMaybe<Scalars['Boolean']>;
  readonly confirmationToken?: InputMaybe<Scalars['String']>;
  readonly confirmed?: InputMaybe<Scalars['Boolean']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['String']>;
  readonly provider?: InputMaybe<Scalars['String']>;
  readonly resetPasswordToken?: InputMaybe<Scalars['String']>;
  readonly role?: InputMaybe<Scalars['ID']>;
  readonly username?: InputMaybe<Scalars['String']>;
}

export interface UsersPermissionsUserRelationResponseCollection {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
}
