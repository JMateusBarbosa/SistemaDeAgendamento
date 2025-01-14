import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppointmentsTab from "../components/admin/AppointmentsTab";
import UBSManagementTab from "../components/admin/UBSManagementTab";

const Admin = () => {
  const { ubs, isLoading } = useAuth();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!ubs) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#047c3c]">
          Gerenciamento de Consultas - {ubs.nome}
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Tabs defaultValue="appointments" className="w-full">
            <TabsList className="w-full mb-6">
              <TabsTrigger
                value="appointments"
                className="flex-1 data-[state=active]:bg-[#07c355] data-[state=active]:text-white"
              >
                Consultas Agendadas
              </TabsTrigger>
              <TabsTrigger
                value="ubs"
                className="flex-1 data-[state=active]:bg-[#07c355] data-[state=active]:text-white"
              >
                Gerenciamento da UBS
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="appointments">
              <AppointmentsTab />
            </TabsContent>
            
            <TabsContent value="ubs">
              <UBSManagementTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;