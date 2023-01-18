export interface HTTPResponse<D, M> {
  timestamp: string
  data: D | null
  statusCode: number
  message: string | null
  error: string | null
  meta: M
}
