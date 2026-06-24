"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div className="mt-4 ml-6">
      <Button className={"hover:bg-muted bg-accent hover:text-black text-black dark:text-white dark:bg-muted p-3 rounded-full"}  onClick={() => router.back()}> 🔙 Back</Button>
    </div>
  );
};

export default BackBtn;
