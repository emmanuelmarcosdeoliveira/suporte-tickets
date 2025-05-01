export function update({ request, response, database }) {
  const { id } = request.params;
  const { description, equipment } = request.body;

  database.update("tickets", id, {
    description,
    equipment,
    update_at: new Date(),
  });

  response.writeHead(200).end();
}
