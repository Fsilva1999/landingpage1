import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Crie sua conta", description: "Cadastre-se em segundos e acesse a plataforma gratuitamente por 7 dias." },
  { number: "02", title: "Cadastre clientes", description: "Adicione seus clientes com todos os dados necessários de forma organizada." },
  { number: "03", title: "Gerencie cobranças", description: "Crie cobranças, defina vencimentos e acompanhe pagamentos em tempo real." },
  { number: "04", title: "Automatize notificações", description: "Configure lembretes automáticos e reduza a inadimplência sem esforço." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card" id="como-funciona">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Como funciona?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece a usar em minutos. Sem complicação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="text-5xl font-display font-bold text-gradient mb-4">{step.number}</div>
              <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
