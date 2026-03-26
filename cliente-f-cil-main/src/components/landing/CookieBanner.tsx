import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-card border border-border rounded-2xl p-6 shadow-lg"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
            <a href="https://www.emprestfacil.app" className="text-primary underline">Política de Privacidade</a> e{" "}
            <a href="https://www.emprestfacil.app" className="text-primary underline">Política de Cookies</a>, em conformidade com a LGPD.
          </p>
          <div className="flex gap-3">
            <Button onClick={accept} size="sm" className="bg-hero-gradient text-primary-foreground rounded-lg">
              Aceitar
            </Button>
            <Button onClick={() => setVisible(false)} size="sm" variant="outline" className="rounded-lg">
              Recusar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
