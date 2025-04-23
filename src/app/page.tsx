
import ExampleIcon from "@/assets/icons/example.svg";

export default async function Home() {
  // fetching Example
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/example`).then(
    (res) => res.json()
  );

  return (
    <div className="font-hanken">
      <div>
        <ExampleIcon className="w-10 h-10 text-brand-smithApple" />
        <p>Data fetch example : {response.message}</p>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
    </div>
  );
}
