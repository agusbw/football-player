import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-5">
      <h2 className="text-xl">Player not found!</h2>
      <Link
        href={'/'}
        className="block px-4 py-2 mx-auto text-sm text-white bg-blue-500 rounded-sm hover:bg-blue-600"
      >
        Back to home
      </Link>
    </div>
  );
}
