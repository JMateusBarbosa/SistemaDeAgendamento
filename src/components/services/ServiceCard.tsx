import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  id: number;
  name: string;
  icon: LucideIcon | React.FC;
  description: string;
  onClick: (id: number) => void;
}

const ServiceCard = ({ id, name, icon: Icon, description, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(id)}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <Icon className="w-12 h-12 text-[#047c3c] mb-4" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;