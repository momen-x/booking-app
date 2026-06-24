import AddProviderForm from "@/app/_modules/providers/views/add-provider-form";

const AddProviderPage = () => {
  return (
    <div className="w-2.5 p-5 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AddProviderForm businessName="" userId="" location=""/>
    </div>
  );
};

export default AddProviderPage;
