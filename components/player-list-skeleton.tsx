function PlayerCardSkeleton() {
  return (
    <div className="p-4 border rounded-md bg-white shadow-md">
      <div className="animate-pulse flex flex-col sm:flex-row justify-center sm:justify-normal sm:space-x-4">
        <div className="bg-slate-200 h-40 w-32 mx-auto sm:mx-0"></div>
        <div className="flex-1 space-y-6 mt-5 sm:mt-0">
          <div className="h-5 bg-slate-200 rounded w-4/5 mx-auto sm:mx-0"></div>
          <div className="h-3 bg-slate-200 rounded w-3/5 mx-auto sm:mx-0"></div>
          <div className="space-y-3">
            <div className="h-2 bg-slate-200 rounded w-2/3 mx-auto sm:mx-0"></div>
            <div className="h-2 bg-slate-200 rounded w-2/3 mx-auto sm:mx-0"></div>
            <div className="h-2 bg-slate-200 rounded w-2/3 mx-auto sm:mx-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlayerListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 mt-4">
      <PlayerCardSkeleton />
      <PlayerCardSkeleton />
      <PlayerCardSkeleton />
      <PlayerCardSkeleton />
      <PlayerCardSkeleton />
      <PlayerCardSkeleton />
    </div>
  );
}
