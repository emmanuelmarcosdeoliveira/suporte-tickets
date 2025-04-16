export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Ticket criado com sucesso!");
    },
  },
];
