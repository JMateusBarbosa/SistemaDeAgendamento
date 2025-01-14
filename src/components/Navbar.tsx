import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ubs, logout } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/placeholder.svg" alt="Logo da Prefeitura" className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#047c3c] transition-colors">
              Página Inicial
            </Link>
            <Link to="/agendar" className="text-gray-700 hover:text-[#047c3c] transition-colors">
              Agendar Consulta
            </Link>
            {ubs ? (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-[#047c3c] transition-colors">
                  Meus Agendamentos
                </Link>
                <Button
                  variant="ghost"
                  onClick={logout}
                  className="text-gray-700 hover:text-[#047c3c] transition-colors"
                >
                  Sair
                </Button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-[#047c3c] transition-colors">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-[#047c3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Página Inicial
            </Link>
            <Link 
              to="/agendar" 
              className="block text-gray-700 hover:text-[#047c3c] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Consulta
            </Link>
            {ubs ? (
              <>
                <Link 
                  to="/admin" 
                  className="block text-gray-700 hover:text-[#047c3c] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meus Agendamentos
                </Link>
                <Button
                  variant="ghost"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-[#047c3c] transition-colors w-full justify-start"
                >
                  Sair
                </Button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="block text-gray-700 hover:text-[#047c3c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;