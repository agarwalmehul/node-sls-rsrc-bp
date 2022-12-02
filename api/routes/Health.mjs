import Express from 'express'
import { HealthRouter } from '../resources/Health/index.mjs'

const config = {
  routesConfig: {
    get: { enabled: true }
  }
}

const Router = new Express.Router()
const healthRouter = new HealthRouter(Router, config)

export default healthRouter
