import './globals.css'

export const metadata = {
  title: 'Escola Ateliê Baobá - Acolhendo com Amor',
  description: 'Escola infantil em São Leopoldo/RS. Acolhimento, brincar livre e alimentação saudável para crianças de 0 a 6 anos.',
  keywords: 'escola infantil, educação infantil, são leopoldo, creche, berçário, ateliê baobá',
  authors: [{ name: 'Escola Ateliê Baobá' }],
  openGraph: {
    title: 'Escola Ateliê Baobá - Acolhendo com Amor',
    description: 'Um ateliê de descobertas onde o brincar livre, as artes e a alimentação saudável são prioridades.',
    url: 'https://escolaateliebaoba.vercel.app',
    siteName: 'Escola Ateliê Baobá',
    images: [
      {
        url: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png',
        width: 128,
        height: 128,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escola Ateliê Baobá - Acolhendo com Amor',
    description: 'Um ateliê de descobertas onde o brincar livre, as artes e a alimentação saudável são prioridades.',
    images: ['https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png'],
  },
  icons: {
    icon: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png',
    apple: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=128,fit=crop,q=95/YBgp3ZwxQzSMVqMJ/design-sem-nome-9-mxB7QjQyqbFp2GPy.png',
  },
  themeColor: '#ea580c',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}