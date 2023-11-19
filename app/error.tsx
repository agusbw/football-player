'use client';

//next js error component to catch any thrown error when fetching data
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        className="px-4 py-2 mx-auto text-sm text-white bg-blue-500 rounded-sm hover:bg-blue-600"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
