import { IParams } from "@/app/(pages)/_types/dynamic-page-params";
import ServiceForm from "@/app/_modules/services/views/add-update-service";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

export const dynamic = "force-dynamic";

const UpdateServicePage = async ({ params }: IParams) => {
  const { id } = await params;
  if (!id) {
    return <div>Service not found</div>;
  }
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/services/${id}`);
  const service = await response.json();
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">update the service</h1>
      <p className="text-lg mb-8">
        Please fill out the form below to update the service.
      </p>
      <div className="flex flex-col items-center justify-center">
        <ServiceForm
          goal="update"
          description="update a new service offering for your customers"
          id={id}
          service={service}
        />
      </div>
    </div>
  );
};

export default UpdateServicePage;
