"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    role: "Proprietário",
    company: "Anápolis/GO",
    initials: "JS",
    text: "Regularizei meu imóvel através da Carvalho Engenharia em apenas 15 dias. Agradeço imensamente o atendimento excepcional e a agilidade impressionante. Indico a todos!",
    stars: 5,
  },
  {
    name: "Maria F.",
    role: "Proprietária",
    company: "Goiânia/GO",
    initials: "MF",
    text: "Precisava do habite-se urgente para vender meu imóvel. O Caio resolveu tudo em tempo recorde, me manteve informada em cada etapa e o resultado foi excelente. Serviço de verdade.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "Empresário",
    company: "Aparecida de Goiânia/GO",
    initials: "CR",
    text: "Meu estabelecimento estava sem carta de ocupação e sem conseguir renovar o alvará de funcionamento. A Carvalho Engenharia resolveu toda a situação com profissionalismo e agilidade total.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#00aaff] font-semibold mb-3">
            Depoimentos
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-[#888888]">
            Pessoas que regularizaram seus imóveis com a Carvalho Engenharia em Goiânia e região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00aaff]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,170,255,0.08)]"
            >
              {/* Ícone de aspas */}
              <Quote className="w-6 h-6 text-[#00aaff]/30" />

              {/* Estrelas */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[#00aaff] text-[#00aaff]" />
                ))}
              </div>

              {/* Texto */}
              <p className="text-[#aaaaaa] text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Autor */}
              <div className="pt-4 border-t border-[#1a1a1a] flex items-center gap-3">
                {/* Avatar com iniciais */}
                <div className="w-9 h-9 rounded-full bg-[#00aaff]/10 border border-[#00aaff]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#00aaff] text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#fafafa] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#666666] text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
