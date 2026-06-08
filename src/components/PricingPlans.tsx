import { useState, useEffect } from "react";
import { Check, X, Shield, Star, Award, Flame, AlertTriangle, Clock, Gift } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PricingPlansProps {
  onSelectPlan: (planName: "Básico" | "Premium", price: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
  const [totalSeconds, setTotalSeconds] = useState(1 * 3600 + 30 * 60 + 17); // 01:30:17 in seconds
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    if (showUpsell) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showUpsell]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 1 * 3600 + 30 * 60 + 17)); // Loops back when finished to retain dynamic pressure
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getHours = () => Math.floor(totalSeconds / 3600);
  const getMinutes = () => Math.floor((totalSeconds % 3600) / 60);
  const getSeconds = () => totalSeconds % 60;

  const padZero = (num: number) => num.toString().padStart(2, "0");

  return (
    <section id="pricing" className="bg-dough-beige pt-4 md:pt-6 pb-16 md:pb-24 px-4 border-b border-orange-200 scroll-mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Highlight Alert and Live Timer above title */}
        <div className="bg-orange-50 border-2 border-orange-100 rounded-3xl p-6 md:p-8 max-w-md mx-auto text-center space-y-5 shadow-sm mb-5">
          <p className="font-display font-black text-xs md:text-sm text-pizza-red tracking-wider uppercase flex items-center justify-center gap-1.5">
            <span>⏰ OFERTA ESPECIAL EXPIRA EM:</span>
          </p>

          {/* Clean Digit Block Countdown Display (No dividers, matching template structure) */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-xs mx-auto">
            <div className="bg-white rounded-2xl py-4 px-2 shadow-sm flex flex-col items-center justify-center border border-orange-100/30">
              <div className="font-display font-black text-3xl md:text-4xl text-pizza-red leading-none">
                {padZero(getHours())}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                Horas
              </div>
            </div>

            <div className="bg-white rounded-2xl py-4 px-2 shadow-sm flex flex-col items-center justify-center border border-orange-100/30">
              <div className="font-display font-black text-3xl md:text-4xl text-pizza-red leading-none">
                {padZero(getMinutes())}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                Min
              </div>
            </div>

            <div className="bg-white rounded-2xl py-4 px-2 shadow-sm flex flex-col items-center justify-center border border-orange-100/30">
              <div className="font-display font-black text-3xl md:text-4xl text-pizza-red leading-none">
                {padZero(getSeconds())}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                Seg
              </div>
            </div>
          </div>
        </div>

        {/* Title layout verbatim */}
        <div className="text-center space-y-4 mb-6">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-pizza-charcoal tracking-tight">
            Escolha Seu Plano
          </h2>
          <div className="w-24 h-1.5 bg-pizza-red mx-auto rounded-full" />
        </div>

        {/* Both Cards Grid alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-stretch">
          
          {/* Card: Plano Básico */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 relative flex flex-col justify-between shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              {/* Header Centered */}
              <div className="text-center space-y-1">
                <h3 className="font-display font-extrabold text-3xl text-pizza-charcoal">
                  Plano Básico
                </h3>
              </div>

              {/* Price Area Centered */}
              <div className="text-center space-y-1">
                <div className="text-gray-400 line-through text-sm font-sans">
                  R$67
                </div>
                <div className="font-display font-black text-5xl text-emerald-500 leading-none">
                  R$10,00
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">
                  pagamento único
                </div>
                <div className="text-xs font-bold text-emerald-500 mt-1">
                  Você economiza R$57,00
                </div>
              </div>

              {/* Checklist details matching image with real check icons */}
              <ul className="space-y-4 text-sm font-sans text-gray-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>🎬 35 Vídeos Animados para Pizzarias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Conteúdo pronto para postar</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
              </ul>
            </div>

            {/* Button container */}
            <div className="pt-6">
              <button
                onClick={() => setShowUpsell(true)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-lg py-5 rounded-xl shadow-lg hover:shadow-xl shadow-emerald-500/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 group text-center"
              >
                <span>QUERO COMPRAR!</span>
              </button>
            </div>
          </div>

          {/* Card: Plano Premium */}
          <div id="premium-plan-card" className="bg-white border-3 border-pizza-red rounded-3xl p-8 relative flex flex-col justify-between shadow-xl ring-4 ring-pizza-red/5 hover:-translate-y-1 transition-transform duration-300">
            {/* Top Badge: "MAIS POPULAR 🔥" */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-pizza-red text-white font-display font-extrabold text-xs px-6 py-2 rounded-full shadow-lg border-2 border-cheese-yellow flex items-center z-10">
              <span>MAIS POPULAR 🔥</span>
            </div>

            <div className="space-y-6 pt-2">
              {/* Header Centered */}
              <div className="text-center space-y-1">
                <h3 className="font-display font-extrabold text-3xl text-pizza-charcoal">
                  Plano Premium
                </h3>
              </div>

              {/* Price Area Centered */}
              <div className="text-center space-y-1">
                <div className="text-gray-400 line-through text-sm font-sans">
                  R$297
                </div>
                <div className="font-display font-black text-5xl text-emerald-500 leading-none">
                  R$24,90
                </div>
                <div className="text-xs text-gray-500 font-medium tracking-wide">
                  pagamento único
                </div>
                <div className="text-xs font-bold text-emerald-500 mt-1">
                  Você economiza R$272,10 + bônus grátis
                </div>
              </div>

              {/* Checklist details matching image with real check and gift icons */}
              <ul className="space-y-4 text-sm font-sans text-gray-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>🎬 100 Vídeos Animados para Pizzarias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Pacote completo de vídeos animados</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Pack de Vídeos que Vendem</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Vídeos em Qualidade 4K</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>15 Vídeos Extras para Promoções</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Garantia de 7 dias</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
            </div>

            {/* High impact color CTA Button */}
            <div className="pt-6">
              <a
                href="https://pay.wiapy.com/7ixGlB_-To"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-lg py-5 rounded-xl shadow-lg hover:shadow-xl shadow-emerald-500/10 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 group text-center"
              >
                <span>QUERO COMPRAR!</span>
              </a>
            </div>
          </div>
          
        </div>

      </div>

      {/* Upsell / Discount Popup Dialog */}
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            {/* Backdrop with transition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setShowUpsell(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              id="upsell-backdrop"
            />

            {/* Modal Body Dialog - centered natively with Flexbox to completely avoid translational subpixel rounding jitter on scroll/viewport changes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="relative bg-white border-2 border-orange-400/30 rounded-3xl p-5 md:p-6 w-full max-w-[340px] text-center shadow-2xl z-10 overflow-hidden text-pizza-charcoal flex flex-col justify-between select-none"
              id="upsell-modal"
              style={{
                willChange: "opacity, transform",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {/* Close button X */}
              <button
                onClick={() => setShowUpsell(false)}
                className="absolute top-2.5 right-2.5 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 w-[30px] h-[30px] pl-[15px] flex items-center justify-start rounded-full transition-colors border border-gray-200 cursor-pointer z-20"
                id="upsell-close-button"
              >
                <X className="w-4 h-4 -ml-2" />
              </button>

              <div className="space-y-5">
                {/* Main Offer Title */}
                <div className="space-y-1.5 px-1 overflow-visible">
                  <h3 className="font-display font-black text-2xl md:text-[25px] text-pizza-red tracking-tight leading-none uppercase whitespace-nowrap">
                    DESCONTO ESPECIAL
                  </h3>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-2.5 text-sm text-left max-w-md mx-auto pt-2">
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>🎬100 Vídeos Animados pra Pizzarias</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Pacote completo de vídeos</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Pack de Vídeos que Vendem</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Vídeos em Qualidade 4K</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>15 Videos Extras de Promoções</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Acesso imediato</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Garantia de 7 dias</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-gray-800 font-semibold">
                    <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>

                {/* Price Display Block */}
                <div className="space-y-1 py-1 border-t border-b border-gray-100 my-4">
                  <div className="text-red-500 line-through text-xs font-bold">
                    De R$ 24,90
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Por apenas:
                  </div>
                  <div className="font-display font-black text-5xl text-emerald-500 leading-none py-1 drop-shadow-[0_2px_10px_rgba(16,185,129,0.1)]">
                    R$ 17,00
                  </div>
                </div>
              </div>

              {/* Action Buttons CTAs */}
              <div className="space-y-4 pt-2">
                <a
                  href="https://pay.wiapy.com/za0EqEk6rZ" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-display font-black text-lg py-4 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2 text-center"
                  id="upsell-accept-button"
                >
                  <span>SIM! QUERO COM DESCONTO</span>
                </a>

                {/* Decline, go back to basic link */}
                <a
                  href="https://pay.wiapy.com/1UZJkFSdaO"
                  className="w-full border-2 border-slate-900 rounded-[20px] bg-white hover:bg-gray-50 transition-all py-2 md:py-2.5 px-3 text-center text-[#111827] text-xs md:text-[13px] font-black tracking-tight leading-normal cursor-pointer block"
                  id="upsell-decline-button"
                >
                  <span className="block">Não, quero apenas o Plano Básico por</span>
                  <span className="block text-sm md:text-base tracking-wide mt-0.5">R$ 10,00</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
