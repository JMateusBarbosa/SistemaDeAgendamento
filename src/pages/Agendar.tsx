import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Agendar = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedUnit, setSelectedUnit] = useState<string>("");
  const { toast } = useToast();

  const handleVerify = () => {
    if (!date || !selectedUnit) {
      toast({
        title: "Erro",
        description: "Por favor, selecione uma unidade e uma data.",
        variant: "destructive",
      });
      return;
    }
    // Here you would typically check availability with the backend
    // For now, we'll just move to step 2
    setStep(2);
    toast({
      title: "Horário disponível!",
      description: "Por favor, preencha seus dados para confirmar o agendamento.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento realizado!",
      description: "Você receberá um email com a confirmação.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Agendar Consulta</h1>
        
        {step === 1 ? (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <Label htmlFor="unidade">Unidade de Saúde</Label>
              <Select value={selectedUnit} onValueChange={setSelectedUnit}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ubs1">UBS Central</SelectItem>
                  <SelectItem value="ubs2">UBS Norte</SelectItem>
                  <SelectItem value="ubs3">UBS Sul</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Data da Consulta</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
              />
            </div>

            <Button
              onClick={handleVerify}
              className="w-full bg-[#047c3c] hover:bg-[#036830] text-white"
            >
              Verificar Disponibilidade
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <Label htmlFor="nome">Nome Completo</Label>
              <Input id="nome" required />
            </div>

            <div className="space-y-4">
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" required />
            </div>

            <div className="space-y-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-4">
              <Label htmlFor="motivo">Motivo da Consulta</Label>
              <Textarea id="motivo" required />
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="w-full"
              >
                Voltar
              </Button>
              <Button
                type="submit"
                className="w-full bg-[#047c3c] hover:bg-[#036830] text-white"
              >
                Confirmar Agendamento
              </Button>
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Agendar;