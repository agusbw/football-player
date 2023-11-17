import data from '@/lib/source.json';

export async function GET() {
  const allPositions = new Set(data.map((player) => player.position));

  return Response.json({
    success: true,
    data: Array.from(allPositions),
  });
}
