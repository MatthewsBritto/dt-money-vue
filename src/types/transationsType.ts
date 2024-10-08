export interface TransactionType {
  id: number;
  title:  string;
  value: string;
  updatedAt: string;
  type: 'in' | 'out';
}