/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IServerResponse {
  success: boolean,
  message: string,
  meta?: any
}


export interface IMeta {

  limit: number,
  page: number,
  total: number,
  totalPages: number,

}

export type SearchParams = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }