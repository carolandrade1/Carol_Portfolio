/* eslint-disable no-console */
async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((resposta) => {
      console.log('Tudo certo!', resposta);
    })
    .catch(() => {
      console.log('Alguma coisa deu errado!');
    });
}

const messageService = {
  async message({
    name, email, message,
  }) {
    return HttpClient('/api/sendgrid', {
      method: 'POST',
      body: {
        // Data Transfer Object (DTO)
        name,
        email,
        message,
      },
    });
  },
};

export default messageService;
