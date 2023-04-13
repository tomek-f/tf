import type { PostgrestResponse } from '@supabase/supabase-js';

const supabaseSWRWrapper =
  <T>(getData: () => Promise<PostgrestResponse<T>>) =>
  async (hackedUrl: RequestInfo | URL): Promise<T[]> => {
    const response = await getData();

    console.log(response, hackedUrl);

    if (response.error) {
      throw new Error(response.error.message);
    }

    return response.data;
  };

export default supabaseSWRWrapper;
