/**
 * @doc
 * https://hi098123.tistory.com/200
 *
 */

export const HTTPStatusCodeInfoMap: {
  [statusCode: number]: {
    error: string | null
    message: string | null
  }
} = {
  200: {
    error: null,
    message: 'OK (요청이 성공적으로 수행되었음)',
  },
  404: {
    error: 'Not found',
    message: '요청한 페이지(리소스) 없음',
  },
}
