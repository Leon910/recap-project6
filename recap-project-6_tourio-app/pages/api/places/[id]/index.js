import dbConnect from "@/db/connect";
import Place from "@/db/models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(request.query);
  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Place.findById(id);
    response.status(200).json(place);
    return;
  }

  if (request.method === "PATCH") {
    const placeToUpdate = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(placeToUpdate);
  }

  if (request.method === "DELETE") {
    const placeToDelete = await Place.findByIdAndDelete(id);
    response.status(200).json(placeToDelete);
  }
}
