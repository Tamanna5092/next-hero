import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", { cache: 'no-store' }); // if time didn't change then use {cache: 'no-store'} for client side rendering
  const data = await res.json();
  return data.currentTime;
};

export default async function Home () {
  const currentTime = await getTime();
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl uppercase">Hello from NEXT.js</h1>
      <div className={`${playfair.className} p-10`}>
        <h1 className="text-center text-4xl font-bold">Welcome To Home Page</h1>
        <p className="text-2xl text-center my-4"><span className="text-red-600 font-bold">Time</span>: {currentTime}</p>
      </div>
    </main>
  );
}
