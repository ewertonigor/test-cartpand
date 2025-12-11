'use client';

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Carrega o script do Buy Button do CartPanda
    const script = document.createElement('script');
    script.src = 'https://kepler.mycartpanda.com/js/buy-button.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove o script quando o componente desmontar
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

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

          {/* Checkout com Buy Button do CartPanda */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete sua compra
            </h2>

            {/* Buy Button do CartPanda */}
            <div className="w-full">
              <div
                className="cartx-buy-button"
                data-buy-button="2659bdd0-fbfd-4d38-8f02-9c32dea339a4"
                data-shop-url="https://kepler.mycartpanda.com/"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>🔒 Pagamento 100% seguro</span>
              <span>•</span>
              <span>SSL Criptografado</span>
              <span>•</span>
              <span>Processado pelo CartPanda</span>
            </div>
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
