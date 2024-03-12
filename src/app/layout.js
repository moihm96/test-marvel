import { SearchBar } from '@/components/SearchBar';
import './globals.css';
import { Header } from '@/components/Header';
import { CountWrapper } from '@/context/countContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CountWrapper>
          <Header />
          <SearchBar />
          {children}
        </CountWrapper>
      </body>
    </html>
  );
}
