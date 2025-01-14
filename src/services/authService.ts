import { supabase } from "@/integrations/supabase/client";
import { UBS } from "@/types/auth";

// Serviço responsável por operações de autenticação
export const authService = {
  // Busca os dados da UBS pelo login
  async getUBSByLogin(login: string): Promise<UBS | null> {
    const { data, error } = await supabase
      .from('ubs')
      .select('id, nome, login, senha')
      .eq('login', login)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  // Verifica as credenciais da UBS
  async verifyUBSCredentials(login: string, senha: string): Promise<UBS | null> {
    const ubs = await this.getUBSByLogin(login);
    
    if (!ubs) return null;
    if (ubs.senha !== senha) return null;
    
    return ubs;
  },

  // Realiza autenticação da UBS
  async signIn(login: string, senha: string) {
    // Primeiro verifica as credenciais da UBS
    const ubs = await this.verifyUBSCredentials(login, senha);
    
    if (!ubs) {
      throw new Error('Invalid login credentials');
    }

    // Se as credenciais estiverem corretas, cria uma sessão
    return await supabase.auth.signInWithPassword({
      email: `${login}@sistema.local`,
      password: senha,
    });
  },

  // Realiza logout
  async signOut() {
    return await supabase.auth.signOut();
  },

  // Obtém a sessão atual
  async getSession() {
    return await supabase.auth.getSession();
  }
};