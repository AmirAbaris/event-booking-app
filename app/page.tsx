import { Event } from "@/lib/events";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const events = await res.json();

  return (
    <ul className="min-h-screen block text-center content-center">
      {events.map((event: Event, index: number) => (
        <li key={index}>{event.title}</li>
      ))}
    </ul>
  );
}
