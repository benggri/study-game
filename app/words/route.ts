import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const headersList = headers();
  const referer = headersList.get('referer');
  return NextResponse.json({data: [{"id" : '1'}]});
}
