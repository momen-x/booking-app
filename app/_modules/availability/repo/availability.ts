import { TCreateAvailability } from "../dto/create-available";
import { Availability } from "../entity/availability";
export interface IAavailabilityAPI {
  AddAvailable: (dto: TCreateAvailability) => Promise<Availability>;
  delete: (id: string) => Promise<Availability>;
  update: (id: string, dto: TCreateAvailability) => Promise<Availability>;
  getAll: () => Promise<Availability[]>;
}
