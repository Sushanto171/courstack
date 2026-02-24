export async function handleApiResponse<T>(res: Response, errorMessage?: string): Promise<T> {
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || errorMessage || "Request failed.")
  }
  const { data } = await res.json()
  return data
}