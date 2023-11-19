import PlayerCard from '@/components/player-card';
import { type Player } from '@/lib/types';

async function getPlayers(): Promise<Player[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/players`);

  // //delay untuk simulasi loading saja
  // await new Promise((resolve) => setTimeout(resolve, 800));

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();

  return data as Player[];
}

export default async function PlayerList({
  selectedPosition,
}: {
  selectedPosition: string;
}) {
  let players = await getPlayers();

  if (selectedPosition) {
    players = players.filter((player) => player.position === selectedPosition);
  }
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2 xl:grid-cols-3">
      {players.map((player) => (
        <PlayerCard
          key={player.username}
          player={player}
        />
      ))}
    </div>
  );
}
