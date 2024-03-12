'use client';
import { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function CountWrapper({ children }) {
  const [count, setCount] = useState(50);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  return useContext(CountContext);
}
