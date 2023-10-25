import { type NextRequest, NextResponse } from 'next/server';
import {sign} from '@/components/jwt/JwtUtil';
 
export async function POST(request: NextRequest) {
  const reqBody:{user_id:string, user_pwd:string} = await request.json();
  const jwt = sign(reqBody.user_id);
  return NextResponse.json({jwt: jwt});
}