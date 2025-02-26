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

export type Profile = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export type WeeklyActivity = {
  type: string;
  xCategories: string[];
  accessibilityDescription: string;
  valueSuffix: string;
  Desposit: {
    name: string;
    data: number[];
  };
  Withdraw: {
    name: string;
    data: number[];
  };
};
