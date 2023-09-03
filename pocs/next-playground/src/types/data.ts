// interface PostParams {
//   id: string;
// }

// todo 'global' type, better name
// export interface PostPathData {
//   params: PostParams;
// }

export interface Country {
  continent: string;
  id: number;
  iso2: string;
  iso3: string;
  local_name: string;
  name: string;
}

export interface Todo {
  id: number;
  user_id: number;
  task: string;
  is_complete: boolean;
  inserted_at: string;
}

export interface Todo2 {
  id: number;
  task: string;
  is_complete: boolean;
  inserted_at: string;
}
