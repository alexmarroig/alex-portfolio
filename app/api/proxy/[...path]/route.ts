import { NextRequest, NextResponse } from "next/server";

const ALLOWED_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];

async function handleProxy(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  const method = request.method.toUpperCase();
  if (!ALLOWED_METHODS.includes(method)) {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const baseUrl = process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    return NextResponse.json(
      { error: "Missing API_BASE_URL (or NEXT_PUBLIC_API_BASE_URL) environment variable" },
      { status: 500 }
    );
  }

  const { path } = await context.params;
  const target = new URL(`${baseUrl.replace(/\/$/, "")}/${path.join("/")}`);
  request.nextUrl.searchParams.forEach((value, key) => target.searchParams.append(key, value));

  const response = await fetch(target.toString(), {
    method,
    headers: {
      "content-type": request.headers.get("content-type") ?? "application/json"
    },
    body: method === "GET" || method === "OPTIONS" ? undefined : await request.text(),
    cache: "no-store"
  });

  const payload = await response.text();
  return new NextResponse(payload, {
    status: response.status,
    headers: {
      "content-type": response.headers.get("content-type") ?? "application/json"
    }
  });
}

export async function GET(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function POST(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function PUT(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  return handleProxy(request, context);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "allow": ALLOWED_METHODS.join(", ")
    }
  });
}
