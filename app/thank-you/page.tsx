export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/*
        IMPORTANTE: Esta é a página final do funil
        Pode adicionar pixels de conversão e scripts de tracking aqui
      */}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-6xl text-white">✓</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Parabéns! Compra Realizada 🎉
            </h1>
            <p className="text-xl text-gray-600">
              Seu pedido foi confirmado e você já tem acesso imediato!
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Detalhes do Seu Pedido
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">📦 Produto Principal</span>
                <span className="font-semibold text-gray-900">R$ 247,00</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">🚀 Módulo Avançado Premium</span>
                <span className="font-semibold text-gray-900">R$ 297,00</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-700">💎 Pacote de Treinamento Completo</span>
                <span className="font-semibold text-gray-900">R$ 677,00</span>
              </div>
              <div className="flex justify-between items-center pt-4 text-lg">
                <span className="font-bold text-gray-900">Total:</span>
                <span className="font-bold text-green-600 text-2xl">R$ 1.221,00</span>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
              <p className="text-green-800 font-semibold">
                ✓ Pagamento aprovado e processado com sucesso!
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎯 Próximos Passos
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Confira seu e-mail
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enviamos todos os dados de acesso para seu e-mail cadastrado.
                    Verifique também a caixa de spam.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Acesse a área de membros
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Clique no botão abaixo para acessar imediatamente todo o conteúdo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Junte-se ao grupo VIP
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Conecte-se com outros membros e tire suas dúvidas em tempo real.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center font-bold py-4 px-6 rounded-xl text-lg transition-all shadow-lg"
              >
                🚀 ACESSAR ÁREA DE MEMBROS
              </a>
            </div>
          </div>

          {/* Support Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              📞 Precisa de Ajuda?
            </h2>
            <div className="space-y-3 text-center">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> suporte@exemplo.com
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">WhatsApp:</span> (11) 99999-9999
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Horário de Atendimento:</span> Seg-Sex, 9h-18h
              </p>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🎁 Compartilhe com seus amigos
            </h3>
            <p className="text-gray-600 mb-4">
              Conhece alguém que também precisa dessa solução?
              Compartilhe e ajude outras pessoas!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Facebook
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                WhatsApp
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors">
                Twitter
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-gray-500 text-sm">
            <p>Obrigado por confiar em nós! 💚</p>
            <p className="mt-2">
              Tem alguma dúvida? Nossa equipe está pronta para ajudar você a ter sucesso!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
