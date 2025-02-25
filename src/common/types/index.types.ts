export type Transaction = {
  icon: React.ElementType;
  title: string;
  date: string;
  amount: number;
  bgColor: string;
  iconColor: string;
};

export type Card = {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  color: string;
  cardChip: string;
  masterCardLogo: string;
};
