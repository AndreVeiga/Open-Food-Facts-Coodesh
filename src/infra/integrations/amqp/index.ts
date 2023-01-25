import { Notification, NotificationMessage } from "@/core/ports/notification";
import { AMQP } from '@/infra/integrations/amqp/connection';

export class NotificationRabbit implements Notification {
  public async send(message: NotificationMessage): Promise<void> {
    const queue = 'import_erros'
    await new AMQP().sendMessage(queue,message)
  }
}