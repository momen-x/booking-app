import { Provider } from "../entity/provider";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { MapPin, Calendar, CheckCircle, XCircle } from "lucide-react";
import NotFound from "@/app/not-found";
import ProviderServicesList from "./provider-services-list";

const SingleProviderCard = async ({ id }: { id: string }) => {
  if (!id) {
    return <div>Provider not found</div>;
  }

  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/providers/${id}`);
  if (!response.ok) {
    return <NotFound />;
  }

  const provider = (await response.json()) as Provider;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Provider Card */}
      <Card className="mb-8 overflow-hidden border-0 shadow-lg">
        <CardHeader className="bg-linear-to-r from-primary/5 to-primary/10 pb-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Badge
                variant={provider.isActive ? "default" : "secondary"}
                className="gap-1"
              >
                {provider.isActive ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                {provider.isActive ? "Active" : "Inactive"}
              </Badge>
              <CardTitle className="text-4xl font-bold">
                {provider.businessName}
              </CardTitle>
              {provider.location && (
                <CardDescription className="flex items-center gap-1 text-base">
                  <MapPin className="h-4 w-4" />
                  {provider.location}
                </CardDescription>
              )}
            </div>
          </div>
        </CardHeader>

        {provider.description && (
          <CardContent className="pt-6">
            <p className="text-muted-foreground">{provider.description}</p>
          </CardContent>
        )}

        <CardFooter className="flex items-center justify-between border-t bg-muted/30 py-4 text-sm text-muted-foreground">
          <span>Since {new Date(provider.createdAt).getFullYear()}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              Joined {new Date(provider.createdAt).toLocaleDateString()}
            </span>
          </div>
        </CardFooter>
      </Card>

      {/* Services Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="text-sm text-muted-foreground">
            Check out the services we offer
          </p>
        </div>
        <ProviderServicesList />
      </div>
    </div>
  );
};

export default SingleProviderCard;
