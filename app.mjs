import 'dotenv/config'
import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import startServer from './startServer.mjs'
import expressUtils from './api/helpers/expressUtils.mjs'
import Routes from './api/routes/index.mjs'
import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'

const { BODY_LIMIT, CORS_OPTIONS } = SERVER_CONFIG
const app = new Express()

app.use(cors(CORS_OPTIONS))
app.use(bodyParser.json({ limit: BODY_LIMIT }))
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())
expressUtils.middleware.init(app)

// Initialize Routes
Routes.init(app)

// Start Server
startServer(app)

// For testing
export default app
