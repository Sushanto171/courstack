import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"

export interface JwtPayload {
  id: string
  name: string
  email: string
  role: string
  iat: number
  exp: number
}



export async function setJwtCookie(name: string, token: string) {
  try {
    const payload = jwtDecode<JwtPayload>(token)
    const maxAge = payload.exp - Math.floor(Date.now() / 1000)
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


export function getDecodedToken(token: string): JwtPayload | null {
  try {
    return jwtDecode<JwtPayload>(token)
  } catch (error) {
    console.error("Invalid token", error)
    return null
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