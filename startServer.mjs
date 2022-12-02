import { initialize as apiCryptoInitialize } from '@m92/api-crypto'
import SERVER_CONFIG from './config/SERVER_CONFIG.mjs'

const { PORT } = SERVER_CONFIG

const startServer = async (app) => {
  try {
    // Initializing Api Crypto
    await apiCryptoInitialize()

    // Start Listen
    await app.listen(PORT)
    console.log(`[Info] Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default startServer
