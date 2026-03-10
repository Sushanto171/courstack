"use client"
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowDownUp, ArrowUp, Edit, Eye, Loader2, LucideIcon, MoreHorizontal, Trash } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HTMLAttributes, ReactNode, Ref, useCallback } from "react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { LoadingSpinner } from "./LoadingSpinner";

export interface Column<T> {
  header: string,
  getValue: (row: T) => ReactNode,
  className?: HTMLAttributes<HTMLElement>["className"];
  sortKey?: string;
  title?: (row: T) => string
}


export interface ManagementTableProps<T> {
  data: T[],
  columns: Column<T>[],
  getRowKey: (row: T) => string | number,
  isRefreshing?: boolean,
  emptyMessage?: string,
  loading?: boolean,
  error?: string | null,
  sentinelRef?: Ref<HTMLDivElement | null>,
  retry?: {
    cursor: string,
    fn: (cursor: string, signal: AbortSignal) => void
  },
  hasMore?: boolean,
  onEdit?: (row: T) => void,
  onView?: (row: T) => void,
  onDelete?: (row: T) => void
}


export default function ManagementTable<T>({ data, columns, emptyMessage, getRowKey, isRefreshing, onDelete, onEdit, onView, sentinelRef, hasMore, loading, error, retry, }: ManagementTableProps<T>) {

  const hasActions = !!onDelete || !!onEdit || !!onView;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortKey = searchParams.get("sortBy");
  const sortOrder = searchParams.get("order") as "asc" | "desc" | null;

  const handleSort = useCallback((columnKey?: string) => {
    if (!columnKey) return;

    const nextOrder = sortKey !== columnKey
      ? "asc"
      : sortOrder === "asc" ? "desc" : "asc";

    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", columnKey);
    params.set("order", nextOrder);

    router.push(`${pathname}?${params.toString()}`);
  }, [sortKey, sortOrder, pathname, searchParams, router]);

  const getSortIcon = (columnKey?: string): LucideIcon => {
    if (!columnKey || sortKey !== columnKey) return ArrowDownUp;
    return sortOrder === "asc" ? ArrowUp : ArrowDown;
  };

  return (
    <>
      <div className="rounded-lg border my-6 ">
        {/* Refreshing Overlay */}
        {isRefreshing && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center z-10 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Refreshing...</p>
            </div>
          </div>
        )}

        <div className="overflow-x-auto max-h-[calc(100vh-208px)]">
          <Table >
            <TableHeader className="sticky top-0 bg-background z-10">
              <TableRow >
                {
                  columns.map((column, cInx) => {
                    const Icon = getSortIcon(column.sortKey)

                    return column.sortKey ? (
                      <TableHead
                        key={cInx}
                        onClick={() => handleSort(column.sortKey)}
                        className={cn(
                          column.className,
                          "cursor-pointer select-none"
                        )}
                      >
                        <div className="flex items-center gap-1">
                          {column.header}
                          <Icon className="h-3 w-3" />
                        </div>
                      </TableHead>
                    ) : (
                      <TableHead key={cInx} className={column.className}>
                        {column.header}
                      </TableHead>
                    )
                  })
                }
                {hasActions && (
                  <TableHead className={cn("w-17.5")}>Actions</TableHead>
                )}
              </TableRow>
            </TableHeader>

            <TableBody>
              {
                !hasMore && data.length === 0 && !loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + (hasActions ? 1 : 0)}
                      className="text-center py-8 text-muted-foreground"
                    >
                      {emptyMessage || "No Records Found."}
                    </TableCell>
                  </TableRow>
                ) : (
                  <>{
                    data.map(item => (
                      <TableRow key={getRowKey(item)}>
                        {
                          columns.map((col, inx) => (
                            <TableCell title={String(col.title ? col.title(item) : "")} key={inx} className={cn("max-w-40 truncate", col.className,)}>
                              {col.getValue(item)}
                            </TableCell>
                          ))
                        }
                        {hasActions && (
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                {onView && (
                                  <DropdownMenuItem onClick={() => onView(item)}>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View
                                  </DropdownMenuItem>
                                )}
                                {onEdit && (
                                  <DropdownMenuItem onClick={() => onEdit(item)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                )}
                                {onDelete && (
                                  <DropdownMenuItem
                                    onClick={() => onDelete(item)}
                                    className="text-destructive"
                                  >
                                    <Trash className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        )}
                      </TableRow>
                    ))

                  }
                  </>
                )
              }
            </TableBody>
          </Table>
          <div className="flex justify-center items-center w-full">
            {/* Error with retry */}
            {error && (
              <div className="text-center py-4">
                <p className="text-destructive text-sm">{error}</p>
                {
                  retry && <Button
                    onClick={() => retry.fn(retry.cursor!, new AbortController().signal)}
                    className="mt-2 text-sm underline"
                  >
                    Retry
                  </Button>
                }
              </div>
            )}
            {/* End of list */}
            {loading && (
              <div className="text-center text-muted-foreground py-8 text-sm">
                <LoadingSpinner />
              </div>
            )}
            {!hasMore && data.length > 0 && (
              <p className="text-center text-muted-foreground py-8 text-sm">
                You&lsquo;ve reached the end
              </p>
            )}
          </div>
          {
            <div ref={sentinelRef} className="h-4" />
          }
        </div>
      </div>
    </>
  )
}
