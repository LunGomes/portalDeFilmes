import Header2 from "../componentes/Header2/Header2";
import noticiasDados from "../../json/noticias.json";

function Noticias() {
  return (
    <>
      <Header2 />
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasDados.map((card, index) => (
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