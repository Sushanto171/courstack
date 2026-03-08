"use client"
import { cn } from "@/lib/utils";
import { Edit, Eye, Loader2, MoreHorizontal, Trash } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export interface Column<T> {
  header: string,
  getValue: (row: T) => ReactNode,
  className?: HTMLAttributes<HTMLElement>["className"]
}


export interface ManagementTableProps<T> {
  data: T[],
  columns: Column<T>[],
  getRowKey: (row: T) => string | number,
  isRefreshing?: boolean,
  emptyMessage?: string,
  onEdit?: (row: T) => void,
  onView?: (row: T) => void,
  onDelete?: (row: T) => void
}


export default function ManagementTable<T>({ data, columns, emptyMessage, getRowKey, isRefreshing, onDelete, onEdit, onView }: ManagementTableProps<T>) {

  const hasActions = !!onDelete || !!onEdit || !!onView

  return (
    <>
      <div className="rounded-lg border my-6">


        {/* Refreshing Overlay */}
        {isRefreshing && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex items-center justify-center z-10 rounded-lg">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Refreshing...</p>
            </div>
          </div>
        )}

        <div className="overflow-x-auto max-h-[calc(100vh-210px)]">
          <Table >
            <TableHeader className="sticky top-0 bg-background z-10">
              <TableRow >
                {
                  columns?.map((column, cInx) => (
                    <TableHead key={cInx} className={column.className}>{column.header}</TableHead>
                  ))
                }
                {hasActions && (
                  <TableHead className={cn("w-[70px]")}>Actions</TableHead>
                )}
              </TableRow>
            </TableHeader>

            <TableBody>
              {
                data?.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + (hasActions ? 1 : 0)}
                      className="text-center py-8 text-muted-foreground"
                    >
                      {emptyMessage || "No Records Found."}
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map(item => (
                    <TableRow key={getRowKey(item)}>
                      {
                        columns.map((col, inx) => (
                          <TableCell key={inx} className={col.className}>
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
                )
              }
            </TableBody>

          </Table>
        </div>
      </div>
    </>
  );
}