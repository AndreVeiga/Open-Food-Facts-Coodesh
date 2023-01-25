import { HttpResponse } from '@/infra/http/ports/http.types'
import { HttpStatus } from '@/infra/http/types/httpStatus'

export const errorDefault = function(res: HttpResponse): HttpResponse {
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
    message: 'Internal Server Error',
    code: 'INTERNAL_SERVER_ERROR'
  })
}