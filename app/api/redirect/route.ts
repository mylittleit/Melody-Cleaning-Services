import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  const id = req.nextUrl.searchParams.get('id') || 'unknown';

  if (!url || !url.startsWith('http')) {
    return new NextResponse('Invalid or missing URL', { status: 400 });
  }

  // Optional: Log the redirect
  console.log(`Redirect ID: ${id}, to URL: ${url}`);

  // Perform redirect
  return NextResponse.redirect(url);
}
