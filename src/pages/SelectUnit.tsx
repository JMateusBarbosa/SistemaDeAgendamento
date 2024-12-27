import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const units = [
  {
    id: 1,
    name: "UBS Central",
    address: "Rua Principal, 123 - Centro",
    availableSlots: 15,
  },
  {
    id: 2,
    name: "UBS Norte",
    address: "Av. Norte, 456 - Bairro Norte",
    availableSlots: 8,
  },
  {
    id: 3,
    name: "UBS Sul",
    address: "Rua Sul, 789 - Bairro Sul",
    availableSlots: 12,
  },
];

const SelectUnit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const serviceId = location.state?.serviceId;

  useEffect(() => {
    // Ensure the page starts at the top when mounted
    window.scrollTo(0, 0);
  }, []);

  if (!serviceId) {
    navigate('/agendar');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#047c3c] mb-4">
            Selecione a Unidade de Saúde
          </h1>
          <p className="text-gray-600">
            Escolha a unidade mais próxima ou adequada para o atendimento selecionado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {units.map((unit) => (
            <Card key={unit.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-[#047c3c]" />
                      <h3 className="text-xl font-semibold">{unit.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{unit.address}</p>
                    <p className="text-sm text-[#07c355]">
                      {unit.availableSlots} vagas disponíveis
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      navigate('/agendar/formulario', { 
                        state: { serviceId, unitId: unit.id },
                        replace: true
                      });
                      window.scrollTo(0, 0);
                    }}
                    className="bg-[#047c3c] hover:bg-[#047c3c]/90 text-white"
                  >
                    Selecionar
                  </Button>
                </div>
              </CardContent>
            </Card>
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

export default SelectUnit;