import Express from 'express'
import { HandshakeRouter } from '../resources/Handshake/index.mjs'

const config = {
  routesConfig: {
    handshake: { enabled: true }
  }
}

const Router = new Express.Router()
const handshakeRouter = new HandshakeRouter(Router, config)

export default handshakeRouter
