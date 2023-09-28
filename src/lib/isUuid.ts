import { ErrorMessage, Response, SuccessMesage } from '../utils/response'
import { UUID_REGEX } from '../utils/constants'

/**
 * ## isUuid
 * @param  uuid The uuid to test
 * @returns { Response } a valdie response
 */



export function isUuid(uuid: string): Response {
  if (!uuid.match(UUID_REGEX)) return ErrorMessage(`${uuid} isn't a valid uuid`)
  return SuccessMesage()
}
