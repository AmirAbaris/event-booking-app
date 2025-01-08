export default async function Home() {
  // Fetch the data from the API
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const events = await res.json();

  return (
    <div>
      <ul>
        {events.map((event: any, index: number) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}
