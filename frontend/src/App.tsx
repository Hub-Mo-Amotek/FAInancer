import './App.css';
import { useQuery } from '@tanstack/react-query';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log('API URL:', apiUrl);

  const { data, isLoading, error } = useQuery({
    queryKey: ['transaction'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/Transactions`);
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        const text = await response.text();
        throw new Error(`Unexpected content type: ${contentType}\n\n${text}`);
      }
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <>
      <h1>hello world</h1>
      {data?.map((transaction: any) => (
        <div key={transaction.id}>
          <h1>ID: {transaction.id}</h1>
          <h2>Desc: {transaction.description}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
