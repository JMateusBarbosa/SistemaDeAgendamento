const Footer = () => {
  return (
    <footer className="bg-[#047c3c] text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>Prefeitura Municipal</p>
            <p>Telefone: (XX) XXXX-XXXX</p>
            <p>Email: contato@prefeitura.gov.br</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-[#fcb408] transition-colors">Portal da Transparência</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#fcb408] transition-colors">Ouvidoria</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-[#fcb408] transition-colors">Notícias</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#fcb408] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#fcb408] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#fcb408] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#07c355] text-center">
          <p>&copy; 2024 Prefeitura Municipal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;