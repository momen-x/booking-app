"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

interface PaymentFormProps {
  onProcessing: () => void;
}

const PaymentForm = ({ onProcessing }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsSubmitting(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}${window.location.pathname}`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast.error(error.message ?? "Payment failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // Card confirmed on Stripe's side — webhook will update our DB shortly.
    onProcessing();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || isSubmitting}
        className="w-full h-11"
      >
        {isSubmitting ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          "Pay now"
        )}
      </Button>
    </form>
  );
};

export default PaymentForm;
