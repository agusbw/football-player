import data from '@/lib/source.json';

export async function GET() {
  return Response.json({
    success: true,
    data,
  });
}
