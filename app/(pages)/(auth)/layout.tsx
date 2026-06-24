import GuestGuard from "@/app/_modules/guards/GuestGuard";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GuestGuard redirectTo="/">{children}</GuestGuard>
    </>
  );
};

export default AuthLayout;
