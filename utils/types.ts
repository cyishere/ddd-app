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
  id: number;
  name: string;
  slug: string;
}

export interface Word {
  id: number;
  article: string;
  german: string;
  english: string;
  set?: {
    name: string;
    slug: string;
  };
  unstarted?: boolean;
  learned?: boolean;
}

export interface LearnedSet {
  set_id: number;
  set_name: string;
  words_length: number;
}
