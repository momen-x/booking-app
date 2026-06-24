"use client";
import Lottie from "lottie-react";
import notFound from "@/public/assets/lottiefiles/not-found.json";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFound404Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-sm w-full">
        {/* Animation */}
        <div className="w-64 h-64 mx-auto">
          <Lottie animationData={notFound} loop={true} />
        </div>

        {/* Text */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Page Not Found</h1>
          <p className="text-sm text-muted-foreground">
            We could&apos;t find this page.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3 justify-center">
          <Button variant="outline" onClick={() => router.back()} size="sm">
            Go Back
          </Button>
          <Button onClick={() => router.push("/")} size="sm">
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound404Page;
