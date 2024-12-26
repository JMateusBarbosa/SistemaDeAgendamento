import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/components/services/serviceData";

const UBSManagementTab = () => {
  const { toast } = useToast();
  const [selectedUBS, setSelectedUBS] = useState("");
  const [servicesState, setServicesState] = useState(() => {
    const initialState: Record<string, { checked: boolean; slots: string }> = {};
    services.forEach(service => {
      initialState[service.name.toLowerCase().replace(/\s+/g, '_')] = {
        checked: false,
        slots: "0"
      };
    });
    return initialState;
  });

  const handleServiceChange = (serviceName: string, checked: boolean) => {
    setServicesState(prev => ({
      ...prev,
      [serviceName]: { ...prev[serviceName], checked },
    }));
  };

  const handleSlotsChange = (serviceName: string, slots: string) => {
    setServicesState(prev => ({
      ...prev,
      [serviceName]: { ...prev[serviceName], slots },
    }));
  };

  const handleSave = () => {
    console.log("Saving UBS configuration:", { selectedUBS, servicesState });
    toast({
      title: "Configurações salvas com sucesso!",
      variant: "default",
    });
  };

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold text-[#047c3c] mb-6">
          Gerenciamento da Unidade Básica de Saúde
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Selecione a UBS
            </label>
            <Select value={selectedUBS} onValueChange={setSelectedUBS}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma unidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ubs-central">UBS Central</SelectItem>
                <SelectItem value="ubs-norte">UBS Norte</SelectItem>
                <SelectItem value="ubs-sul">UBS Sul</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Modalidades de Atendimento</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => {
                const serviceKey = service.name.toLowerCase().replace(/\s+/g, '_');
                return (
                  <div key={service.name} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 flex-1">
                      <Checkbox
                        id={serviceKey}
                        checked={servicesState[serviceKey]?.checked}
                        onCheckedChange={(checked) => 
                          handleServiceChange(serviceKey, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={serviceKey}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {service.name}
                      </label>
                    </div>
                    <Input
                      type="number"
                      min="0"
                      value={servicesState[serviceKey]?.slots}
                      onChange={(e) => handleSlotsChange(serviceKey, e.target.value)}
                      className="w-24"
                      placeholder="Vagas"
                      disabled={!servicesState[serviceKey]?.checked}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4">
            <Button
              onClick={handleSave}
              className="w-full bg-[#047c3c] hover:bg-[#036830] text-white"
            >
              Salvar Alterações
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UBSManagementTab;