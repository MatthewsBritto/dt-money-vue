import { TransactionType } from "@/types/transationsType";

export function sortTransactionByDate(transactions: TransactionType[]): TransactionType[] {
  const sortedTransactions = transactions.sort((a, b) => {

    // Função orderna os lancamentos pelo dia e  por ordem decrescente

    return new Date(b.updatedAt.toString()).getTime() - 
            new Date(a.updatedAt.toString()).getTime()
  });

  return sortedTransactions;
}