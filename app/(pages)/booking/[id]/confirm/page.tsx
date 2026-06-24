import PaymentConfirmCard from "@/app/_modules/payment/views/payment-confirm-card";

const ConfirmBookingPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <div className="max-w-md mx-auto p-4 mt-12">
      <PaymentConfirmCard bookingId={id} />
    </div>
  );
};

export default ConfirmBookingPage;
