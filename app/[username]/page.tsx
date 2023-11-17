import { type Player } from '@/lib/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: {
    username: string;
  };
}) {
  return {
    title: params.username,
  };
}

async function getPlayer(username: string): Promise<Player | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/players/${username}`
  );

  const { data } = await res.json();
  if (!data) return null;
  return data as Player;
}

export default async function PlayerDetailPage({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const player = await getPlayer(params.username);

  if (!player) {
    notFound();
  }

  return (
    <main className="flex flex-col-reverse items-center justify-center w-screen gap-5 p-10 lg:flex-row lg:px-80 lg:py-40">
      <div className="space-y-4">
        <p className="text-3xl font-bold text-center lg:text-left">
          {player.firstName + ' ' + player.lastName}
        </p>
        <div className="flex justify-center gap-8 lg:justify-normal">
          <div>
            <p className="text-gray-500">Position</p>
            <p className="text-lg font-semibold capitalize">
              {player.position}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Country</p>
            <p className="text-lg font-semibold capitalize">{player.country}</p>
          </div>
          <div>
            <p className="text-gray-500">Username</p>
            <p className="text-lg font-semibold">{player.username}</p>
          </div>
        </div>
        <p>
          {player.firstName + ' ' + player.lastName} is a footballer from{' '}
          <span className="font-semibold">
            {player.city}, {player.country}
          </span>{' '}
          who enjoys to play as a{' '}
          <span className="font-semibold">{player.position}</span>
        </p>
        <div className="">
          <p className="font-semibold">Contact Detail</p>
          <div className="grid grid-cols-[auto_1fr] gap-x-5">
            <p>Phone</p>
            <p>: {player.phoneNumber}</p>
            <p>Email</p>
            <p>: {player.email}</p>
          </div>
        </div>
        <Link
          href="/"
          className="block px-4 py-2 mx-auto text-sm text-white bg-blue-500 rounded-sm lg:mx-0 w-fit hover:bg-blue-600"
        >
          Other Players
        </Link>
      </div>
      <Image
        alt={`${player.firstName + player.lastName}'s profile picture`}
        src={player.avatar}
        width={200}
        height={272}
        className="rounded-lg shadow-sm"
      />
    </main>
  );
}
