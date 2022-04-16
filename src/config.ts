import dotenv from 'dotenv'
import Joi from 'joi'


const schema: Joi.ObjectSchema = Joi.object({
  // TODO: Store config here
})

export class ConfigService {
    private config

    constructor() {
      const { parsed: parsedConfig, error: parseError } = dotenv.config()
      if (parseError) {
        console.log(`No .env file found, config.get will use process.env`)
        return
      }
      const { error: validationError, value: config } = schema.validate(parsedConfig)
      if (validationError) {
        throw Error(`Failed to validate config: ${validationError}`)
      }
      this.config = config
    }

    get(key: string): string {
      try {
        return process.env[key] || this.config[key]
      } catch {
        return ''
      }
    }
}

export const config = new ConfigService()
