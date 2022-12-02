import configureRouter from '../../helpers/configureRouter.mjs'
import VersionController from './Version.Controller.mjs'

const { get } = VersionController

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

class VersionRouter {
  constructor (Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig)
    return resourceRouter
  }
}

export default VersionRouter
