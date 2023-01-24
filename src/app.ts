
import { ValidationError, validateOrReject } from 'class-validator'
import express from 'express'
import cors from 'cors'
import database from '@/infra/database/db'
import routes  from '@/config/routes'
import { env } from '@/config/env'

export class Application {

  private app: express.Application

  async start() {
    await validateOrReject(env)
    
    this.app = express()

    this.middlewares()

    await database.connectDatabase()

    this.app.listen(env.httpPort)
  }

  private middlewares() {
      this.app.use(express.json())
      this.app.use(cors())
      this.app.use(routes)
  }

  throwEnvValidatorErrors(err: Array<ValidationError>) {
    err.forEach((item: ValidationError) => {
      for (const key in item.constraints) {
        if (key) {
          const message = item.constraints[key]
          throw new Error(message)
        }
      }
    });
  }
}
