'use client';

import { useRef, useTransition } from 'react';

export default function AddButton({ addTodo }: { addTodo: (todo: string) => Promise<void> }) {
  const [pending, startTransition] = useTransition();
  const todoRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        name="todo"
        ref={todoRef}
        type="text"
      />
      <button
        className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        disabled={pending}
        onClick={async () => {
          // @ts-expect-error EXP
          startTransition(async () => {
            await addTodo(todoRef.current?.value ?? '');
          });
        }}
        type="button"
      >
        Add Todo
      </button>
    </div>
  );
}
