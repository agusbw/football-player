import { Player } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Link
      href={`/${player.username}`}
      className="p-4 transition-transform bg-white border rounded-md shadow-md hover:scale-105 hover:shadow-lg"
    >
      <div className="flex flex-col items-center justify-center gap-5 sm:items-start sm:flex-row sm:justify-normal">
        <div className="relative w-32 h-40">
          <Image
            alt={`${player.firstName + player.lastName}'s profile picture`}
            src={player.avatar}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold text-center capitalize sm:text-left">
            {player.firstName + ' ' + player.lastName}
          </p>
          <p className="text-lg text-center capitalize sm:text-left">
            {player.position}
          </p>
          <div className="grid grid-cols-[auto_1fr] gap-x-5 mt-3">
            <p>City</p>
            <p>:{player.city}</p>
            <p>Country</p>
            <p>:{player.country}</p>
            <p>Phone</p>
            <p>:{player.phoneNumber}</p>
            <p>Email</p>
            <p>:{player.email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
