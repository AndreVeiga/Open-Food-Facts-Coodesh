export type NotificationMessage = {
  body: object,
  kind: string,
  details ?: any
} 

export interface Notification {
  send(message: NotificationMessage): Promise<void>;
}