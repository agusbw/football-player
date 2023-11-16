import data from '@/lib/source.json';

export async function GET() {
  return Response.json({
    status: 'success',
    data,
  });
}
