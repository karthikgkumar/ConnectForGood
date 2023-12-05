// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteEvent, getEvent } from "@/models/event";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getEvent(req.query.id);
    console.log(data);
    if (data.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.status(200).json(data[0]);
  }
  if (req.method === "DELETE") {
    const data = await deleteEvent(req.query.id);
    return res.status(200).json({ msg: "Success" });
  }
  res.status(405).json({ error: "Method not allowed" });
}
