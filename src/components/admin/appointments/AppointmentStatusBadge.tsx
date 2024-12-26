interface AppointmentStatusBadgeProps {
  status: string;
}

export const AppointmentStatusBadge = ({ status }: AppointmentStatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Concluído":
        return "bg-[#07c355]/20 text-[#07c355]";
      case "Cancelado":
        return "bg-[#fc0505]/20 text-[#fc0505]";
      case "Ausente":
        return "bg-[#c2dbc1]/20 text-[#c2dbc1]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()}`}
    >
      {status}
    </span>
  );
};