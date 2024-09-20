export default function handleLog(request, response) {
  const { continent, country, region } = request.query;

  console.log(continent, country, region);
  response.end("Success");
}
