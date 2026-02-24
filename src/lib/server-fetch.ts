const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/api/v1"

type ServerFetchOptions = RequestInit & {
  isMultipart?: boolean
}

const serverFetchHelper = async (
  endpoint: string,
  options: ServerFetchOptions = {}
): Promise<Response> => {

  const { headers, isMultipart, body, ...rest } = options

  const finalHeaders: HeadersInit = {
    ...(isMultipart ? {} : { "Content-Type": "application/json" }),
    ...(headers || {}),
  }

  const finalBody =
    body && !isMultipart && typeof body !== "string"
      ? JSON.stringify(body)
      : body

  return fetch(`${baseUrl}${endpoint}`, {
    credentials: "include",
    headers: finalHeaders,
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