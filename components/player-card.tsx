import { Player } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <Link
      href={`/players/${player.username}`}
      className="p-4 border rounded-md bg-white shadow-md hover:scale-105 hover:shadow-lg transition-transform "
    >
      <div className="flex flex-col justify-center items-center sm:items-start sm:flex-row sm:justify-normal gap-5">
        <div className="w-32 h-40 relative">
          <Image
            alt={`${player.firstName + player.lastName} profile picutre`}
            src={player.avatar}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold capitalize text-center sm:text-left">
            {player.firstName + ' ' + player.lastName}
          </p>
          <p className="text-lg capitalize text-center sm:text-left">
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
