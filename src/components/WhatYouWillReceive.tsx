export default function WhatYouWillReceive() {
  const items = [
    {
      title: "Vídeos Animados Profissionais",
      desc: "Vídeos chamativos para destacar sua pizzaria nas redes sociais.",
      icon: (
        <img
          src="https://i.ibb.co/0jzvjhbp/Chat-GPT-Image-28-de-mai-de-2026-17-16-03-1-Photoroom-Photoroom.webp"
          alt="Vídeos Animados Profissionais"
          className="w-24 h-24 object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Conteúdo Pronto Para Postar",
      desc: "Poste vídeos de pizzas, combos e promoções sem precisar editar.",
      icon: (
        <img
          src="https://i.ibb.co/Sw3Bq74Y/Chat-GPT-Image-28-de-mai-de-2026-17-16-05-2-Photoroom.webp"
          alt="Conteúdo Pronto Para Postar"
          className="w-24 h-24 object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Acesso Digital Completo",
      desc: "Acesse pelo celular, tablet ou computador quando quiser.",
      icon: (
        <img
          src="https://i.ibb.co/q3zWQjzc/Chat-GPT-Image-28-de-mai-de-2026-17-28-02-Photoroom.webp"
          alt="Acesso Digital Completo"
          className="w-24 h-24 object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Mais Alcance e Mais Pedidos",
      desc: "Vídeos Feitos para despertar fome e aumentar os pedidos no delivery.",
      icon: (
        <img
          src="https://i.ibb.co/s9DjxLqx/Chat-GPT-Image-28-de-mai-de-2026-17-16-17-4-Photoroom.webp"
          alt="Mais Alcance e Mais Pedidos"
          className="w-24 h-24 object-contain"
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  return (
    <section id="what-you-will-receive" className="bg-white pt-8 pb-10 md:pt-12 md:pb-14 px-4 border-b border-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-pizza-charcoal tracking-tight">
            O Que Você Vai Receber
          </h2>
          <div className="w-24 h-1.5 bg-cheese-yellow mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-dough-beige/40 border border-orange-200/50 px-6 pt-5 pb-6 rounded-3xl shadow-sm hover:shadow-xl hover:bg-dough-beige/80 transition-all duration-300 group flex flex-col items-center text-center gap-2"
            >
              <div className="w-24 h-24 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-pizza-charcoal">
                  {item.title}
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
