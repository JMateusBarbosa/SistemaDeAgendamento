import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppointmentStatusBadge } from "./AppointmentStatusBadge";
import { AppointmentActions } from "./AppointmentActions";

export interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  unit: string;
  status: string;
}

interface AppointmentsTableProps {
  appointments: Appointment[];
  onStatusUpdate: (id: number, status: string) => void;
}

export const AppointmentsTable = ({ appointments, onStatusUpdate }: AppointmentsTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader className="bg-[#fcb408]/20">
          <TableRow>
            <TableHead>Paciente</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Horário</TableHead>
            <TableHead>Unidade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patient}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.unit}</TableCell>
              <TableCell>
                <AppointmentStatusBadge status={appointment.status} />
              </TableCell>
              <TableCell>
                <AppointmentActions
                  appointmentId={appointment.id}
                  onStatusUpdate={onStatusUpdate}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};