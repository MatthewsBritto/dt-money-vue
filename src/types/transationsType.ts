export interface TransactionType {
  id: Number;
  title:  String;
  value: String;
  updatedAt: String;
  type: 'in' | 'out';
}