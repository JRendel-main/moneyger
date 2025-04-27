import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  const token = request.cookies.get('sb-access-token')?.value

  if (!token) {
    // No token, redirect to login
    if (url.pathname.startsWith('/dashboard')) {
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  return NextResponse.next()
}

// Apply only to these routes
export const config = {
  matcher: ['/dashboard/:path*'],
}
