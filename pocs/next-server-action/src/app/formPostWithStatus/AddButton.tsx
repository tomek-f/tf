'use client';

// @ts-expect-error EXP
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function AddButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      disabled={pending}
      type="submit"
    >
      Add Todo
    </button>
  );
}
