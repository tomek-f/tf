// For simplicity we are creating our own types here.
// If you want the full types check out:

import type { SomeObj } from './misc';

// https://github.com/octokit/openapi-types.ts
export interface Repository extends SomeObj {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  private: boolean;
}
