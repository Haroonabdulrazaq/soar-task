import { IconType } from 'react-icons/lib';
import {
  PiCards,
  PiPaypalLogoThin,
  PiCurrencyCircleDollarLight,
} from 'react-icons/pi';

export const icons = [PiCards, PiPaypalLogoThin, PiCurrencyCircleDollarLight];
export const transactionIcons: Record<string, IconType> = {
  'Deposit from my Card': PiCards,
  'Deposit Paypal': PiPaypalLogoThin,
  'Jemi Wilson': PiCurrencyCircleDollarLight,
};
