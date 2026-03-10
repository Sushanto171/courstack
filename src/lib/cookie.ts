
import { AuthUser } from "@/redux/features/auth/authSlice";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export interface JwtPayload {
  id: string
  name: string
  email: string
  role: string
  iat: number
  exp: number
};

type CookieHeader = {
  [key: string]: string | number;
  "Max-Age": number;
} | null;

export async function setJwtCookie(name: string, token: string, maxAge: number) {
  try {
    const cookie = await cookies()

    cookie.set(name, token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge,
    })
  } catch (err) {
    console.error("Invalid JWT for cookie", err)
  }
}

export async function verifyToken(token: string | undefined) {
  if (!token) return null;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload as AuthUser;
  } catch {
    return null;
  }
}


export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value || null;
};

export const deleteCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};


export const extractCookieToHeader = (res: Response, name: string): CookieHeader => {
  const rawCookie = res.headers.getSetCookie?.();
  if (!rawCookie) return null;

  const parsedTokens = rawCookie.map(cookie =>
    Object.fromEntries(
      cookie.split(";").map(part => {
        const [key, value] = part.trim().split("=");
        return [key, value ?? ""];
      })
    )
  );

  const target = parsedTokens.find(t => t[name]);
  if (!target) return null;

  return {
    [name]: target[name]!,
    "Max-Age": Number(target["Max-Age"] ?? 0),
  };
};

