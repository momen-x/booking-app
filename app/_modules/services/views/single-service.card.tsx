"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { defaultImage } from "@/utils/constance";
import { Service } from "../entity/service";
import transformingTheDateToATextString from "@/utils/transformingTheDateToATextString";
import Link from "next/link";

const BookingServiceCard = ({ service }: { service: Service }) => {
  const { id, images, createdAt, duration, name, price } = service;
  const [mainImage, setMainImage] = useState(
    images?.length > 0 ? images[0] : defaultImage,
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Images */}
          <div className="relative bg-gray-100 dark:bg-gray-800">
            <div className="relative h-64 md:h-full min-h-87.5">
              <Image src={mainImage} alt={name} fill className="object-cover" />

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge className="bg-black/60 text-white border-0">
                  Popular
                </Badge>
                <Badge className="bg-emerald-500/90 text-white border-0">
                  Verified
                </Badge>
              </div>
            </div>

            {/* Thumbnails */}
            {images && images.length > 1 && (
              <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <Button
                    key={i}
                    onClick={() => setMainImage(img)}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden shrink-0 transition ${
                      mainImage === img
                        ? "ring-2 ring-white"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4 flex-col">
              <div className="flex justify-between items-start gap-3 mb-4">
                <div>
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    by Professional Salon
                  </p>
                </div>
                <div className="text-right bg-primary/10 rounded-xl px-3 py-1.5">
                  <div className="flex items-baseline gap-0.5">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-primary">
                      {price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>
              </div>

              {/* Service Info */}
              <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {duration} mins
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Since {transformingTheDateToATextString(createdAt)}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Gaza Strip
                </span>
              </div>

              {/* Description placeholder */}
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                Experience the best service with our professional team. Book now
                and get 20% discount on your first visit!
              </p>

              <hr className="my-4" />
            </div>

            {/* Booking */}
            <div className="flex items-center justify-between gap-3 mt-20">
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-xl font-bold">${price}</p>
              </div>
              <Link href={`/services/${id}/book`}>
                <Button className="flex-1 h-11 cursor-pointer">
                  Book Now →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingServiceCard;
