import { useToast } from "@/hooks/use-toast";
import { AppointmentFilters, FilterValues } from "./appointments/AppointmentFilters";
import { AppointmentsTable, Appointment } from "./appointments/AppointmentsTable";
import { ReportButton } from "./appointments/ReportButton";

const AppointmentsTab = () => {
  const { toast } = useToast();

  const appointments: Appointment[] = [
    {
      id: 1,
      patient: "João Silva",
      date: "2024-02-20",
      time: "14:30",
      status: "Agendado",
      serviceType: "Médico Geral",
      susCard: "123456789012345",
      createdAt: "2024-02-19T10:00:00Z",
      updatedAt: "2024-02-19T10:00:00Z",
    },
    {
      id: 2,
      patient: "Maria Santos",
      date: "2024-02-21",
      time: "09:15",
      status: "Concluído",
      serviceType: "Dentista",
      susCard: "987654321098765",
      createdAt: "2024-02-19T11:30:00Z",
      updatedAt: "2024-02-19T11:30:00Z",
    },
  ];

  const handleStatusUpdate = (id: number, newStatus: string) => {
    console.log(`Updating appointment ${id} to status: ${newStatus}`);
    toast({
      title: `Consulta marcada como ${newStatus} com sucesso!`,
      variant: newStatus === "Cancelado" ? "destructive" : "default",
    });
  };

  const handleFilter = (filters: FilterValues) => {
    console.log("Filtering...", filters);
  };

  const handleGenerateReport = () => {
    console.log("Generating report...");
    toast({
      title: "Relatório gerado com sucesso!",
      description: "O download começará automaticamente.",
    });
  };

  return (
    <div className="space-y-6">
      <AppointmentFilters onFilter={handleFilter} />
      <AppointmentsTable
        appointments={appointments}
        onStatusUpdate={handleStatusUpdate}
      />
      <ReportButton onClick={handleGenerateReport} />
    </div>
  );
};

export default AppointmentsTab;