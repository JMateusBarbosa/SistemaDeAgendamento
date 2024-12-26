import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Baby, 
  User, 
  Leaf, 
  Dumbbell,
  Users,
  Syringe,
  Pill,
  Home,
  Eye
} from "lucide-react";
import ToothIcon from "../icons/ToothIcon";

export const services = [
  {
    id: 1,
    name: "Médico Geral",
    icon: Stethoscope,
    description: "Consultas médicas gerais e acompanhamento de saúde",
  },
  {
    id: 2,
    name: "Dentista",
    icon: ToothIcon,
    description: "Atendimento odontológico e saúde bucal",
  },
  {
    id: 3,
    name: "Psicólogo",
    icon: Brain,
    description: "Acompanhamento psicológico e saúde mental",
  },
  {
    id: 4,
    name: "Enfermagem",
    icon: Heart,
    description: "Cuidados de enfermagem, aplicação de vacinas e curativos",
  },
  {
    id: 5,
    name: "Pediatria",
    icon: Baby,
    description: "Consultas pediátricas e acompanhamento infantil",
  },
  {
    id: 6,
    name: "Ginecologia e Obstetrícia",
    icon: User,
    description: "Saúde da mulher, pré-natal e cuidados ginecológicos",
  },
  {
    id: 7,
    name: "Nutrição",
    icon: Leaf,
    description: "Planejamento de dietas e acompanhamento nutricional",
  },
  {
    id: 8,
    name: "Fisioterapia",
    icon: Dumbbell,
    description: "Reabilitação física e tratamentos fisioterapêuticos",
  },
  {
    id: 9,
    name: "Assistência Social",
    icon: Users,
    description: "Orientação e apoio social",
  },
  {
    id: 10,
    name: "Vacinação",
    icon: Syringe,
    description: "Aplicação de vacinas e campanhas de imunização",
  },
  {
    id: 11,
    name: "Farmácia",
    icon: Pill,
    description: "Dispensação e orientação sobre medicamentos",
  },
  {
    id: 12,
    name: "Saúde da Família",
    icon: Home,
    description: "Atendimento domiciliar e acompanhamento contínuo",
  },
  {
    id: 13,
    name: "Oftalmologia",
    icon: Eye,
    description: "Consultas e exames de visão",
  },
];