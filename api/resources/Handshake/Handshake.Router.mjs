import { handshake } from '@m92/api-crypto'
import configureRouter from '../../helpers/configureRouter.mjs'

const { expressUtils } = global

const { reqHandler, resHandler, authenticator } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler
const { validateApiKey } = authenticator

const masterConfig = {
  preMiddlewares: [
    extractHeaders,
    validateApiKey
  ],

  postMiddlewares: [
    setHeaders
  ],

  routesConfig: {
    handshake: {
      method: 'get',
      path: '/',
      pipeline: [routeSanity, asyncWrapper(handshake)]
    }
  }
}

class HandshakeRouter {
  constructor (Router, customConfig) {
    const resourceRouter = configureRouter(Router, masterConfig, customConfig)
    return resourceRouter
  }
}

export default HandshakeRouter
