import Filter from '@/components/filter';
import PlayerList from '@/components/player-list';
import { Suspense } from 'react';
import PlayerListSkeleton from '@/components/player-list-skeleton';

async function getAllPositions(): Promise<string[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/positions`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { data } = await res.json();

  return data as string[];
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    position?: string;
  };
}) {
  const positions = await getAllPositions();
  const selectedPosition = searchParams?.position || '';

  return (
    <main className="p-10">
      <h1 className="text-4xl font-semibold mb-3">Football Player List</h1>
      <Filter positions={positions} />
      <Suspense fallback={<PlayerListSkeleton />}>
        <PlayerList selectedPosition={selectedPosition} />
      </Suspense>
    </main>
  );
}
