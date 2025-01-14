// Interface que define a estrutura de dados da UBS
export interface UBS {
  id: number;
  nome: string;
  login: string;
  senha?: string;
}

// Interface que define os métodos e estados disponíveis no contexto de autenticação
export interface AuthContextType {
  ubs: UBS | null;
  login: (login: string, senha: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}