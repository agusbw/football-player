'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { use } from 'react';

export default function Filter({
  positionsPromise,
}: {
  positionsPromise: Promise<string[]>;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //resolve promise using new react use hook
  const positions = use(positionsPromise);

  //put selected position to query params
  function handleFilterChange(position: string) {
    const params = new URLSearchParams(searchParams);

    position === 'all'
      ? params.delete('position')
      : params.set('position', position);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <label
        htmlFor="selectPosition"
        className="text-xl mr-3"
      >
        Position:
      </label>
      <select
        id="selectPosition"
        className="p-2 rounded-md outline-none border-2 border-gray-300 focus:border-gray-500 transition-colors"
        onChange={(e) => handleFilterChange(e.target.value)}
        defaultValue={searchParams.get('position') ?? 'all'}
      >
        <option value="all">All positions</option>
        {Array.from(positions).map((position) => (
          <option
            key={position}
            value={position}
          >
            {position}
          </option>
        ))}
      </select>
    </>
  );
}
