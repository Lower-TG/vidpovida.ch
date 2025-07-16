import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello world",
  description: "..."
}

export default function Home() {
  return (
    <h1 className="text-4xl">Hello world</h1>
  );
}
