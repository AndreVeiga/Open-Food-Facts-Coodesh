import { env } from '@/config/env'
import mongoose from 'mongoose'

class Database {
  public async connectDatabase(): Promise<void> {
    const username = env.db_user
    const password = env.db_password
    const host = env.db_host
    const port = env.db_port

    var conn = `mongodb://${username}:${password}@${host}:${port}`

    mongoose.set("strictQuery", false);
    mongoose.connect(conn)
  }
}

export default new Database()