import { useCallback } from 'react';

type CurrencyType = 'rupiah' | 'dollar';

const useFormatCurrency = () => {
  const formatCurrency = useCallback((amount: number, currency: CurrencyType) => {
    if (currency === 'rupiah') {
      return `IDR ${new Intl.NumberFormat('id-ID').format(amount)}`;
    } else if (currency === 'dollar') {
      return `USD ${new Intl.NumberFormat('en-US').format(amount)}`;
    }
    return amount.toString();
  }, []);

  return { formatCurrency };
};

export default useFormatCurrency;
