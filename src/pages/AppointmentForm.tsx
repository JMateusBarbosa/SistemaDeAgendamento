import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const AppointmentForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    susCard: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento realizado com sucesso!",
      description: "Você receberá um e-mail com a confirmação.",
      variant: "default",
    });
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#047c3c] mb-4">
            Preencha o Formulário de Agendamento
          </h1>
          <p className="text-gray-600">
            Insira suas informações para concluir o agendamento.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Nome Completo
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="susCard" className="block text-sm font-medium text-gray-700">
                  Número do Cartão SUS
                </label>
                <Input
                  id="susCard"
                  name="susCard"
                  value={formData.susCard}
                  onChange={handleInputChange}
                  required
                  pattern="\d{15}"
                  title="Digite um número de cartão SUS válido (15 dígitos)"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/agendar')}
                  className="text-[#047c3c] border-[#047c3c] hover:bg-[#047c3c] hover:text-white"
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  className="bg-[#047c3c] hover:bg-[#047c3c]/90 text-white"
                >
                  Confirmar Agendamento
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentForm;