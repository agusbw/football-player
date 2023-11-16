import data from '@/lib/source.json';

export async function GET(
  request: Request,
  { params }: { params: { uname: string } }
) {
  const player = data.find((player) => player.username === params.uname);

  if (!player) {
    return Response.json({
      status: 'error',
      message: 'Player not found',
    });
  }

  return Response.json({
    status: 'success',
    data: player,
  });
}
