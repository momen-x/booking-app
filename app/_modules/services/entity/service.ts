import { Provider } from "../../providers/entity/provider";

export interface Service {
  id: string;
  providerId: string;
  name: string;
  duration: number;
  price: number;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  provider: Provider;
}
// provider: {
//   id: string;
//   userId: string;
//   businessName: string;
//   description: string;
//   location: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// };
