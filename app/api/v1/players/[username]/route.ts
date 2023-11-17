import data from '@/lib/source.json';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      username: string;
    };
  }
) {
  const { username } = params;
  const player = data.find((player) => player.username === username);

  if (!player) {
    return Response.json(
      {
        success: false,
        message: 'Player not found',
      },
      {
        status: 404,
      }
    );
  }

  return Response.json({
    success: true,
    data: player,
  });
}
