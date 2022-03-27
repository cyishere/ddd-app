export type GenderTypes = "feminine" | "neuter" | "masculine";

export interface User {
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
}

export interface UserState {
  user: User;
  isLoading: boolean;
}

export interface Set {
  __typename?: "sets" | undefined;
  id?: number;
  name: string;
  slug: string;
  memorizedWords?: {
    __typename?: "memorizedWords" | undefined;
    id: number;
  }[];
  words?: {
    __typename?: "words" | undefined;
    id: number;
  }[];
}

export interface Word {
  __typename?: "words" | undefined;
  id: number;
  article: string;
  german: string;
  english: string;
  set?: Set | null;
}

export interface LearnedSet {
  set_id: number;
  set_name: string;
  words_length: number;
}

export interface MemorizedWord {
  __typename?: "memorizedWords" | undefined;
  word_id: number;
  set_id: number;
}
