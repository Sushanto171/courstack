/* eslint-disable @typescript-eslint/no-explicit-any */

type CatchAsyncResult<T> =
  | { success: true; data: T, }
  | { success: false; message: string }

const catchAsync =
  <T, A extends any[]>(fn: (...args: A) => Promise<T> | T) =>
    async (...args: A): Promise<CatchAsyncResult<T>> => {
      try {
        const data = await fn(...args)

        return {
          success: true,
          data,
        }
      } catch (error: any) {

        // Next.js redirect preserve
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
          throw error
        }

        console.error("Error from catchAsync:", error)

        return {
          success: false,
          message: error?.message || "Unexpected server error",
        }
      }
    }

export default catchAsync