import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-emprestfacil-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="EmprestFacil" className="h-10 object-contain" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Plataforma digital de gestão de clientes e cobranças. Segura, moderna e eficiente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#funcionalidades" className="hover:opacity-100 transition-opacity">Funcionalidades</a></li>
              <li><a href="#planos" className="hover:opacity-100 transition-opacity">Planos</a></li>
              <li><a href="#como-funciona" className="hover:opacity-100 transition-opacity">Como Funciona</a></li>
              <li><a href="#beneficios" className="hover:opacity-100 transition-opacity">Benefícios</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="https://www.emprestfacil.app" className="hover:opacity-100 transition-opacity">Política de Privacidade</a></li>
              <li><a href="https://www.emprestfacil.app" className="hover:opacity-100 transition-opacity">Termos de Uso</a></li>
              <li><a href="https://www.emprestfacil.app" className="hover:opacity-100 transition-opacity">Política de Cookies</a></li>
              <li><a href="https://www.emprestfacil.app" className="hover:opacity-100 transition-opacity">LGPD</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@emprestfacil.app" className="hover:opacity-100 transition-opacity">contato@emprestfacil.app</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="https://wa.me/556198379133" className="hover:opacity-100 transition-opacity">+55 61 9837-9133</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.emprestfacil.app" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.emprestfacil.app" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.emprestfacil.app" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
          <p>© {new Date().getFullYear()} EmprestFacil. Todos os direitos reservados.</p>
          <p>Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Cookies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
