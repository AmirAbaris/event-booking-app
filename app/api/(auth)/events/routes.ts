import events from "@/lib/events.json";

import { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  res.status(200).json(events);
}
