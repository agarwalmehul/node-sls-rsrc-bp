import configureRouter from '../../helpers/configureRouter.mjs'
import HealthController from './Health.Controller.mjs'

const { get } = HealthController

const { expressUtils } = global

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

const masterConfig = {
  preMiddlewares: [
    extractHeaders
  ],

  postMiddlewares: [
    setHeaders
  ],

  routesConfig: {
    get: {
      method: 'get',
      path: '/',
      pipeline: [routeSanity, asyncWrapper(get)]
    }
  }
}

class HealthRouter {
  constructor (Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig)
    return resourceRouter
  }
}

export default HealthRouter
