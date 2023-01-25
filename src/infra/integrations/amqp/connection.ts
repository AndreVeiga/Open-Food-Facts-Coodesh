import { env } from '@/config/env'
import amqplib, { Connection } from 'amqplib'

export class AMQP {
  private async createConnection(): Promise<Connection> {
    const amqp_host = env.amqp_host
    const amqp_user = env.amqp_user
    const amqp_password = env.amqp_password
    const amqp_port = env.amqp_port
    const amqp_v_host = env.amqp_v_host
    
    return amqplib.connect(
      `amqp://${amqp_user}:${amqp_password}@${amqp_host}:${amqp_port}${amqp_v_host}`
    )
  }

  public async sendMessage(queue: string, message: any) {
    const conn = await this.createConnection()
    const channel = await conn.createChannel();
    await channel.assertQueue(queue, { durable: true })
    await channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
  }
}
