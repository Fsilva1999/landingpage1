import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-emprestfacil-transparent.png";
import heroOrange from "@/assets/hero-orange-premium.png";
import dashboardPreview from "@/assets/dashboard-preview.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-glow-top">
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto">
          {/* Logo - Background removed via script */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <img 
              src={logo} 
              alt="EmprestFacil" 
              className="h-32 sm:h-40 mx-auto object-contain hover:scale-105 transition-transform duration-500" 
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight"
          >
            Gerencie clientes e cobranças com{" "}
            <span className="text-gradient">inteligência e segurança</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A plataforma completa para automatizar cobranças, organizar seus clientes 
            e ter controle total do seu fluxo financeiro. Simples, segura e profissional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://www.emprestfacil.app">
              <Button size="lg" className="bg-hero-gradient text-primary-foreground text-lg px-8 py-6 rounded-xl glow hover:opacity-90 transition-opacity">
                Teste grátis por 7 dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.emprestfacil.app">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-border">
                Ver funcionalidades
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Sem cartão de crédito • Cancele quando quiser
          </motion.p>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src={dashboardPreview}
                alt="Dashboard EmprestFacil - Visão desktop e mobile"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
