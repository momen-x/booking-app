import { TNotifications } from "../dto/add-notifications";
import { TUpdateNotifications } from "../dto/update-notifications";
import { Notifications } from "../entity/notifications";

export interface INotificationsAPI {
  add: (userId: string, dto: TNotifications) => Promise<Notifications>;
  update: (dto: TUpdateNotifications, id: string) => Promise<Notifications>;
  get: () => Promise<Notifications[]>;
  delete: (id: string) => Promise<Notifications>;
}
