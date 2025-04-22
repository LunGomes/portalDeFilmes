import Header2 from "../componentes/Header2/Header2";

const noticias = [
  {
    image: "../../public/poster_Jurassic.jpg",
    title: "Jurassic World Rebirth",
    description:
      "Nova era jurássica com Scarlett Johansson e Mahershala Ali. Estreia em 3 de julho de 2025 no Brasil.",
    author: "Universal Pictures",
    category1: "Ação",
    category2: "Ficção Científica",
  },
  {
    image:
      "https://disneyplusbrasil.com.br/wp-content/uploads/2024/08/Avatar-3-Fogo-e-Cinza.webp",
    title: "Avatar: Fogo e Cinzas",
    description:
      "Terceiro capítulo da saga de James Cameron chega aos cinemas em 18 de dezembro de 2025.",
    author: "20th Century Studios",
    category1: "Aventura",
    category2: "Ficção Científica",
  },
  {
    image:
      "https://cdn.prod.website-files.com/664f020bc060e868141eef57/67e4380985e9ddc7a3f08198_Branca%20de%20Neve%20Horizontal.webp",
    title: "Branca de Neve",
    description:
      "Live-action da Disney com Rachel Zegler e Gal Gadot. Lançado em março de 2025.",
    author: "Walt Disney Studios",
    category1: "Fantasia",
    category2: "Musical",
  },
  {
    image:
      "https://assets.gamearena.gg/wp-content/uploads/2024/11/22163557/10102049036005.webp",
    title: "Lilo & Stitch (Live-action)",
    description: "Remake do clássico animado estreia em 23 de maio de 2025.",
    author: "Walt Disney Studios",
    category1: "Família",
    category2: "Comédia",
  },
  {
    image:
      "https://media.vanityfair.com/photos/680269cbfc1144e9490905df/16:9/w_1280,c_limit/2210814515",
    title: "Starfighter (Star Wars)",
    description:
      "Ryan Gosling protagoniza nova história no universo Star Wars. Estreia prevista para 28 de maio de 2027.",
    author: "Lucasfilm",
    category1: "Ficção Científica",
    category2: "Aventura",
  },
  {
    image:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/poster-quarteto-fantastico.png",
    title: "O Quarteto Fantástico",
    description:
      "Pedro Pascal lidera o reboot da equipe da Marvel. Estreia em 25 de julho de 2025.",
    author: "Marvel Studios",
    category1: "Super-herói",
    category2: "Ação",
  },
];

function Noticias() {
  return (
    <>
      <Header2 />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((card, index) => (
            <div
              key={index}
              className="rounded overflow-hidden flex flex-col shadow-lg group transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  className="w-full h-48 object-cover rounded transition-transform duration-300 group-hover:scale-110"
                  src={card.image}
                  alt={card.title}
                />
              </a>
              <div className="relative -mt-10 px-5 pt-4 pb-6 bg-amarelo mx-4 rounded-lg shadow-md transition-colors duration-300">
                <a
                  href="#"
                  className="font-semibold text-base inline-block text-white hover:text-azul transition duration-300 mb-2"
                >
                  {card.title}
                </a>
                <p className="text-white text-xs">{card.description}</p>
                <p className="mt-3 text-vermelho text-xs">
                  By{" "}
                  <a href="#" className="text-vanila hover:underline">
                    {card.author}
                  </a>{" "}
                  | in{" "}
                  <a href="#" className="text-vanila hover:underline">
                    {card.category1}
                  </a>
                  ,{" "}
                  <a href="#" className="text-vanila hover:underline">
                    {card.category2}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Noticias;
