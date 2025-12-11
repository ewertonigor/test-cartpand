import Script from "next/script";

export default function Upsell2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      {/* Script do CartPanda - Upsell Externo */}
      <Script
        src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js"
        strategy="beforeInteractive"
      />
      <Script id="ocu-init-2" strategy="afterInteractive">
        {`new OcuExternal();`}
      </Script>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <span className="text-xl">🎯</span>
              Você está quase lá!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Última Chance! 🔥
            </h1>
            <p className="text-xl text-gray-600">
              Desbloqueie o pacote completo com 80% de desconto
            </p>
          </div>

          {/* Timer */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4 px-6 rounded-xl mb-8 shadow-lg">
            <p className="font-bold text-lg mb-1">
              ⚡ OFERTA EXPIRA EM:
            </p>
            <div className="flex justify-center gap-4 text-2xl font-bold">
              <div>
                <span className="bg-white/20 px-3 py-2 rounded">05</span>
                <p className="text-xs mt-1">MIN</p>
              </div>
              <div className="text-3xl">:</div>
              <div>
                <span className="bg-white/20 px-3 py-2 rounded">00</span>
                <p className="text-xs mt-1">SEG</p>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 text-white text-center">
              <div className="text-6xl mb-4">💎</div>
              <h2 className="text-3xl font-bold mb-2">
                Pacote de Treinamento Completo
              </h2>
              <p className="text-orange-100 text-lg">
                Torne-se um especialista em tempo recorde
              </p>
            </div>

            <div className="p-8">
              {/* Comparison */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 mb-8 border-2 border-orange-200">
                <h3 className="text-center font-bold text-gray-900 text-xl mb-4">
                  O que você está perdendo:
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎓 20 Videoaulas Avançadas</span>
                    <span className="font-semibold text-gray-900">R$ 1.497</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">📚 5 Ebooks Exclusivos</span>
                    <span className="font-semibold text-gray-900">R$ 497</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎯 Templates Prontos</span>
                    <span className="font-semibold text-gray-900">R$ 397</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">👥 Acesso ao Grupo VIP</span>
                    <span className="font-semibold text-gray-900">R$ 697</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">🎁 Bônus Surpresa</span>
                    <span className="font-semibold text-gray-900">R$ 297</span>
                  </div>
                  <div className="border-t-2 border-orange-300 pt-3 flex justify-between items-center text-lg">
                    <span className="font-bold text-gray-900">Valor Total:</span>
                    <span className="font-bold text-gray-900 line-through">R$ 3.385</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Por que você precisa disso?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">🚀</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Acelere seus Resultados
                      </p>
                      <p className="text-gray-600 text-sm">
                        Aprenda em 30 dias o que levaria 1 ano para dominar sozinho
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">💰</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Evite Erros Caros
                      </p>
                      <p className="text-gray-600 text-sm">
                        Aprenda com quem já errou para você não precisar errar
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 text-xl mr-3">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Comunidade Exclusiva
                      </p>
                      <p className="text-gray-600 text-sm">
                        Network com outros profissionais de alto nível
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6 mb-6 border-2 border-orange-300">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-gray-500 text-2xl line-through">
                      R$ 3.385,00
                    </span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                      80% OFF
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Apenas nesta página, por apenas:
                  </p>
                  <div className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    R$ 677,00
                  </div>
                  <p className="text-gray-600 text-lg">ou 12x de R$ 67,70</p>
                  <p className="text-sm text-orange-600 font-semibold mt-2">
                    Economia de R$ 2.708,00!
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                {/* Botão Aceitar - One-Click Purchase via CartPanda */}
                <a
                  href="https://kepler.mycartpanda.com/ex-ocu/next-offer/ym21GAlYpD?accepted=yes"
                  className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-center font-bold py-5 px-6 rounded-xl text-xl transition-all shadow-xl transform hover:scale-105"
                >
                  🎁 SIM! QUERO O PACOTE COMPLETO
                </a>

                {/* Botão Recusar - Vai para página de agradecimento */}
                <a
                  href="https://kepler.mycartpanda.com/ex-ocu/next-offer/ym21GAlYpD?accepted=no"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center font-medium py-4 px-6 rounded-xl transition-colors"
                >
                  Não preciso disso agora
                </a>
              </div>

              <div className="mt-6 text-center space-y-1">
                <p className="text-sm text-gray-500">
                  🔒 Pagamento processado automaticamente
                </p>
                <p className="text-sm text-gray-500">
                  Sem necessidade de inserir dados novamente
                </p>
                <p className="text-sm font-semibold text-orange-600">
                  + Mesma garantia de 30 dias!
                </p>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ⚠️ ATENÇÃO: Esta é sua ÚLTIMA OPORTUNIDADE
            </h3>
            <p className="text-gray-700">
              Se você sair desta página, perderá este desconto para sempre.
              <br />
              <span className="font-bold text-red-600">
                Esta oferta nunca mais estará disponível com este preço!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
