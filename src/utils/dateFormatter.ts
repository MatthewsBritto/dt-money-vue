// Funcao para formatar a data entregue pela api
export function dateFormatter (dateParam:string): string {
  const date = new Date(dateParam);
  
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = ( date.getUTCMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getUTCFullYear();
  
  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);
  return formattedDate;
}