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
import { cookies } from "next/headers";
import ServiceList from "../../services/views/services-list";
import { Service } from "../../services/entity/service";
import NotFound from "@/app/not-found";

const SingleProviderCard = async ({ id }: { id: string }) => {
  if (!id) {
    return <div>Provider not found</div>;
  }

  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/providers/${id}`);
  if (!response.ok) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  const provider = (await response.json()) as Provider;
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;

  const providerRes = await fetch(
    `${DYNAMIC_PAGE_API_URL}/api/services/provider/current-provider`,
    {
      headers: {
        Cookie: allCookies,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
  );
  const providerServices = (await providerRes.json()) as Service[];
  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="w-full max-w-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <CardHeader className="text-center">
            {/* Status Badge */}
            <div className="mb-2 flex justify-center">
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
            </div>

            {/* Business Name */}
            <CardTitle className="text-3xl">{provider.businessName}</CardTitle>

            {/* Location */}
            {provider.location && (
              <CardDescription className="flex items-center justify-center gap-1 pt-2">
                <MapPin className="h-4 w-4" />
                {provider.location}
              </CardDescription>
            )}
          </CardHeader>

          {/* Description */}
          {provider.description && (
            <CardContent className="text-center">
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
                  {provider.description}
                </p>
              </div>
            </CardContent>
          )}

          {/* Footer with Meta Info */}
          <CardFooter className="flex flex-col gap-3 pt-2">
            <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
              <span>Since {new Date(provider.createdAt).getFullYear()}</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>
                  Joined {new Date(provider.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <>
        <ServiceList services={providerServices} />
      </>
    </>
  );
};

export default SingleProviderCard;
