import { motion } from "framer-motion";
import { UserPlus, Receipt, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Cadastro de Clientes",
    description: "Registre e organize todos os dados dos seus clientes de forma rápida e segura.",
  },
  {
    icon: Receipt,
    title: "Gestão de Cobranças",
    description: "Crie, acompanhe e gerencie todas as cobranças em um painel intuitivo e completo.",
  },
  {
    icon: Bell,
    title: "Notificações Automáticas",
    description: "Envie lembretes e avisos automáticos por e-mail ou SMS para seus clientes.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Financeiros",
    description: "Visualize relatórios detalhados de receitas, inadimplência e desempenho do seu negócio.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background" id="funcionalidades">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Funcionalidades <span className="text-gradient">poderosas</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas pensadas para simplificar sua rotina financeira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-border bg-card card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
