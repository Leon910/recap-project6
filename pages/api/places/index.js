import dbConnect from "@/db/connect";
import Place from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const places = await Place.find();
      return response.status(200).json(places);
    }

    if (request.method === "POST") {
      const placeData = request.body;

      await Place.create(placeData);
      response.status(201).json({ status: "Place created." });
      return;
    }
  } catch (error) {
    return response.status(400).json({ error: "Places not found" });
  }
}
