import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#047c3c] to-[#07c355] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agende sua Consulta Médica Online
            </h1>
            <p className="text-xl mb-8">
              Simples, rápido e sem filas. Cuide da sua saúde com praticidade.
            </p>
            <Link
              to="/agendar"
              className="inline-block bg-[#fcb408] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e6a307] transition-colors"
            >
              Agendar sua Consulta Agora
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#047c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Praticidade</h3>
                <p className="text-gray-600">
                  Agende suas consultas a qualquer momento, de qualquer lugar.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#047c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Redução de Filas</h3>
                <p className="text-gray-600">
                  Evite esperas desnecessárias com nosso sistema online.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#047c3c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Acompanhamento Fácil</h3>
                <p className="text-gray-600">
                  Gerencie seus agendamentos e receba lembretes automáticos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;