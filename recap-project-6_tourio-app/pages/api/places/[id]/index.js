import dbConnect from "@/db/connect";
import Place from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(request.query);
  if (!id) {
    return;
  }

  try {
    if (request.method === "GET") {
      const place = await Place.findById(id);
      response.status(200).json(place);
      return;
    }

    if (request.method === "PATCH") {
      const place = await Place.findByIdAndUpdate(id);
      response.status(200).json(place);
      return;
    }
  } catch (error) {
    return response.status(400).json({ error: "Places not found" });
  }

  // const place = places.find((place) => place.id === id);

  // if (!places) {
  //   return response.status(404).json({ status: "Not found" });
  // }

  // response.status(200).json(places);
}
