import fs from 'node:fs/promises';

import FileList from './FileList';

export default function Home() {
  const getFiles = async (path: string) => {
    'use server';

    return fs.readdir(path);
  };

  return (
    <main className="p-5 text-2xl max-w-xs">
      <FileList getFiles={getFiles} />
    </main>
  );
}
