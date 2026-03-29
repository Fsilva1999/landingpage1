import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "R$25",
    period: "/mês",
    description: "Ideal para começar",
    popular: false,
    features: [
      "Até 20 clientes",
      "Gestão de cobranças",
      "Relatórios básicos",
      "Suporte por e-mail",
    ],
  },
  {
    name: "Pro",
    price: "R$29,99",
    period: "/mês",
    description: "Mais popular",
    popular: true,
    features: [
      "Clientes ilimitados",
      "Suporte prioritário",
      "Notificação de clientes",
      "Relatórios avançados",
      "Automação completa",
    ],
  },
  {
    name: "Anual",
    price: "R$250",
    period: "/ano",
    description: "Melhor custo-benefício",
    popular: false,
    features: [
      "Acesso completo à plataforma",
      "Clientes ilimitados",
      "Suporte prioritário",
      "Todas as funcionalidades",
      "Economia de 30%",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="planos">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Planos que cabem no seu bolso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem 7 dias grátis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 border ${
                plan.popular
                  ? "border-primary bg-card glow scale-[1.02]"
                  : "border-border bg-card card-elevated"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hero-gradient text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" /> Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://www.emprestfacil.app" className="block w-full">
                <Button
                  className={`w-full rounded-xl py-6 text-base font-semibold ${
                    plan.popular
                      ? "bg-hero-gradient text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Iniciar teste grátis
                </Button>
              </a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
