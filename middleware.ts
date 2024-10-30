import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "variant";

const MARKETING_BUCKETS = ["control", "test"] as const;
const getBucket = () =>
  MARKETING_BUCKETS[Math.floor(Math.random() * MARKETING_BUCKETS.length)];

export function middleware(req: NextRequest) {
  const bucket = req.cookies.get(COOKIE_NAME)?.value || getBucket();
  const res = NextResponse.next();

  if (!req.cookies.get(COOKIE_NAME)) {
    res.cookies.set(COOKIE_NAME, bucket);
  }

  return res;
}
