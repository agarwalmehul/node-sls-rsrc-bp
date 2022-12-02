import EXPS_CONFIG from '../../config/EXPS_CONFIG.mjs'
import {
  ResponseBody,
  nanoid,
  uuid,
  openpgp,
  axios,
  expressHttpContext,
  moment,
  ExpressUtils,
  crypto,
  expressValidator
} from '@m92/express-utils'

const expressUtils = new ExpressUtils(EXPS_CONFIG)
global.expressUtils = expressUtils
const { CustomError, HttpClient, logger } = expressUtils

export default expressUtils
export {
  ResponseBody,
  nanoid,
  uuid,
  openpgp,
  axios,
  expressHttpContext,
  moment,
  expressUtils,
  crypto,
  expressValidator,
  CustomError,
  HttpClient,
  logger
}
