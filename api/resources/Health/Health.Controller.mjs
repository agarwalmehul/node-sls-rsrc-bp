import { ResponseBody } from '../../helpers/expressUtils.mjs'
import HealthModel from './Health.Model.mjs'

const HealthController = {
  get
}

export default HealthController

async function get (request, response, next) {
  const data = await HealthModel.get()
  const responseBody = new ResponseBody(200, 'Health Check Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
