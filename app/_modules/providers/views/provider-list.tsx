import { ProviderCard } from "./provider-card";
import { Provider } from "../entity/provider";

const ProviderList = ({ providers }: { providers: Provider[] }) => {

  if (!providers || providers.length === 0) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">No providers found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Optional Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Our Providers</h2>
        <p className="text-muted-foreground">
          {providers.length} {providers.length === 1 ? "provider" : "providers"}{" "}
          available
        </p>
      </div>

      {/* Grid - ONE grid for ALL cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} {...provider} />
        ))}
      </div>
    </div>
  );
};

export default ProviderList;
