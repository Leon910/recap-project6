import dbConnect from "@/db/connect";
import Place from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const places = await Place.find();
      return response.status(200).json(places);
    }
  } catch (error) {
    return response.status(400).json({ error: "Places not found" });
  }
}
