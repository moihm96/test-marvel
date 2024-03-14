import './globals.css';
import { Header } from '@/components/header';
import { CountWrapper } from '@/context/countContext';
import { FavoriteWrapper } from '@/context/favoriteContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FavoriteWrapper>
          <CountWrapper>
            <Header />
            {children}
          </CountWrapper>
        </FavoriteWrapper>
      </body>
    </html>
  );
}
