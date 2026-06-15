import { Service } from "../entity/service";
import { ServiceCard } from "./services-card";

const ServiceList = ({services}:{services:Service[]}) => {
 
  return (
    <div className="grid ml-3 mr-2 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          {...service}
          className="hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out"
        />
      ))}
    </div>
  );
};

export default ServiceList;
