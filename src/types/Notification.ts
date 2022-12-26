import { STATUS } from "./Status";

export interface INotification {
  status: STATUS;
  title: string;
  message: string;
  hasSeen: boolean;
}


export type INotificationWithId = INotification & { id: string };