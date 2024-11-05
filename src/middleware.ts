import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

   if (pathname.includes("/sign-up/business-information")) {
    if (url.searchParams.get("onboarding_stage") !== "2") {
      url.searchParams.set("onboarding_stage", "2");
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith("/sign-up") && !url.searchParams.has("onboarding_stage")) {
    url.searchParams.set("onboarding_stage", "1");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
