// utils/stats.ts

export interface HomeStats {
  stars: Record<string, number>;
  downloads?: number;
}

export const NO_STATS: HomeStats = { stars: {} };

export function compactCount(value: number): string {
  if (value >= 1_000_000) {
    return `${(Math.floor(value / 100_000) / 10).toFixed(1).replace(/\.0$/, '')}M`;
  }
  return value >= 1000 ? `${Math.floor(value / 1000)}k` : String(value);
}