"use client";
import { toast } from "react-toastify";
import { useCancelBooking } from "../hooks/useCancelBooking";
import { useRouter } from "next/navigation";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import { DeleteDialog } from "@/app/_components/delete-dialog";

const CancelBookingBtn = ({ bookingId }: { bookingId: string }) => {
  const { mutate: cancelBooking, isPending } = useCancelBooking(bookingId);
  const router = useRouter();

  const handleCancelBooking = () => {
    cancelBooking(undefined, {
      onSuccess: () => {
        toast.success("Booking canceled");
        router.push("/booking");
        router.refresh();
      },
      onError: (error) => {
        const errMessage = getErrorMessage(error);
        toast.error(errMessage || "Something went wrong");
      },
    });
  };

  return (
    <>
      <DeleteDialog
        title="Booking Cancel"
        text="Are you sure you want to cancel your Book!!"
        isLoading={isPending}
        onDelete={handleCancelBooking}
        triggerText="Cancel Booking"
      />
    </>
  );
};

export default CancelBookingBtn;
