import { Provider } from "../../providers/entity/provider";
import { Service } from "../../services/entity/service";

export interface Booking {
  id: string;
  userId: string;
  provideId: string;
  serviceId: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  createdAt: Date;
  updatedAt: Date;
  service: Service;
  provider: Provider;
}
