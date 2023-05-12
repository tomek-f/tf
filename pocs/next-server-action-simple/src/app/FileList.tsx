'use client';

import { useState } from 'react';

export default function NameField({ getFiles }: { getFiles: (dir: string) => Promise<string[]> }) {
  const [files, setFiles] = useState<string[]>([]);

  const onGetFiles = (path: string) => {
    getFiles(path).then(setFiles);
  };

  return (
    <div className="flex flex-col text-left gap-2">
      <button className="border" onClick={() => onGetFiles('.')} type="button">
        Current Directory
      </button>
      <button className="border" onClick={() => onGetFiles('./public')} type="button">
        Public Directory
      </button>

      {files.map((file) => (
        <div key={file}>{file}</div>
      ))}
    </div>
  );
}
