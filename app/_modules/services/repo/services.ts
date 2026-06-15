import { TService } from "../dto/add-service";
import { TUpdateService } from "../dto/update-service";
import { Service } from "../entity/service";

interface IServiceAPI {
  addService: (data: TService) => Promise<Service>;
  updateService: (id: string, data: TUpdateService) => Promise<Service>;
  deleteService: (id: string) => Promise<{ success: boolean }>;
  getAllServices: () => Promise<Service[]>;
  getServiceById: (id: string) => Promise<Service>;
  getServicesByProvider: () => Promise<Service[]>;
}

export default IServiceAPI;
