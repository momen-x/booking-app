"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

interface DeleteDialogProps {
  title: string;
  text: string;
  isLoading: boolean;
  onDelete: () => void;
  triggerText?: string;
  triggerVariant?: "default" | "destructive" | "outline" | "ghost";
}

export function DeleteDialog({
  title,
  text,
  isLoading,
  onDelete,
  triggerText = "Delete",
  triggerVariant = "destructive",
}: DeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={triggerVariant} className="gap-2">
          <Trash2 className="h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{text}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose >
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={onDelete} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
