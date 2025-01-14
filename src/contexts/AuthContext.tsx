import { createContext, useContext, useEffect, ReactNode } from "react";
import { useUBSAuth } from "@/hooks/useUBSAuth";
import { AuthContextType } from "@/types/auth";

// Criação do contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor de autenticação que gerencia o estado global de autenticação
export function AuthProvider({ children }: { children: ReactNode }) {
  const { ubs, login, logout, isLoading, checkUser } = useUBSAuth();

  // Verifica o estado de autenticação ao montar o componente
  useEffect(() => {
    checkUser();
  }, []);

  // Provê o contexto de autenticação para a aplicação
  return (
    <AuthContext.Provider value={{ ubs, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para acessar o contexto de autenticação
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}