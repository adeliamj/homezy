import Navbar from "@components/layout/Navbar";
import ExampleIcon from "@/assets/example.svg";

export default async function Home() {
  // fetching Example
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/example`).then(
    (res) => res.json()
  );

  return (
    <div className="font-hanken">
      <Navbar />

      <div>
        <ExampleIcon className="w-10 h-10 text-brand-smithApple" />
        <p>Data fetch example : {response.message}</p>

      </div>
    </div>
  );
}
