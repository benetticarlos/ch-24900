const products = [
  {
    id: 1,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.claroshop.com%2Fmedios-plazavip%2Fs2%2F10583%2F911065%2F5cbddcfc62d99-pesa2pelotas21-1600x1600.jpg&f=1&nofb=1',
    name: 'Cuerda de juguete',
    price: 350,
  },
  {
    id: 2,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmetrocolombiafood.vteximg.com.br%2Farquivos%2Fids%2F182931-1000-1000%2F7703616001531-1.jpg%3Fv%3D636712344825470000&f=1&nofb=1',
    name: 'Alimento para perros',
    price: 1800,
  },
  {
    id: 3,
    img: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
    name: 'frazada',
    price: 750,
  },
];
export const getItems = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2500);
});
