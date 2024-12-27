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
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.patient}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>
                <AppointmentStatusBadge status={appointment.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end">
                  <AppointmentActions
                    appointmentId={appointment.id}
                    onStatusUpdate={onStatusUpdate}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};