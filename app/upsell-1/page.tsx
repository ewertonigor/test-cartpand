import Link from "next/link";

export default function Upsell1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/*
        IMPORTANTE: Adicionar o script do CartPanda aqui no head
        Este script permite o one-click purchase usando os dados de pagamento já salvos
      */}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <span className="text-xl">✓</span>
              Pagamento aprovado com sucesso!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ESPERE! Oferta Especial 🎁
            </h1>
            <p className="text-xl text-gray-600">
              Esta é uma oportunidade única apenas para quem acabou de comprar
            </p>
          </div>

          {/* Urgency Banner */}
          <div className="bg-red-500 text-white text-center py-4 px-6 rounded-xl mb-8 shadow-lg">
            <p className="font-bold text-lg">
              ⏰ Esta oferta expira em 10 minutos!
            </p>
            <p className="text-sm">Não perca essa chance única de economizar 70%</p>
          </div>

          {/* Product Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold mb-2">
                Módulo Avançado Premium
              </h2>
              <p className="text-purple-100 text-lg">
                Multiplique seus resultados em 10x
              </p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  O que você vai receber:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-500 text-xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Automações Inteligentes
                      </p>
                      <p className="text-gray-600 text-sm">
                        Economize 10 horas por semana com automação
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 text-xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Relatórios Avançados
                      </p>
                      <p className="text-gray-600 text-sm">
                        Dashboard completo com métricas em tempo real
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 text-xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Integrações Premium
                      </p>
                      <p className="text-gray-600 text-sm">
                        Conecte com +50 ferramentas automaticamente
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 text-xl mr-3">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Suporte VIP Prioritário
                      </p>
                      <p className="text-gray-600 text-sm">
                        Atendimento em até 1 hora
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-lg line-through">
                    Valor normal: R$ 997,00
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -70% OFF
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">
                    Somente hoje, por apenas:
                  </p>
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    R$ 297,00
                  </div>
                  <p className="text-gray-500">ou 12x de R$ 29,70</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                {/*
                  NOTA: Este botão será substituído pelo link do CartPanda para one-click purchase
                  O CartPanda processará o pagamento automaticamente usando os dados já salvos
                */}
                <Link
                  href="/upsell-2"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center font-bold py-5 px-6 rounded-xl text-xl transition-all shadow-xl transform hover:scale-105"
                >
                  ✨ SIM! QUERO APROVEITAR ESTA OFERTA
                </Link>

                {/*
                  NOTA: Este botão será substituído pelo link do CartPanda para recusar
                  Vai redirecionar para o próximo upsell ou página de agradecimento
                */}
                <Link
                  href="/upsell-2"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center font-medium py-4 px-6 rounded-xl transition-colors"
                >
                  Não, obrigado. Quero continuar sem isso.
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Sem necessidade de inserir dados de pagamento novamente
                </p>
                <p className="text-sm text-gray-500">
                  Cobrança automática no mesmo cartão
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-4 text-center">
              O que nossos clientes dizem:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👤</div>
                <div>
                  <p className="text-gray-700 italic">
                    "O módulo avançado mudou completamente meu negócio. Valeu cada centavo!"
                  </p>
                  <p className="text-sm text-gray-500 mt-1">- Maria Silva, Empresária</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl">👤</div>
                <div>
                  <p className="text-gray-700 italic">
                    "Economizo mais de 15 horas por semana com as automações. Incrível!"
                  </p>
                  <p className="text-sm text-gray-500 mt-1">- João Pedro, Consultor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
