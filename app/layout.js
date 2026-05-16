import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { CartProvider } from '@/context/CartContext'
import './globals.css'

export const metadata = {
  title: 'VoltLab — Kits de Robótica e Eletrônica',
  description: 'Catálogo interativo de kits de robótica, Arduino, Raspberry Pi e sensores.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <FavoritesProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  )
}