import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/accounts', '/budget', '/settings']
  // Auth routes that should redirect to dashboard if already authenticated
  const authRoutes = ['/auth', '/login', '/register']

  const isProtectedRoute = protectedRoutes.some(path => req.nextUrl.pathname.startsWith(path))
  const isAuthRoute = authRoutes.some(path => req.nextUrl.pathname.startsWith(path))

  if (!session && isProtectedRoute) {
    // Redirect to auth page if trying to access protected route without session
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  if (session && isAuthRoute) {
    // Redirect to dashboard if trying to access auth routes with active session
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
