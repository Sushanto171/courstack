/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useCallback, useEffect, useRef, useState } from "react";

interface InfiniteScrollOptions<T> {
  initialData: T[],
  initialCursor: string | null,
  initialHasMore: boolean,
  fetchFn: (cursor: string, signal: AbortSignal) => Promise<{
    data: T[],
    nextCursor: string | null,
    hasMore: boolean
  }>
}

export const useInfiniteScroll = <T>({
  initialCursor, initialData, initialHasMore, fetchFn
}: InfiniteScrollOptions<T>) => {

  const [items, setItems] = useState<T[]>(initialData);
  const [cursor, setCursor] = useState<string | null>(initialCursor);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || !cursor || !hasMore) return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();

    setLoading(true)
    setError(null)

    try {
      const result = await fetchFn(cursor, abortRef.current?.signal);
      setItems((prev) => [...prev, ...result?.data]);
      setCursor(result?.nextCursor)
      setHasMore(result?.hasMore)
    } catch (err: any) {
      if (err.name === "AbortError") return;
      setError("Failed to load more. Try again.");
    } finally {
      setLoading(false);
    }

  }, [cursor, hasMore, loading, fetchFn]);


  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) loadMore()
    }, { threshold: 0.1 })

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [loadMore]);

  return { items, hasMore, loading, error, sentinelRef }
}