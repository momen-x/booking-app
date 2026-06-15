import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Info } from "lucide-react";
import Link from "next/link";

interface ProviderCardProps {
  businessName: string;
  location?: string | null;
  description?: string | null;
  id: string;
}

export function ProviderCard({
  businessName,
  location,
  description,
  id,
}: ProviderCardProps) {
  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="line-clamp-1">{businessName}</CardTitle>
        {location && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <CardDescription className="line-clamp-1">
              {location}
            </CardDescription>
          </div>
        )}
      </CardHeader>
      {description && (
        <CardContent className="pt-0">
          <div className="flex items-start gap-1 text-sm text-muted-foreground">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <p className="line-clamp-2 text-sm">{description}</p>
          </div>
        </CardContent>
      )}
      <CardFooter className="mt-auto pt-4">
        <Link href={`/providers/${id}`}>
          <Button variant="outline" size="sm" className="w-full cursor-pointer">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
