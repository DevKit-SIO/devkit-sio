
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const host = request.headers.get('host');
    const nonWwwHost = 'devkit-sio.com'; // Replace with your actual domain if different locally, or use env var
    const wwwHost = `www.${nonWwwHost}`;

    // Check if we are in production to avoid redirecting localhost
    const isProduction = process.env.NODE_ENV === 'production';

    if (isProduction && host && host === nonWwwHost) {
        const url = request.nextUrl.clone();
        url.host = wwwHost;
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
