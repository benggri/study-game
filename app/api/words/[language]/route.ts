import { headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';
import {KoreanDictionary} from '@/components/dictionary/Korean';

export async function GET(request: NextRequest, {params}: {params: {language:string}}) {
  const headersList = headers();
  const referer = headersList.get('referer');
  switch(params.language) {
    case 'korean':
      return NextResponse.json(KoreanDictionary);
    default:
      return NextResponse.json(KoreanDictionary);
  }
}
