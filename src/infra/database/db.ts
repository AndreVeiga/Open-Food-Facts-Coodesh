import mongoose from 'mongoose'

class Database {
  public async connectDatabase(): Promise<void> {
    const username = "root"
    const password = "root"
    const host = "localhost"
    const port = 27017

    var conn = `mongodb://${username}:${password}@${host}:${port}`

    mongoose.set("strictQuery", false);
    mongoose.connect(conn)
  }
}

export default new Database()