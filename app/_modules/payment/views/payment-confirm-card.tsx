"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { XCircle, Loader2 } from "lucide-react";
import { useInitiatePayment } from "../hooks/useInitiatePayment";
import { useGetPaymentByBooking } from "../hooks/useGetPaymentByBooking";
import PaymentForm from "./payment-form";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const PaymentConfirmCard = ({ bookingId }: { bookingId: string }) => {
  const { mutate: initiate, data, isPending, error } = useInitiatePayment();
  const [waitingForWebhook, setWaitingForWebhook] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const { data: payment } = useGetPaymentByBooking(
    bookingId,
    waitingForWebhook,
  );

  useEffect(() => {
    initiate(bookingId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingId]);
  useEffect(() => {
    if (!waitingForWebhook) return;
    const timer = setTimeout(() => setTimedOut(true), 30_000);
    return () => clearTimeout(timer);
  }, [waitingForWebhook]);

  if (isPending) {
    return (
      <Card>
        <CardContent className="py-12 flex flex-col items-center gap-2 text-muted-foreground">
          <Loader2 className="h-6 w-6 animate-spin" />
          <p className="text-sm">Setting up payment...</p>
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className="border-destructive/50">
        <CardContent className="py-12 flex flex-col items-center gap-2 text-center">
          <XCircle className="h-8 w-8 text-destructive" />
          <p className="text-sm text-muted-foreground">
            {error?.message ?? "Couldn't start payment. Please try again."}
          </p>
        </CardContent>
      </Card>
    );
  }

  // if (payment?.status === "SUCCESS") {
  //   return (
  //     <Card className="border-emerald-500/50">
  //       <CardContent className="py-12 flex flex-col items-center gap-2 text-center">
  //         <CheckCircle2 className="h-8 w-8 text-emerald-500" />
  //         <p className="font-medium">Booking confirmed!</p>
  //         <p className="text-sm text-muted-foreground">
  //           Your payment went through successfully.
  //         </p>
  //       </CardContent>
  //     </Card>
  //   );
  // }
  if (timedOut && payment?.status !== "SUCCESS") {
    return (
      <Card className="border-yellow-500/50">
        <CardContent className="py-12 flex flex-col items-center gap-2 text-center">
          <p className="font-medium">Payment is being processed</p>
          <p className="text-sm text-muted-foreground">
            This is taking longer than expected. Check your email for
            confirmation.
          </p>
        </CardContent>
      </Card>
    );
  }
  if (waitingForWebhook) {
    return (
      <Card>
        <CardContent className="py-12 flex flex-col items-center gap-2 text-muted-foreground">
          <Loader2 className="h-6 w-6 animate-spin" />
          <p className="text-sm">Confirming your payment...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">Complete your payment</h2>
      </CardHeader>
      <CardContent>
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: data.clientSecret }}
        >
          <PaymentForm onProcessing={() => setWaitingForWebhook(true)} />
        </Elements>
      </CardContent>
    </Card>
  );
};

export default PaymentConfirmCard;
