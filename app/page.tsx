export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* IMPORTANTE: Adicionar o script do CartPanda aqui no head via metadata ou Script tag */}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Produto Principal
            </h1>
            <p className="text-xl text-gray-600">
              Transforme seu negócio com nossa solução completa
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Product Image */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center">
              <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-6xl">📦</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  O que você vai receber:
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Acesso completo à plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Suporte prioritário 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Atualizações gratuitas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">Garantia de 30 dias</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-500 line-through">De R$ 497,00</span>
                  <span className="text-sm text-red-500 font-semibold">50% OFF</span>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  R$ 247,00
                </div>
                <p className="text-sm text-gray-500">ou 12x de R$ 24,70</p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Dados de Pagamento
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="joao@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Validade
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="123"
                  />
                </div>
              </div>

              {/* Botão de Checkout do CartPanda */}
              <a
                href="https://kepler.mycartpanda.com/checkout/204475549:1?test_mode=true"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-bold py-4 px-6 rounded-xl text-lg transition-colors shadow-lg"
              >
                🔒 FINALIZAR COMPRA SEGURA
              </a>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>🔒 Pagamento 100% seguro</span>
                <span>•</span>
                <span>SSL Criptografado</span>
              </div>
            </form>
          </div>

          {/* Garantia */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              🛡️ Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-gray-700">
              Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
