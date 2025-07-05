import React, { createContext, useState } from "react";
import type { CardData } from "../Components/ChildTwo";

interface CardContextType {
  cardData: CardData[];
  setCardData: React.Dispatch<React.SetStateAction<CardData[]>>;
  addCard: (card: CardData) => void;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

interface CardProviderProps {
  children: React.ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  const addCard = (card: CardData) => {
    setCardData((prev) => [...prev, card]);
  };

  const contextValue: CardContextType = {
    cardData,
    setCardData,
    addCard,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
