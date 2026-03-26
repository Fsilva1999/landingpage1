import { motion } from "framer-motion";
import { Shield, Zap, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Seus dados e os de seus clientes protegidos com criptografia de ponta, em conformidade com a LGPD.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Automatize cobranças, notificações e lembretes. Economize tempo e reduza a inadimplência.",
  },
  {
    icon: Users,
    title: "Controle de Clientes",
    description: "Cadastre, organize e acompanhe todos os seus clientes em um único painel centralizado.",
  },
  {
    icon: Award,
    title: "Plataforma Profissional",
    description: "Transmita credibilidade com uma plataforma robusta, moderna e confiável para seu negócio.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-card" id="beneficios">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Por que escolher nossa plataforma?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para gerenciar cobranças de forma eficiente e profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border card-elevated text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
