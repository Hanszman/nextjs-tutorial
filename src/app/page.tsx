export const revalidate = 60;

export default function Home() {
  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>Página Home</h1>
      <h2>Número Gerado: {randomNumber}</h2>
    </div>
  );
}
