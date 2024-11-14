export const parseMonetaryValue = (value: string): number => {
  const numericValue = parseFloat(value.replace(/[$,K,M]/g, ''));
  if (value.includes('K')) return numericValue * 1000;
  if (value.includes('M')) return numericValue * 1000000;
  return numericValue;
};

export const getLiquidityColor = (liquidity: string): string => {
  const value = parseMonetaryValue(liquidity);
  return value >= 100000 ? 'text-green-500' : 'text-white';
};

export const getVolumeColor = (volume: string): string => {
  const value = parseMonetaryValue(volume);
  return value >= 10000 ? 'text-white' : 'text-white/50';
};

export const getMarketCapColor = (marketCap: string): string => {
  const value = parseMonetaryValue(marketCap);
  if (value >= 1000000) return 'text-green-500';
  if (value >= 100000) return 'text-white';
  return 'text-white/50';
};
