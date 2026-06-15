/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { defaultImage } from "@/utils/constance";
import Link from "next/link";

interface ServiceCardProps {
  className?: string;
  name: string;
  id: string;
  images?: string[];
  duration: number;
  price: number;
  providerId: string;
}

export function ServiceCard({
  className,
  name,
  images,
  duration,
  price,
  id,
}: ServiceCardProps) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <img
        src={images?.[0] ?? defaultImage}
        alt={name}
        className="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription>
          {duration} mins • ${price.toFixed(2)}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between gap-2">
        <Link href={`/services/${id}`} className="w-full">
          <Button className="w-full">View Service</Button>
        </Link>
        <Link href={`/services/${id}/booking`} className="w-full">
          <Button className="w-full cursor-pointer">Book Now →</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
