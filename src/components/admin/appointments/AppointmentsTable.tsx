import React from "react";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: string;
  serviceType: string;
  susCard: string;
  createdAt?: string;
  updatedAt?: string;
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
            <TableHead className="hidden md:table-cell">Modalidade</TableHead>
            <TableHead className="hidden md:table-cell">Cartão SUS</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
            <React.Fragment key={appointment.id}>
              {/* Desktop View */}
              <TableRow className="hidden md:table-row">
                <TableCell className="font-medium">{appointment.patient}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell className="font-semibold text-left">
                  <Tooltip>
                    <TooltipTrigger className="truncate max-w-[150px]">
                      {appointment.serviceType}
                    </TooltipTrigger>
                    <TooltipContent>{appointment.serviceType}</TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-center">
                  <Tooltip>
                    <TooltipTrigger className="truncate max-w-[120px]">
                      {appointment.susCard}
                    </TooltipTrigger>
                    <TooltipContent>{appointment.susCard}</TooltipContent>
                  </Tooltip>
                </TableCell>
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

              {/* Mobile View */}
              <TableRow className="md:hidden">
                <TableCell colSpan={7}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{appointment.patient}</span>
                      <AppointmentStatusBadge status={appointment.status} />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Data:</span> {appointment.date}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Hora:</span> {appointment.time}
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Modalidade:</span>{" "}
                        <span className="font-semibold">{appointment.serviceType}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-muted-foreground">Cartão SUS:</span> {appointment.susCard}
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <AppointmentActions
                        appointmentId={appointment.id}
                        onStatusUpdate={onStatusUpdate}
                      />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
