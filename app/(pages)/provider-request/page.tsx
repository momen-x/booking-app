import AuthGuard from "@/app/_modules/guards/AuthGuard";
import ProviderForm from "@/app/_modules/provider-requests/views/provider-form";
import React from "react";

const ProviderApplicationPage = () => {
  return (
    <AuthGuard>
      <ProviderForm />
    </AuthGuard>
  );
};

export default ProviderApplicationPage;
