export default function ExclusiveBenefits() {
  const benefits = [
    {
      title: "Mais Clientes no Delivery",
      desc: "Vídeos que despertam vontade de pedir pizza na hora",
      icon: (
        <img
          src="https://i.ibb.co/zhDGWPZ1/Chat-GPT-Image-28-de-mai-de-2026-17-02-30-Photoroom.webp"
          alt="Mais Clientes no Delivery"
          className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Perfil Mais Profissional",
      desc: "Deixe o perfil da sua pizzaria mais bonito e profissional.",
      icon: (
        <img
          src="https://i.ibb.co/8LKmRV96/Chat-GPT-Image-28-de-mai-de-2026-17-05-24-Photoroom.webp"
          alt="Perfil Mais Profissional"
          className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Mais Engajamento",
      desc: "Mais curtidas, comentários e atenção para suas promoções.",
      icon: (
        <img
          src="https://i.ibb.co/mFYhqR3k/Chat-GPT-Image-28-de-mai-de-2026-17-05-53-Photoroom.webp"
          alt="Mais Engajamento"
          className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Nunca Mais Fique Sem Conteúdo",
      desc: "Poste todos os dias sem precisar pensar no que criar para divulgar sua pizzaria.",
      icon: (
        <img
          src="https://i.ibb.co/ymVhFxzk/Chat-GPT-Image-28-de-mai-de-2026-17-10-16-Photoroom.webp"
          alt="Nunca Mais Fique Sem Conteúdo"
          className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  return (
    <section id="exclusive-benefits" className="bg-dough-beige/30 pt-10 md:pt-14 pb-8 md:pb-12 px-4 border-b border-orange-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-pizza-charcoal tracking-tight">
            Benefícios Exclusivos
          </h2>
          <div className="w-24 h-1.5 bg-pizza-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-orange-200/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-between"
            >
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-pizza-charcoal text-center">
                    {benefit.title}
                  </h3>
                  <p className={`font-sans text-gray-600 leading-relaxed ${index === 2 ? 'text-[15px]' : 'text-base md:text-lg'}`}>
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
