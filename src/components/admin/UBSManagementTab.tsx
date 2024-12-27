import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/components/services/serviceData";
import { PlusCircle, MinusCircle, Save } from "lucide-react";

const UBSManagementTab = () => {
  const { toast } = useToast();
  const [servicesState, setServicesState] = useState(() => {
    const initialState: Record<string, { enabled: boolean; slots: number }> = {};
    services.forEach(service => {
      initialState[service.name.toLowerCase().replace(/\s+/g, '_')] = {
        enabled: false,
        slots: 0
      };
    });
    return initialState;
  });

  const handleSlotChange = (serviceName: string, increment: boolean) => {
    setServicesState(prev => ({
      ...prev,
      [serviceName]: {
        ...prev[serviceName],
        slots: increment 
          ? prev[serviceName].slots + 1 
          : Math.max(0, prev[serviceName].slots - 1),
      },
    }));
  };

  const toggleService = (serviceName: string) => {
    setServicesState(prev => ({
      ...prev,
      [serviceName]: {
        ...prev[serviceName],
        enabled: !prev[serviceName].enabled,
      },
    }));
  };

  const handleSaveService = (serviceName: string) => {
    console.log("Salvando configuração do serviço:", {
      service: serviceName,
      config: servicesState[serviceName]
    });
    toast({
      title: `Configurações de ${serviceName.replace(/_/g, ' ')} salvas com sucesso!`,
      variant: "default",
    });
  };

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold text-[#047c3c] mb-6">
          Gerenciamento de Vagas
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const serviceKey = service.name.toLowerCase().replace(/\s+/g, '_');
              const { enabled, slots } = servicesState[serviceKey];
              
              return (
                <div 
                  key={service.name} 
                  className={`p-4 rounded-lg border ${
                    enabled ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <service.icon className="w-5 h-5 text-[#047c3c]" />
                      <h3 className="font-medium">{service.name}</h3>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleService(serviceKey)}
                      className={enabled ? 'bg-green-100' : ''}
                    >
                      {enabled ? 'Ativo' : 'Inativo'}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Vagas disponíveis: {slots}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSlotChange(serviceKey, false)}
                        disabled={!enabled || slots === 0}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSlotChange(serviceKey, true)}
                        disabled={!enabled}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button
                      onClick={() => handleSaveService(serviceKey)}
                      className="w-full bg-[#047c3c] hover:bg-[#036830] text-white"
                      size="sm"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UBSManagementTab;