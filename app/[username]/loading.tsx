export default function Loading() {
  return (
    <main className="flex flex-col-reverse items-center justify-center w-screen gap-5 p-10 lg:flex-row lg:px-80 lg:py-40">
      <div className="animate-pulse space-y-4">
        <div className="h-14 lg:w-1/4  mx-auto lg:mx-0 bg-slate-200 rounded"></div>
        <div className="flex justify-center gap-8 lg:justify-normal">
          <div className="w-24 h-8 bg-slate-200 rounded"></div>
          <div className="w-24 h-8 bg-slate-200 rounded"></div>
          <div className="w-24 h-8 bg-slate-200 rounded"></div>
        </div>
        <div className="xl:w-[650px]">
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 w-1/2 mt-2 bg-slate-200 rounded"></div>
        </div>
        <div className="space-y-2 w-1/2">
          <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded"></div>
          <div className="h-4 bg-slate-200 rounded"></div>
        </div>
        <div className="h-8 w-2/5 mx-auto lg:mx-0 bg-slate-200 rounded"></div>
      </div>
      <div className="w-52 h-72 bg-slate-200 rounded-lg"></div>
    </main>
  );
}
