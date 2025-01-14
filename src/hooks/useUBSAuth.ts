import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { authService } from "@/services/authService";
import { UBS } from "@/types/auth";

export function useUBSAuth() {
  const [ubs, setUBS] = useState<UBS | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Verifica o estado de autenticação
  const checkUser = async () => {
    try {
      const { data: session } = await authService.getSession();
      
      if (session.session) {
        const email = session.session.user.email!;
        const login = email.split('@')[0]; // Remove o @sistema.local
        
        const ubsData = await authService.getUBSByLogin(login);
        
        if (!ubsData) {
          console.error('UBS não encontrada');
          return;
        }
        
        setUBS(ubsData);
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para realizar o login da UBS
  const login = async (login: string, senha: string) => {
    try {
      setIsLoading(true);
      
      // Primeiro, verifica as credenciais da UBS
      const ubsData = await authService.verifyUBSCredentials(login, senha);

      if (!ubsData) {
        throw new Error('Invalid login credentials');
      }

      // Se as credenciais estiverem corretas, realiza o login
      const { error } = await authService.signIn(login, senha);

      if (error) throw error;

      // Atualiza o estado com os dados da UBS
      setUBS(ubsData);
      
      // Notifica o usuário do sucesso
      toast({
        title: "Login realizado com sucesso!",
        description: `Bem-vindo(a) ${ubsData.nome}`,
      });
      
      // Redireciona para a página administrativa
      navigate("/admin");
    } catch (error: any) {
      // Notifica o usuário em caso de erro
      let errorMessage = "Verifique suas credenciais e tente novamente";
      
      if (error.message === 'Invalid login credentials') {
        errorMessage = "Login ou senha incorretos. Tente novamente.";
      }
      
      toast({
        title: "Erro ao fazer login",
        description: errorMessage,
        variant: "destructive",
      });
      console.error('Error logging in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para realizar o logout
  const logout = async () => {
    try {
      await authService.signOut();
      setUBS(null);
      navigate("/login");
      toast({
        title: "Logout realizado com sucesso!",
      });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return {
    ubs,
    login,
    logout,
    isLoading,
    checkUser
  };
}