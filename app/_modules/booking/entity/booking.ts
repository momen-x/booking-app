import { Provider } from "../../providers/entity/provider";

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

interface Service {
  name: string;
  price: number;
  duration: number;
  images: string[];
}
