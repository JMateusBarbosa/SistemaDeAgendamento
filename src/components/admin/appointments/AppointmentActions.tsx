import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

interface AppointmentActionsProps {
  appointmentId: number;
  onStatusUpdate: (id: number, status: string) => void;
}

export const AppointmentActions = ({ appointmentId, onStatusUpdate }: AppointmentActionsProps) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        className="text-[#07c355] border-[#07c355] hover:bg-[#07c355] hover:text-white"
        onClick={() => onStatusUpdate(appointmentId, "Concluído")}
      >
        <CheckCircle className="h-4 w-4 mr-1" />
        Concluir
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="text-[#fc0505] border-[#fc0505] hover:bg-[#fc0505] hover:text-white"
        onClick={() => onStatusUpdate(appointmentId, "Cancelado")}
      >
        <XCircle className="h-4 w-4 mr-1" />
        Cancelar
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="text-[#c2dbc1] border-[#c2dbc1] hover:bg-[#c2dbc1] hover:text-white"
        onClick={() => onStatusUpdate(appointmentId, "Ausente")}
      >
        <MinusCircle className="h-4 w-4 mr-1" />
        Ausente
      </Button>
    </div>
  );
};