import React from "react"
import { useGetTasksQuery } from "../api/apiSlice"
export default function TaskList() {
  const { data, isError, isLoading } = useGetTasksQuery()
  return <div>TaskList</div>
}
