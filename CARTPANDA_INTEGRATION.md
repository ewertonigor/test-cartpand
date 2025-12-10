# Integração com CartPanda - Guia Completo

Este projeto Next.js está preparado para testar o fluxo de upsells do CartPanda com one-click purchase.

## 🎯 Estrutura do Funil

O funil está organizado da seguinte forma:

1. **Página Inicial (/)** - Checkout principal onde o cliente insere dados do cartão
2. **Upsell 1 (/upsell-1)** - Primeira oferta com one-click purchase
3. **Upsell 2 (/upsell-2)** - Segunda oferta com one-click purchase
4. **Agradecimento (/thank-you)** - Página final de confirmação

## 📋 Passos para Integração com CartPanda

### 1. Configurar o CartPanda

1. Acesse sua conta no CartPanda
2. Vá até **One Click Upsell** > **External Upsell**
3. Clique em **"Criar upsell externo"**
4. Configure:
   - **Título**: Nome do seu funil
   - **URL da página externa**: URLs das suas páginas (veja abaixo)
   - **Tipo de trigger**: Escolha conforme sua necessidade

### 2. URLs das Páginas

Se você estiver rodando localmente (`npm run dev`):
- Checkout: `http://localhost:3000/`
- Upsell 1: `http://localhost:3000/upsell-1`
- Upsell 2: `http://localhost:3000/upsell-2`
- Thank You: `http://localhost:3000/thank-you`

Quando fizer deploy (ex: Vercel):
- Substitua `localhost:3000` pelo seu domínio real

### 3. Adicionar Scripts do CartPanda

O CartPanda fornecerá scripts que devem ser adicionados no `<head>` de cada página do funil.

#### Opção 1: Usando Next.js Script (Recomendado)

Edite cada arquivo de página e adicione:

```tsx
import Script from 'next/script';

export default function SuaPagina() {
  return (
    <>
      {/* Script do CartPanda */}
      <Script
        id="cartpanda-upsell"
        strategy="beforeInteractive"
      >
        {`
          // Seu script do CartPanda aqui
          // Copie o código fornecido pelo CartPanda
        `}
      </Script>

      <div className="min-h-screen...">
        {/* Resto do conteúdo */}
      </div>
    </>
  );
}
```

#### Opção 2: Usando layout.tsx

Para adicionar o script em todas as páginas, edite `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="cartpanda-global"
          strategy="beforeInteractive"
        >
          {`
            // Script global do CartPanda
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 4. Substituir os Botões pelos Links do CartPanda

#### Na Página Inicial (Checkout)

O botão "FINALIZAR COMPRA SEGURA" será substituído pelo botão/link de checkout do CartPanda.

Localize no código:
```tsx
<Link
  href="/upsell-1"
  className="block w-full bg-green-600..."
>
  🔒 FINALIZAR COMPRA SEGURA
</Link>
```

Substitua por:
```tsx
<a
  href="SEU_LINK_DO_CARTPANDA_AQUI"
  className="block w-full bg-green-600..."
>
  🔒 FINALIZAR COMPRA SEGURA
</a>
```

#### Nas Páginas de Upsell

Cada página de upsell tem dois botões:

**Botão de Aceitar:**
```tsx
{/* Localizar este botão */}
<Link href="/upsell-2" className="...">
  SIM! QUERO APROVEITAR ESTA OFERTA
</Link>

{/* Substituir por */}
<a href="LINK_ACEITAR_DO_CARTPANDA" className="...">
  SIM! QUERO APROVEITAR ESTA OFERTA
</a>
```

**Botão de Recusar:**
```tsx
{/* Localizar este botão */}
<Link href="/upsell-2" className="...">
  Não, obrigado. Quero continuar sem isso.
</Link>

{/* Substituir por */}
<a href="LINK_RECUSAR_DO_CARTPANDA" className="...">
  Não, obrigado. Quero continuar sem isso.
</a>
```

### 5. Configurar Produtos no CartPanda

No painel do CartPanda, configure cada oferta:

#### Produto Principal
- Nome: "Produto Principal"
- Preço: R$ 247,00
- Página de redirecionamento após compra: `/upsell-1`

#### Upsell 1
- Nome: "Módulo Avançado Premium"
- Preço: R$ 297,00
- Desconto: 70% OFF (de R$ 997)
- Aceitar: Redireciona para `/upsell-2`
- Recusar: Redireciona para `/upsell-2`

#### Upsell 2
- Nome: "Pacote de Treinamento Completo"
- Preço: R$ 677,00
- Desconto: 80% OFF (de R$ 3.385)
- Aceitar: Redireciona para `/thank-you`
- Recusar: Redireciona para `/thank-you`

## 🚀 Como Testar

### 1. Rodar o Projeto Localmente

```bash
npm run dev
```

Acesse `http://localhost:3000`

### 2. Testar o Fluxo Manualmente

Antes de integrar com CartPanda, teste o fluxo clicando nos botões para ver se a navegação está correta:

1. Página inicial → Clique em "Finalizar Compra"
2. Upsell 1 → Clique em "Sim" ou "Não"
3. Upsell 2 → Clique em "Sim" ou "Não"
4. Thank You → Página final

### 3. Testar com CartPanda

Depois de configurar:

1. Use um cartão de teste do CartPanda
2. Complete a compra inicial
3. Verifique se é redirecionado para o Upsell 1
4. Teste o one-click purchase
5. Continue o fluxo até a página de agradecimento

## 📝 Notas Importantes

### One-Click Purchase

O one-click purchase funciona porque:
1. Na primeira compra, o cliente insere os dados do cartão
2. O CartPanda armazena esses dados de forma segura
3. Nos upsells, o CartPanda processa o pagamento automaticamente
4. O cliente só precisa clicar em "Sim" para comprar

### Segurança

- O CartPanda lida com toda a parte de pagamento
- Seus dados de cartão nunca passam pelo seu servidor
- A integração é feita via links e scripts fornecidos pelo CartPanda

### Customização

Você pode personalizar:
- Cores e estilos (arquivo está usando Tailwind CSS)
- Textos e ofertas
- Imagens (substitua os emojis por imagens reais)
- Valores e produtos

## 🎨 Personalizações Sugeridas

### Adicionar Imagens Reais

Substitua os emojis por imagens reais dos produtos:

```tsx
{/* Antes */}
<span className="text-white text-6xl">📦</span>

{/* Depois */}
<Image
  src="/produto-principal.png"
  alt="Produto Principal"
  width={300}
  height={300}
/>
```

### Adicionar Timer Real

Para o countdown de tempo, você pode usar uma biblioteca como `react-countdown` ou criar um timer customizado.

### Adicionar Pixels de Conversão

Na página de agradecimento, adicione pixels do Facebook, Google Analytics, etc:

```tsx
<Script id="facebook-pixel">
  {`
    fbq('track', 'Purchase', {
      value: 1221.00,
      currency: 'BRL'
    });
  `}
</Script>
```

## 🔧 Troubleshooting

### Os scripts do CartPanda não estão funcionando
- Verifique se adicionou o script no `<head>`
- Limpe o cache do navegador
- Verifique o console para erros

### Botões não estão processando pagamento
- Confirme que substituiu os Links pelos links do CartPanda
- Verifique se os links estão corretos no painel do CartPanda

### Redirecionamento não está funcionando
- Confirme as URLs no painel do CartPanda
- Use URLs absolutas, não relativas

## 📞 Suporte

Para suporte do CartPanda:
- Documentação: https://help.cartpanda.com/
- Suporte: Via painel do CartPanda

## ✅ Checklist de Integração

- [ ] Conta criada no CartPanda
- [ ] Produtos cadastrados
- [ ] Funil de upsell configurado
- [ ] Scripts adicionados nas páginas
- [ ] Botões substituídos pelos links do CartPanda
- [ ] URLs configuradas corretamente
- [ ] Teste realizado com cartão de teste
- [ ] One-click purchase funcionando
- [ ] Página de agradecimento sendo exibida

---

Pronto! Seu funil de vendas com upsells está configurado e pronto para usar com o CartPanda. 🎉
