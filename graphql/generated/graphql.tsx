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
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "memorizedWords" */
export type MemorizedWords = {
  __typename?: 'memorizedWords';
  available_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  review?: Maybe<Scalars['Int']>;
  /** An object relationship */
  set: Sets;
  set_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
  /** An object relationship */
  word: Words;
  word_id: Scalars['Int'];
};

/** aggregated selection of "memorizedWords" */
export type MemorizedWords_Aggregate = {
  __typename?: 'memorizedWords_aggregate';
  aggregate?: Maybe<MemorizedWords_Aggregate_Fields>;
  nodes: Array<MemorizedWords>;
};

/** aggregate fields of "memorizedWords" */
export type MemorizedWords_Aggregate_Fields = {
  __typename?: 'memorizedWords_aggregate_fields';
  avg?: Maybe<MemorizedWords_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<MemorizedWords_Max_Fields>;
  min?: Maybe<MemorizedWords_Min_Fields>;
  stddev?: Maybe<MemorizedWords_Stddev_Fields>;
  stddev_pop?: Maybe<MemorizedWords_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<MemorizedWords_Stddev_Samp_Fields>;
  sum?: Maybe<MemorizedWords_Sum_Fields>;
  var_pop?: Maybe<MemorizedWords_Var_Pop_Fields>;
  var_samp?: Maybe<MemorizedWords_Var_Samp_Fields>;
  variance?: Maybe<MemorizedWords_Variance_Fields>;
};


/** aggregate fields of "memorizedWords" */
export type MemorizedWords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MemorizedWords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type MemorizedWords_Avg_Fields = {
  __typename?: 'memorizedWords_avg_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "memorizedWords". All fields are combined with a logical 'AND'. */
export type MemorizedWords_Bool_Exp = {
  _and?: InputMaybe<Array<MemorizedWords_Bool_Exp>>;
  _not?: InputMaybe<MemorizedWords_Bool_Exp>;
  _or?: InputMaybe<Array<MemorizedWords_Bool_Exp>>;
  available_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  review?: InputMaybe<Int_Comparison_Exp>;
  set?: InputMaybe<Sets_Bool_Exp>;
  set_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  word?: InputMaybe<Words_Bool_Exp>;
  word_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "memorizedWords" */
export enum MemorizedWords_Constraint {
  /** unique or primary key constraint */
  MemorizedWordsPkey = 'memorizedWords_pkey'
}

/** input type for incrementing numeric columns in table "memorizedWords" */
export type MemorizedWords_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['Int']>;
  word_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "memorizedWords" */
export type MemorizedWords_Insert_Input = {
  available_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Sets_Obj_Rel_Insert_Input>;
  set_id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
  word?: InputMaybe<Words_Obj_Rel_Insert_Input>;
  word_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type MemorizedWords_Max_Fields = {
  __typename?: 'memorizedWords_max_fields';
  available_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
  word_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type MemorizedWords_Min_Fields = {
  __typename?: 'memorizedWords_min_fields';
  available_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
  word_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "memorizedWords" */
export type MemorizedWords_Mutation_Response = {
  __typename?: 'memorizedWords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MemorizedWords>;
};

/** on_conflict condition type for table "memorizedWords" */
export type MemorizedWords_On_Conflict = {
  constraint: MemorizedWords_Constraint;
  update_columns?: Array<MemorizedWords_Update_Column>;
  where?: InputMaybe<MemorizedWords_Bool_Exp>;
};

/** Ordering options when selecting data from "memorizedWords". */
export type MemorizedWords_Order_By = {
  available_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  set?: InputMaybe<Sets_Order_By>;
  set_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  word?: InputMaybe<Words_Order_By>;
  word_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memorizedWords */
export type MemorizedWords_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "memorizedWords" */
export enum MemorizedWords_Select_Column {
  /** column name */
  AvailableAt = 'available_at',
  /** column name */
  Id = 'id',
  /** column name */
  Review = 'review',
  /** column name */
  SetId = 'set_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WordId = 'word_id'
}

/** input type for updating data in table "memorizedWords" */
export type MemorizedWords_Set_Input = {
  available_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  review?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
  word_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type MemorizedWords_Stddev_Fields = {
  __typename?: 'memorizedWords_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type MemorizedWords_Stddev_Pop_Fields = {
  __typename?: 'memorizedWords_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type MemorizedWords_Stddev_Samp_Fields = {
  __typename?: 'memorizedWords_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type MemorizedWords_Sum_Fields = {
  __typename?: 'memorizedWords_sum_fields';
  id?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['Int']>;
  word_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "memorizedWords" */
export enum MemorizedWords_Update_Column {
  /** column name */
  AvailableAt = 'available_at',
  /** column name */
  Id = 'id',
  /** column name */
  Review = 'review',
  /** column name */
  SetId = 'set_id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WordId = 'word_id'
}

/** aggregate var_pop on columns */
export type MemorizedWords_Var_Pop_Fields = {
  __typename?: 'memorizedWords_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type MemorizedWords_Var_Samp_Fields = {
  __typename?: 'memorizedWords_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type MemorizedWords_Variance_Fields = {
  __typename?: 'memorizedWords_variance_fields';
  id?: Maybe<Scalars['Float']>;
  review?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
  word_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "memorizedWords" */
  delete_memorizedWords?: Maybe<MemorizedWords_Mutation_Response>;
  /** delete single row from the table: "memorizedWords" */
  delete_memorizedWords_by_pk?: Maybe<MemorizedWords>;
  /** delete data from the table: "sets" */
  delete_sets?: Maybe<Sets_Mutation_Response>;
  /** delete single row from the table: "sets" */
  delete_sets_by_pk?: Maybe<Sets>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "words" */
  delete_words?: Maybe<Words_Mutation_Response>;
  /** delete single row from the table: "words" */
  delete_words_by_pk?: Maybe<Words>;
  /** insert data into the table: "memorizedWords" */
  insert_memorizedWords?: Maybe<MemorizedWords_Mutation_Response>;
  /** insert a single row into the table: "memorizedWords" */
  insert_memorizedWords_one?: Maybe<MemorizedWords>;
  /** insert data into the table: "sets" */
  insert_sets?: Maybe<Sets_Mutation_Response>;
  /** insert a single row into the table: "sets" */
  insert_sets_one?: Maybe<Sets>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "words" */
  insert_words?: Maybe<Words_Mutation_Response>;
  /** insert a single row into the table: "words" */
  insert_words_one?: Maybe<Words>;
  /** update data of the table: "memorizedWords" */
  update_memorizedWords?: Maybe<MemorizedWords_Mutation_Response>;
  /** update single row of the table: "memorizedWords" */
  update_memorizedWords_by_pk?: Maybe<MemorizedWords>;
  /** update data of the table: "sets" */
  update_sets?: Maybe<Sets_Mutation_Response>;
  /** update single row of the table: "sets" */
  update_sets_by_pk?: Maybe<Sets>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "words" */
  update_words?: Maybe<Words_Mutation_Response>;
  /** update single row of the table: "words" */
  update_words_by_pk?: Maybe<Words>;
};


/** mutation root */
export type Mutation_RootDelete_MemorizedWordsArgs = {
  where: MemorizedWords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MemorizedWords_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SetsArgs = {
  where: Sets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sets_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_WordsArgs = {
  where: Words_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Words_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_MemorizedWordsArgs = {
  objects: Array<MemorizedWords_Insert_Input>;
  on_conflict?: InputMaybe<MemorizedWords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemorizedWords_OneArgs = {
  object: MemorizedWords_Insert_Input;
  on_conflict?: InputMaybe<MemorizedWords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SetsArgs = {
  objects: Array<Sets_Insert_Input>;
  on_conflict?: InputMaybe<Sets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sets_OneArgs = {
  object: Sets_Insert_Input;
  on_conflict?: InputMaybe<Sets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WordsArgs = {
  objects: Array<Words_Insert_Input>;
  on_conflict?: InputMaybe<Words_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Words_OneArgs = {
  object: Words_Insert_Input;
  on_conflict?: InputMaybe<Words_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MemorizedWordsArgs = {
  _inc?: InputMaybe<MemorizedWords_Inc_Input>;
  _set?: InputMaybe<MemorizedWords_Set_Input>;
  where: MemorizedWords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MemorizedWords_By_PkArgs = {
  _inc?: InputMaybe<MemorizedWords_Inc_Input>;
  _set?: InputMaybe<MemorizedWords_Set_Input>;
  pk_columns: MemorizedWords_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SetsArgs = {
  _inc?: InputMaybe<Sets_Inc_Input>;
  _set?: InputMaybe<Sets_Set_Input>;
  where: Sets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sets_By_PkArgs = {
  _inc?: InputMaybe<Sets_Inc_Input>;
  _set?: InputMaybe<Sets_Set_Input>;
  pk_columns: Sets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WordsArgs = {
  _inc?: InputMaybe<Words_Inc_Input>;
  _set?: InputMaybe<Words_Set_Input>;
  where: Words_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Words_By_PkArgs = {
  _inc?: InputMaybe<Words_Inc_Input>;
  _set?: InputMaybe<Words_Set_Input>;
  pk_columns: Words_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "memorizedWords" */
  memorizedWords: Array<MemorizedWords>;
  /** fetch aggregated fields from the table: "memorizedWords" */
  memorizedWords_aggregate: MemorizedWords_Aggregate;
  /** fetch data from the table: "memorizedWords" using primary key columns */
  memorizedWords_by_pk?: Maybe<MemorizedWords>;
  /** fetch data from the table: "sets" */
  sets: Array<Sets>;
  /** fetch aggregated fields from the table: "sets" */
  sets_aggregate: Sets_Aggregate;
  /** fetch data from the table: "sets" using primary key columns */
  sets_by_pk?: Maybe<Sets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  words: Array<Words>;
  /** An aggregate relationship */
  words_aggregate: Words_Aggregate;
  /** fetch data from the table: "words" using primary key columns */
  words_by_pk?: Maybe<Words>;
};


export type Query_RootMemorizedWordsArgs = {
  distinct_on?: InputMaybe<Array<MemorizedWords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemorizedWords_Order_By>>;
  where?: InputMaybe<MemorizedWords_Bool_Exp>;
};


export type Query_RootMemorizedWords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemorizedWords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemorizedWords_Order_By>>;
  where?: InputMaybe<MemorizedWords_Bool_Exp>;
};


export type Query_RootMemorizedWords_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSetsArgs = {
  distinct_on?: InputMaybe<Array<Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sets_Order_By>>;
  where?: InputMaybe<Sets_Bool_Exp>;
};


export type Query_RootSets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sets_Order_By>>;
  where?: InputMaybe<Sets_Bool_Exp>;
};


export type Query_RootSets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootWordsArgs = {
  distinct_on?: InputMaybe<Array<Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Words_Order_By>>;
  where?: InputMaybe<Words_Bool_Exp>;
};


export type Query_RootWords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Words_Order_By>>;
  where?: InputMaybe<Words_Bool_Exp>;
};


export type Query_RootWords_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "sets" */
export type Sets = {
  __typename?: 'sets';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** An array relationship */
  words: Array<Words>;
  /** An aggregate relationship */
  words_aggregate: Words_Aggregate;
};


/** columns and relationships of "sets" */
export type SetsWordsArgs = {
  distinct_on?: InputMaybe<Array<Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Words_Order_By>>;
  where?: InputMaybe<Words_Bool_Exp>;
};


/** columns and relationships of "sets" */
export type SetsWords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Words_Order_By>>;
  where?: InputMaybe<Words_Bool_Exp>;
};

/** aggregated selection of "sets" */
export type Sets_Aggregate = {
  __typename?: 'sets_aggregate';
  aggregate?: Maybe<Sets_Aggregate_Fields>;
  nodes: Array<Sets>;
};

/** aggregate fields of "sets" */
export type Sets_Aggregate_Fields = {
  __typename?: 'sets_aggregate_fields';
  avg?: Maybe<Sets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Sets_Max_Fields>;
  min?: Maybe<Sets_Min_Fields>;
  stddev?: Maybe<Sets_Stddev_Fields>;
  stddev_pop?: Maybe<Sets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sets_Stddev_Samp_Fields>;
  sum?: Maybe<Sets_Sum_Fields>;
  var_pop?: Maybe<Sets_Var_Pop_Fields>;
  var_samp?: Maybe<Sets_Var_Samp_Fields>;
  variance?: Maybe<Sets_Variance_Fields>;
};


/** aggregate fields of "sets" */
export type Sets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Sets_Avg_Fields = {
  __typename?: 'sets_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "sets". All fields are combined with a logical 'AND'. */
export type Sets_Bool_Exp = {
  _and?: InputMaybe<Array<Sets_Bool_Exp>>;
  _not?: InputMaybe<Sets_Bool_Exp>;
  _or?: InputMaybe<Array<Sets_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  words?: InputMaybe<Words_Bool_Exp>;
};

/** unique or primary key constraints on table "sets" */
export enum Sets_Constraint {
  /** unique or primary key constraint */
  SetsNameKey = 'sets_name_key',
  /** unique or primary key constraint */
  SetsPkey = 'sets_pkey',
  /** unique or primary key constraint */
  SetsSlugKey = 'sets_slug_key'
}

/** input type for incrementing numeric columns in table "sets" */
export type Sets_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "sets" */
export type Sets_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Words_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Sets_Max_Fields = {
  __typename?: 'sets_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Sets_Min_Fields = {
  __typename?: 'sets_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "sets" */
export type Sets_Mutation_Response = {
  __typename?: 'sets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sets>;
};

/** input type for inserting object relation for remote table "sets" */
export type Sets_Obj_Rel_Insert_Input = {
  data: Sets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Sets_On_Conflict>;
};

/** on_conflict condition type for table "sets" */
export type Sets_On_Conflict = {
  constraint: Sets_Constraint;
  update_columns?: Array<Sets_Update_Column>;
  where?: InputMaybe<Sets_Bool_Exp>;
};

/** Ordering options when selecting data from "sets". */
export type Sets_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  words_aggregate?: InputMaybe<Words_Aggregate_Order_By>;
};

/** primary key columns input for table: sets */
export type Sets_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "sets" */
export enum Sets_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "sets" */
export type Sets_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Sets_Stddev_Fields = {
  __typename?: 'sets_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Sets_Stddev_Pop_Fields = {
  __typename?: 'sets_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Sets_Stddev_Samp_Fields = {
  __typename?: 'sets_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Sets_Sum_Fields = {
  __typename?: 'sets_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "sets" */
export enum Sets_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** aggregate var_pop on columns */
export type Sets_Var_Pop_Fields = {
  __typename?: 'sets_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Sets_Var_Samp_Fields = {
  __typename?: 'sets_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Sets_Variance_Fields = {
  __typename?: 'sets_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "memorizedWords" */
  memorizedWords: Array<MemorizedWords>;
  /** fetch aggregated fields from the table: "memorizedWords" */
  memorizedWords_aggregate: MemorizedWords_Aggregate;
  /** fetch data from the table: "memorizedWords" using primary key columns */
  memorizedWords_by_pk?: Maybe<MemorizedWords>;
  /** fetch data from the table: "sets" */
  sets: Array<Sets>;
  /** fetch aggregated fields from the table: "sets" */
  sets_aggregate: Sets_Aggregate;
  /** fetch data from the table: "sets" using primary key columns */
  sets_by_pk?: Maybe<Sets>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  words: Array<Words>;
  /** An aggregate relationship */
  words_aggregate: Words_Aggregate;
  /** fetch data from the table: "words" using primary key columns */
  words_by_pk?: Maybe<Words>;
};


export type Subscription_RootMemorizedWordsArgs = {
  distinct_on?: InputMaybe<Array<MemorizedWords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemorizedWords_Order_By>>;
  where?: InputMaybe<MemorizedWords_Bool_Exp>;
};


export type Subscription_RootMemorizedWords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<MemorizedWords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MemorizedWords_Order_By>>;
  where?: InputMaybe<MemorizedWords_Bool_Exp>;
};


export type Subscription_RootMemorizedWords_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSetsArgs = {
  distinct_on?: InputMaybe<Array<Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sets_Order_By>>;
  where?: InputMaybe<Sets_Bool_Exp>;
};


export type Subscription_RootSets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sets_Order_By>>;
  where?: InputMaybe<Sets_Bool_Exp>;
};


export type Subscription_RootSets_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootWordsArgs = {
  distinct_on?: InputMaybe<Array<Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Words_Order_By>>;
  where?: InputMaybe<Words_Bool_Exp>;
};


export type Subscription_RootWords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Words_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Words_Order_By>>;
  where?: InputMaybe<Words_Bool_Exp>;
};


export type Subscription_RootWords_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  role: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "words" */
export type Words = {
  __typename?: 'words';
  article: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  creator: Users;
  creator_id: Scalars['String'];
  english: Scalars['String'];
  german: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  set?: Maybe<Sets>;
  set_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "words" */
export type Words_Aggregate = {
  __typename?: 'words_aggregate';
  aggregate?: Maybe<Words_Aggregate_Fields>;
  nodes: Array<Words>;
};

/** aggregate fields of "words" */
export type Words_Aggregate_Fields = {
  __typename?: 'words_aggregate_fields';
  avg?: Maybe<Words_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Words_Max_Fields>;
  min?: Maybe<Words_Min_Fields>;
  stddev?: Maybe<Words_Stddev_Fields>;
  stddev_pop?: Maybe<Words_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Words_Stddev_Samp_Fields>;
  sum?: Maybe<Words_Sum_Fields>;
  var_pop?: Maybe<Words_Var_Pop_Fields>;
  var_samp?: Maybe<Words_Var_Samp_Fields>;
  variance?: Maybe<Words_Variance_Fields>;
};


/** aggregate fields of "words" */
export type Words_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Words_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "words" */
export type Words_Aggregate_Order_By = {
  avg?: InputMaybe<Words_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Words_Max_Order_By>;
  min?: InputMaybe<Words_Min_Order_By>;
  stddev?: InputMaybe<Words_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Words_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Words_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Words_Sum_Order_By>;
  var_pop?: InputMaybe<Words_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Words_Var_Samp_Order_By>;
  variance?: InputMaybe<Words_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "words" */
export type Words_Arr_Rel_Insert_Input = {
  data: Array<Words_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Words_On_Conflict>;
};

/** aggregate avg on columns */
export type Words_Avg_Fields = {
  __typename?: 'words_avg_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "words" */
export type Words_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "words". All fields are combined with a logical 'AND'. */
export type Words_Bool_Exp = {
  _and?: InputMaybe<Array<Words_Bool_Exp>>;
  _not?: InputMaybe<Words_Bool_Exp>;
  _or?: InputMaybe<Array<Words_Bool_Exp>>;
  article?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  english?: InputMaybe<String_Comparison_Exp>;
  german?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  set?: InputMaybe<Sets_Bool_Exp>;
  set_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "words" */
export enum Words_Constraint {
  /** unique or primary key constraint */
  WordsPkey = 'words_pkey'
}

/** input type for incrementing numeric columns in table "words" */
export type Words_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "words" */
export type Words_Insert_Input = {
  article?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  creator?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  creator_id?: InputMaybe<Scalars['String']>;
  english?: InputMaybe<Scalars['String']>;
  german?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Sets_Obj_Rel_Insert_Input>;
  set_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Words_Max_Fields = {
  __typename?: 'words_max_fields';
  article?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_id?: Maybe<Scalars['String']>;
  english?: Maybe<Scalars['String']>;
  german?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "words" */
export type Words_Max_Order_By = {
  article?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  english?: InputMaybe<Order_By>;
  german?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Words_Min_Fields = {
  __typename?: 'words_min_fields';
  article?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_id?: Maybe<Scalars['String']>;
  english?: Maybe<Scalars['String']>;
  german?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "words" */
export type Words_Min_Order_By = {
  article?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  english?: InputMaybe<Order_By>;
  german?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "words" */
export type Words_Mutation_Response = {
  __typename?: 'words_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Words>;
};

/** input type for inserting object relation for remote table "words" */
export type Words_Obj_Rel_Insert_Input = {
  data: Words_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Words_On_Conflict>;
};

/** on_conflict condition type for table "words" */
export type Words_On_Conflict = {
  constraint: Words_Constraint;
  update_columns?: Array<Words_Update_Column>;
  where?: InputMaybe<Words_Bool_Exp>;
};

/** Ordering options when selecting data from "words". */
export type Words_Order_By = {
  article?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  creator_id?: InputMaybe<Order_By>;
  english?: InputMaybe<Order_By>;
  german?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  set?: InputMaybe<Sets_Order_By>;
  set_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: words */
export type Words_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "words" */
export enum Words_Select_Column {
  /** column name */
  Article = 'article',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  English = 'english',
  /** column name */
  German = 'german',
  /** column name */
  Id = 'id',
  /** column name */
  SetId = 'set_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "words" */
export type Words_Set_Input = {
  article?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  creator_id?: InputMaybe<Scalars['String']>;
  english?: InputMaybe<Scalars['String']>;
  german?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Words_Stddev_Fields = {
  __typename?: 'words_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "words" */
export type Words_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Words_Stddev_Pop_Fields = {
  __typename?: 'words_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "words" */
export type Words_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Words_Stddev_Samp_Fields = {
  __typename?: 'words_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "words" */
export type Words_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Words_Sum_Fields = {
  __typename?: 'words_sum_fields';
  id?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "words" */
export type Words_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** update columns of table "words" */
export enum Words_Update_Column {
  /** column name */
  Article = 'article',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  English = 'english',
  /** column name */
  German = 'german',
  /** column name */
  Id = 'id',
  /** column name */
  SetId = 'set_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Words_Var_Pop_Fields = {
  __typename?: 'words_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "words" */
export type Words_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Words_Var_Samp_Fields = {
  __typename?: 'words_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "words" */
export type Words_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Words_Variance_Fields = {
  __typename?: 'words_variance_fields';
  id?: Maybe<Scalars['Float']>;
  set_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "words" */
export type Words_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
};

export type MemorizedResponseFragment = { __typename?: 'memorizedWords', id: number, word_id: number, review?: number | null, available_at: any, word: { __typename?: 'words', id: number, article: string, german: string, english: string } };

export type InitMemorizedWordMutationVariables = Exact<{
  word_id: Scalars['Int'];
  user_id: Scalars['String'];
  set_id: Scalars['Int'];
}>;


export type InitMemorizedWordMutation = { __typename?: 'mutation_root', insert_memorizedWords_one?: { __typename?: 'memorizedWords', id: number } | null };

export type UpdateMemorizedWordMutationVariables = Exact<{
  id: Scalars['Int'];
  available_at: Scalars['timestamptz'];
  review: Scalars['Int'];
}>;


export type UpdateMemorizedWordMutation = { __typename?: 'mutation_root', update_memorizedWords_by_pk?: { __typename?: 'memorizedWords', id: number } | null };

export type GetLearnedWordsByUserQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetLearnedWordsByUserQuery = { __typename?: 'query_root', memorizedWords: Array<{ __typename?: 'memorizedWords', word_id: number, set_id: number }> };

export type GetMemorizedWordsQueryVariables = Exact<{
  set_id: Scalars['Int'];
  user_id: Scalars['String'];
}>;


export type GetMemorizedWordsQuery = { __typename?: 'query_root', memorizedWords: Array<{ __typename?: 'memorizedWords', id: number, word_id: number, review?: number | null, available_at: any, word: { __typename?: 'words', id: number, article: string, german: string, english: string } }> };

export type GetSetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSetsQuery = { __typename?: 'query_root', sets: Array<{ __typename?: 'sets', id: number, name: string, slug: string, words: Array<{ __typename?: 'words', id: number }> }> };

export type GetUnfinishedWordsQueryVariables = Exact<{
  user_id: Scalars['String'];
  set_id: Scalars['Int'];
}>;


export type GetUnfinishedWordsQuery = { __typename?: 'query_root', memorizedWords: Array<{ __typename?: 'memorizedWords', id: number, word_id: number, review?: number | null, available_at: any, word: { __typename?: 'words', id: number, article: string, german: string, english: string } }> };

export type GetWordsQueryVariables = Exact<{
  set_id: Scalars['Int'];
}>;


export type GetWordsQuery = { __typename?: 'query_root', words: Array<{ __typename?: 'words', id: number, article: string, german: string, english: string, set?: { __typename?: 'sets', name: string, slug: string } | null }> };

export const MemorizedResponseFragmentDoc = gql`
    fragment MemorizedResponse on memorizedWords {
  id
  word_id
  review
  available_at
  word {
    id
    article
    german
    english
  }
}
    `;
export const InitMemorizedWordDocument = gql`
    mutation InitMemorizedWord($word_id: Int!, $user_id: String!, $set_id: Int!) {
  insert_memorizedWords_one(
    object: {word_id: $word_id, user_id: $user_id, set_id: $set_id}
  ) {
    id
  }
}
    `;
export type InitMemorizedWordMutationFn = Apollo.MutationFunction<InitMemorizedWordMutation, InitMemorizedWordMutationVariables>;

/**
 * __useInitMemorizedWordMutation__
 *
 * To run a mutation, you first call `useInitMemorizedWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitMemorizedWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initMemorizedWordMutation, { data, loading, error }] = useInitMemorizedWordMutation({
 *   variables: {
 *      word_id: // value for 'word_id'
 *      user_id: // value for 'user_id'
 *      set_id: // value for 'set_id'
 *   },
 * });
 */
export function useInitMemorizedWordMutation(baseOptions?: Apollo.MutationHookOptions<InitMemorizedWordMutation, InitMemorizedWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitMemorizedWordMutation, InitMemorizedWordMutationVariables>(InitMemorizedWordDocument, options);
      }
export type InitMemorizedWordMutationHookResult = ReturnType<typeof useInitMemorizedWordMutation>;
export type InitMemorizedWordMutationResult = Apollo.MutationResult<InitMemorizedWordMutation>;
export type InitMemorizedWordMutationOptions = Apollo.BaseMutationOptions<InitMemorizedWordMutation, InitMemorizedWordMutationVariables>;
export const UpdateMemorizedWordDocument = gql`
    mutation UpdateMemorizedWord($id: Int!, $available_at: timestamptz!, $review: Int!) {
  update_memorizedWords_by_pk(
    pk_columns: {id: $id}
    _set: {available_at: $available_at, review: $review}
  ) {
    id
  }
}
    `;
export type UpdateMemorizedWordMutationFn = Apollo.MutationFunction<UpdateMemorizedWordMutation, UpdateMemorizedWordMutationVariables>;

/**
 * __useUpdateMemorizedWordMutation__
 *
 * To run a mutation, you first call `useUpdateMemorizedWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemorizedWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemorizedWordMutation, { data, loading, error }] = useUpdateMemorizedWordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      available_at: // value for 'available_at'
 *      review: // value for 'review'
 *   },
 * });
 */
export function useUpdateMemorizedWordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemorizedWordMutation, UpdateMemorizedWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemorizedWordMutation, UpdateMemorizedWordMutationVariables>(UpdateMemorizedWordDocument, options);
      }
export type UpdateMemorizedWordMutationHookResult = ReturnType<typeof useUpdateMemorizedWordMutation>;
export type UpdateMemorizedWordMutationResult = Apollo.MutationResult<UpdateMemorizedWordMutation>;
export type UpdateMemorizedWordMutationOptions = Apollo.BaseMutationOptions<UpdateMemorizedWordMutation, UpdateMemorizedWordMutationVariables>;
export const GetLearnedWordsByUserDocument = gql`
    query GetLearnedWordsByUser($user_id: String!) {
  memorizedWords(where: {user_id: {_eq: $user_id}, review: {_eq: 100}}) {
    word_id
    set_id
  }
}
    `;

/**
 * __useGetLearnedWordsByUserQuery__
 *
 * To run a query within a React component, call `useGetLearnedWordsByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLearnedWordsByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLearnedWordsByUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetLearnedWordsByUserQuery(baseOptions: Apollo.QueryHookOptions<GetLearnedWordsByUserQuery, GetLearnedWordsByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLearnedWordsByUserQuery, GetLearnedWordsByUserQueryVariables>(GetLearnedWordsByUserDocument, options);
      }
export function useGetLearnedWordsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLearnedWordsByUserQuery, GetLearnedWordsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLearnedWordsByUserQuery, GetLearnedWordsByUserQueryVariables>(GetLearnedWordsByUserDocument, options);
        }
export type GetLearnedWordsByUserQueryHookResult = ReturnType<typeof useGetLearnedWordsByUserQuery>;
export type GetLearnedWordsByUserLazyQueryHookResult = ReturnType<typeof useGetLearnedWordsByUserLazyQuery>;
export type GetLearnedWordsByUserQueryResult = Apollo.QueryResult<GetLearnedWordsByUserQuery, GetLearnedWordsByUserQueryVariables>;
export const GetMemorizedWordsDocument = gql`
    query GetMemorizedWords($set_id: Int!, $user_id: String!) {
  memorizedWords(where: {set_id: {_eq: $set_id}, user_id: {_eq: $user_id}}) {
    ...MemorizedResponse
  }
}
    ${MemorizedResponseFragmentDoc}`;

/**
 * __useGetMemorizedWordsQuery__
 *
 * To run a query within a React component, call `useGetMemorizedWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemorizedWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemorizedWordsQuery({
 *   variables: {
 *      set_id: // value for 'set_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetMemorizedWordsQuery(baseOptions: Apollo.QueryHookOptions<GetMemorizedWordsQuery, GetMemorizedWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemorizedWordsQuery, GetMemorizedWordsQueryVariables>(GetMemorizedWordsDocument, options);
      }
export function useGetMemorizedWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemorizedWordsQuery, GetMemorizedWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemorizedWordsQuery, GetMemorizedWordsQueryVariables>(GetMemorizedWordsDocument, options);
        }
export type GetMemorizedWordsQueryHookResult = ReturnType<typeof useGetMemorizedWordsQuery>;
export type GetMemorizedWordsLazyQueryHookResult = ReturnType<typeof useGetMemorizedWordsLazyQuery>;
export type GetMemorizedWordsQueryResult = Apollo.QueryResult<GetMemorizedWordsQuery, GetMemorizedWordsQueryVariables>;
export const GetSetsDocument = gql`
    query GetSets {
  sets {
    id
    name
    slug
    words {
      id
    }
  }
}
    `;

/**
 * __useGetSetsQuery__
 *
 * To run a query within a React component, call `useGetSetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSetsQuery(baseOptions?: Apollo.QueryHookOptions<GetSetsQuery, GetSetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSetsQuery, GetSetsQueryVariables>(GetSetsDocument, options);
      }
export function useGetSetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSetsQuery, GetSetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSetsQuery, GetSetsQueryVariables>(GetSetsDocument, options);
        }
export type GetSetsQueryHookResult = ReturnType<typeof useGetSetsQuery>;
export type GetSetsLazyQueryHookResult = ReturnType<typeof useGetSetsLazyQuery>;
export type GetSetsQueryResult = Apollo.QueryResult<GetSetsQuery, GetSetsQueryVariables>;
export const GetUnfinishedWordsDocument = gql`
    query GetUnfinishedWords($user_id: String!, $set_id: Int!) {
  memorizedWords(
    where: {user_id: {_eq: $user_id}, set_id: {_eq: $set_id}, review: {_neq: 100}}
  ) {
    ...MemorizedResponse
  }
}
    ${MemorizedResponseFragmentDoc}`;

/**
 * __useGetUnfinishedWordsQuery__
 *
 * To run a query within a React component, call `useGetUnfinishedWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnfinishedWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnfinishedWordsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      set_id: // value for 'set_id'
 *   },
 * });
 */
export function useGetUnfinishedWordsQuery(baseOptions: Apollo.QueryHookOptions<GetUnfinishedWordsQuery, GetUnfinishedWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUnfinishedWordsQuery, GetUnfinishedWordsQueryVariables>(GetUnfinishedWordsDocument, options);
      }
export function useGetUnfinishedWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUnfinishedWordsQuery, GetUnfinishedWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUnfinishedWordsQuery, GetUnfinishedWordsQueryVariables>(GetUnfinishedWordsDocument, options);
        }
export type GetUnfinishedWordsQueryHookResult = ReturnType<typeof useGetUnfinishedWordsQuery>;
export type GetUnfinishedWordsLazyQueryHookResult = ReturnType<typeof useGetUnfinishedWordsLazyQuery>;
export type GetUnfinishedWordsQueryResult = Apollo.QueryResult<GetUnfinishedWordsQuery, GetUnfinishedWordsQueryVariables>;
export const GetWordsDocument = gql`
    query GetWords($set_id: Int!) {
  words(where: {set_id: {_eq: $set_id}}) {
    id
    article
    german
    english
    set {
      name
      slug
    }
  }
}
    `;

/**
 * __useGetWordsQuery__
 *
 * To run a query within a React component, call `useGetWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWordsQuery({
 *   variables: {
 *      set_id: // value for 'set_id'
 *   },
 * });
 */
export function useGetWordsQuery(baseOptions: Apollo.QueryHookOptions<GetWordsQuery, GetWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWordsQuery, GetWordsQueryVariables>(GetWordsDocument, options);
      }
export function useGetWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWordsQuery, GetWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWordsQuery, GetWordsQueryVariables>(GetWordsDocument, options);
        }
export type GetWordsQueryHookResult = ReturnType<typeof useGetWordsQuery>;
export type GetWordsLazyQueryHookResult = ReturnType<typeof useGetWordsLazyQuery>;
export type GetWordsQueryResult = Apollo.QueryResult<GetWordsQuery, GetWordsQueryVariables>;