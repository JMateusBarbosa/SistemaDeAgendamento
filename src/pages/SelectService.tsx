import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/components/services/serviceData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SelectService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-[#047c3c] hover:text-[#047c3c]/90 hover:bg-[#047c3c]/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#047c3c] mb-4">
            Selecione o Tipo de Consulta
          </h1>
          <p className="text-gray-600">
            Escolha a modalidade de atendimento desejada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={() => navigate('/agendar/unidade', { state: { serviceId: service.id } })}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelectService;