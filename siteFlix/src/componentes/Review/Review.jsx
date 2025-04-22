const reviews = [
  {
    name: "Lucas Andrade",
    title: "Um Filme Minecraft",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    comment:
      "Para quem é fã do jogo, é uma aventura divertida e cheia de referências. As crianças vão adorar, mas talvez falte um pouco mais para agradar aos mais velhos.",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/4VtkIaj76TpQNfhDHXQDdT9uBN5.jpg",
  },
  {
    name: "José da Fonseca",
    title: "Novocaine: À Prova de Dor",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    comment:
      "Uma divertida combinação de ação, suspense e comédia, com cenas frenéticas e criativas. Vale a pipoca!",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/knIEw2jWOxrb6ugNPEoaiYI6p77.jpg",
  },
  {
    name: "Giovanna Bento",
    title: "Uma Aventura Lego",
    avatar: "https://randomuser.me/api/portraits/women/77.jpg",
    comment:
      "Uma animação maluca, divertida e surpreendente. Cheio de referências e que agrada tanto adultos quanto crianças.",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yFAP5ePJuKaiFNm0h3hi3P3p19E.jpg",
  },
  {
    name: "Gabrielly Camilo",
    title: "Mickey 17",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    comment:
      "Um sci-fi intrigante que te faz pensar. A premissa é original e as atuações são sólidas. Prepare-se para sair do cinema com muitas perguntas.",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/is1U9n0e9ofg50U1T7p2WZuIwiO.jpg",
  },
  {
    name: "Felipe Rocha",
    title: "Operação Vingança",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    comment:
      "Um suspense que te prende do começo ao fim. Cheio de reviravoltas e com um protagonista carismático. Recomendo para quem gosta de filmes com muita tensão.",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/bAQAGxxqwK8bcqEYLEo6cN7UNn6.jpg",
  },
  {
    name: "Mariana Ayumi",
    title: "G20",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    comment:
      "Muita ação e adrenalina! Se você procura um filme para desligar o cérebro e curtir sequências empolgantes, esse é o filme certo. As cenas de luta são bem coreografadas.",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wv6oWAleCJZUk5htrGg413t3GCy.jpg",
  },
  {
    name: "Renato Alves",
    title: "Ainda Estou Aqui",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    comment: "Um drama tocante sobre perda e recomeço. As atuações são muito boas e a história, apesar de triste, te deixa com uma mensagem de esperança.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yY0HDAGfu79cpOLQBgR3kgGZ7HS.jpg",
  },
  {
    name: "Isabella Hikari",
    title: "Rivais",
    avatar: "https://randomuser.me/api/portraits/women/59.jpg",
    comment: "Um filme eletrizante! A competição no tênis é intensa e o drama pessoal te prende do início ao fim. As atuações são incríveis e a trilha sonora é um show à parte.",
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/w1j3evHiwrGiQ6e9h1l9r66uo29.jpg",
  },
  {
    name: "Carolina Melo",
    title: "A Substância",
    avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    comment: "Um filme que te faz refletir sobre a beleza e a juventude. A premissa é bem original e a forma como a história se desenvolve é surpreendente e, por vezes, perturbadora.",
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/dBf7sO2NPpsYcEW7utocdDTKQGo.jpg",
  }
];

const Review = () => {
  return (
    <section id="testimonies" className="pt-10 pb-20">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-azul rounded-lg md:text-center text-cn bg-amarelo  hover:cursor-pointer hover:bg-opacity-90">
              Reviews da galera
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-vanila md:text-center md:text-5xl">
              A opinião dos fãs importa{" "}
              <span className="text-vermelho">(e muito)</span>
            </h1>
            <p className="text-xl text-vanila md:text-center md:text-2xl">
              Confira os comentários de quem já maratonou.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amarelo to-vermelho blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                <div className="relative p-4 space-y-4 leading-none rounded-lg ring-1 ring-gray-900/5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <img
                    src={review.poster}
                    alt={`Poster do filme ${review.title}`}
                    className="w-full sm:w-28 sm:min-h-[140px] sm:max-h-[200px] rounded-md object-cover shadow-md"
                  />

                  <div className="flex flex-col justify-between flex-1 h-full">
                    <div className="flex items-center space-x-4">
                      <img
                        src={review.avatar}
                        className="w-10 h-10 bg-center bg-cover rounded-full"
                        alt={review.name}
                      />
                      <div>
                        <h3 className="text-md font-semibold text-white">
                          {review.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{review.title}</p>
                      </div>
                    </div>
                    <p className="leading-snug mt-4 text-gray-300 text-base">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
