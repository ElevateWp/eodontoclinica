import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/motion/LenisProvider';
import PagePreloader from '@/components/motion/PagePreloader';
import JsonLd from '@/components/ui/JsonLd';
import { generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://dentalstudiomanaus.com.br'),
  title: {
    default: 'EODONTO | Clínica Odontológica em Manaus',
    template: '%s | EODONTO',
  },
  description:
    'Clínica Odontológica EODONTO, em Chapada, Manaus - Amazonas. Telefone: +55 92 99148-7679.',
  keywords: [
    'Clínica Odontológica EODONTO',
    'Clínica Odontológica Manaus',
    'Dentista Chapada Manaus',
  ],
  authors: [{ name: 'Clínica Odontológica EODONTO' }],
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: [{ url: '/images/logo.png', type: 'image/png' }],
    apple: [{ url: '/images/logo.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-paper text-forest-ink min-h-screen flex flex-col selection:bg-[#FAF7F0] selection:text-[#542F0C]">
        <PagePreloader />
        <JsonLd data={generateLocalBusinessSchema()} />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-[72px]">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
