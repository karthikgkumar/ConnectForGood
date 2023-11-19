import { getVolunteer } from "@/models/volunteer";
import { getOrganization } from "@/models/organization";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    let rows = {};
    if (data.role == "volunteer") {
      rows = await getVolunteer(data.email);
    } else if (data.role == "organization") {
      rows = await getOrganization(data.email);
    }
    res.status(200).json({ msg: "Success", data: rows });
  }
  res.status(405).json({ error: "Method not allowed" });
}
