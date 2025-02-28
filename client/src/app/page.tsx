export default function Home() {
  const testFetch = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
    const data = await response.json();
    return data.message;
  };

  const greeting = testFetch();

  return <div>{greeting}</div>;
}
