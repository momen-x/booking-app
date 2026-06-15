export interface Provider {
  id: string;
  userId: string;
  businessName: string;
  isActive: boolean;
  location?: string | null;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
