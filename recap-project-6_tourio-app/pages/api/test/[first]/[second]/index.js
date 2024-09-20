export default function handleText(request, response) {
  const { first, second } = request.query;
  console.log(first, second);
  response.json(request.query);
}
