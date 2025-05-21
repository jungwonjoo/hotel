// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ['/', '/hotel-details/:id'],
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// public 경로 패턴 정의
const isPublic = createRouteMatcher([
  '/',
  '/hotel-details/:id',
  '/api/uploadthing'
  
  // 추가 public 경로
]);

export default clerkMiddleware((auth, req) => {
  // public 경로는 항상 접근 허용
  if (isPublic(req)) {
    return NextResponse.next();
  }
  
  // 인증되지 않은 사용자의 경우 (선택적)
    if (!auth) {
    //   if (!auth.session) {
    // 원하는 경우 로그인 페이지로 리디렉션
    const signInUrl = new URL('/sign-in', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // 인증된 사용자는 계속 진행
  return NextResponse.next();
});

// 미들웨어가 적용되는 경로 지정
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
