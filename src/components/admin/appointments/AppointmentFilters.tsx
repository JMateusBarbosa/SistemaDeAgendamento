import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FilterValues {
  startDate: string;
  endDate: string;
  status: string;
}

interface AppointmentFiltersProps {
  onFilter: (filters: FilterValues) => void;
}

export const AppointmentFilters = ({ onFilter }: AppointmentFiltersProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleFilter = () => {
    onFilter({
      startDate,
      endDate,
      status: selectedStatus,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">De</label>
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Até</label>
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agendado">Agendado</SelectItem>
            <SelectItem value="concluido">Concluído</SelectItem>
            <SelectItem value="cancelado">Cancelado</SelectItem>
            <SelectItem value="ausente">Ausente</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end md:col-span-3">
        <Button 
          className="w-full bg-[#047c3c] hover:bg-[#036830]"
          onClick={handleFilter}
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
};