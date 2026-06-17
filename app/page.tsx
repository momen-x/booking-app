import ProviderForm from "./_modules/provider-requests/views/provider-form";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ProviderForm/>
    </div>
  );
}
