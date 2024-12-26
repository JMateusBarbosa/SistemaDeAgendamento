import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/components/services/serviceData";
import { Button } from "@/components/ui/button";

const SelectService = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (serviceId: number) => {
    navigate('/agendar/unidade', { 
      state: { serviceId },
      replace: true
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#047c3c] mb-4">Agendar Consulta</h1>
          <p className="text-gray-600">
            Selecione o tipo de atendimento desejado para prosseguir com o agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={handleServiceSelect}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="text-[#047c3c] border-[#047c3c] hover:bg-[#047c3c] hover:text-white"
          >
            Voltar
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelectService;