export const products = [
  {
    id: 1,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.claroshop.com%2Fmedios-plazavip%2Fs2%2F10583%2F911065%2F5cbddcfc62d99-pesa2pelotas21-1600x1600.jpg&f=1&nofb=1',
    name: 'Cuerda de juguete',
    description: 'tu perro amará esta cuerda!',
    price: 350,
    category: 'juguetes',
  },
  {
    id: 2,
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmetrocolombiafood.vteximg.com.br%2Farquivos%2Fids%2F182931-1000-1000%2F7703616001531-1.jpg%3Fv%3D636712344825470000&f=1&nofb=1',
    name: 'Alimento para perros',
    description: '9 de cada 10 perros prefiere nuestro alimento!',
    price: 1800,
    category: 'alimentos',
  },
  {
    id: 3,
    img: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
    name: 'frazada',
    description: 'se viene el invierno, cuidá a tu amigo!',
    price: 750,
    category: 'juguetes',
  },
  {
    id: 4,
    img: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_4269.jpg',
    name: 'lila',
    description: 'perrita en adopción, muy tranquila y quiere a los nenes',
    price: 'adopcion',
    category: 'adopcion',
  },
  {
    id: 5,
    img: 'https://images.dog.ceo/breeds/terrier-irish/n02093991_2533.jpg',
    name: 'toto',
    description: 'tu nuevo mejor amigo, energico y le encanta jugar',
    price: 'adopcion',
    category: 'adopcion',
  },
];
export const getItems = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 500);
});
