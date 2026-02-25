import { getCookie } from "./cookie";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api/v1"

type ServerFetchOptions = RequestInit & {
  isMultipart?: boolean
}

const serverFetchHelper = async (
  endpoint: string,
  options: ServerFetchOptions = {}
): Promise<Response> => {

  const { headers, isMultipart, body, ...rest } = options;

  const accessToken = await getCookie("accessToken");
  const refreshToken = await getCookie("refreshToken");

  const cookieHeader = [
    accessToken && `accessToken=${accessToken}`,
    refreshToken && `refreshToken=${refreshToken}`,
  ]
    .filter(Boolean)
    .join("; ");


  const finalHeaders: HeadersInit = {
    ...(isMultipart ? {} : { "Content-Type": "application/json", }),
  }

  const finalBody =
    body && !isMultipart && typeof body !== "string"
      ? JSON.stringify(body)
      : body

  return fetch(`${baseUrl}${endpoint}`, {
    credentials: "include",
    headers: {
      ...finalHeaders,
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
    },
    body: finalBody,
    ...rest,
  })
}

export const serverFetch = {

  get: (endpoint: string, options?: RequestInit) =>
    serverFetchHelper(endpoint, { ...options, method: "GET" }),

  post: (
    endpoint: string,
    options: ServerFetchOptions
  ) =>
    serverFetchHelper(endpoint, { ...options, method: "POST" }),

  put: (
    endpoint: string,
    options: ServerFetchOptions
  ) =>
    serverFetchHelper(endpoint, { ...options, method: "PUT" }),

  patch: (
    endpoint: string,
    options: ServerFetchOptions
  ) =>
    serverFetchHelper(endpoint, { ...options, method: "PATCH" }),

  delete: (
    endpoint: string,
    options?: RequestInit
  ) =>
    serverFetchHelper(endpoint, { ...options, method: "DELETE" }),
}