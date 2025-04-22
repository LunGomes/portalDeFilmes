import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BannerFilmes() {
  const [filmes, setFilmes] = useState([]);

  const apiKey = "d585b66222a73fca5fc14f7d1568b41f";
  const urlBase = "https://api.themoviedb.org/3/movie/";
  const urlImg = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(`${urlBase}popular?api_key=${apiKey}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        const tresFilmes = data.results.slice(4, 7);
        setFilmes(tresFilmes);
      })
      .catch((erro) => console.error("Erro ao buscar filmes:", erro));
  }, []);

  return (
    <Carousel
      transition={{ duration: 2 }}
      className="xl pb-2 z-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`block h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "bg-azul w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <button
          onClick={handlePrev}
          className="!absolute top-1/2 left-4 transform -translate-y-1/2 bg-vanila/40 hover:bg-vermelho/60 p-2 rounded-full z-40"
        >
          ‹
        </button>
      )}
      nextArrow={({ handleNext }) => (
        <button
          onClick={handleNext}
          className="!absolute top-1/2 right-4 transform -translate-y-1/2 bg-vanila/40 hover:bg-vermelho/60 p-2 rounded-full z-40"
        >
          ›
        </button>
      )}
    >
      {filmes.map((filme, index) => (
        <div key={index} className="relative h-[90vh] md:h-[100vh]">
          <img
            src={`${urlImg}${filme.backdrop_path}`}
            alt={filme.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-preto/100 via-preto/30 to-black/0 z-10 pointer-events-none" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-5 sm:px-20 gap-6 max-w-4xl">
            <h1 className="text-amarelo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-tight break-words whitespace-normal">
              {filme.title}
            </h1>

            <div className="flex items-center gap-4 flex-wrap z-30">
              <Link
                to={`${filme.id}`}
                className="bg-azul text-vanila font-bold px-16 py-4 rounded-md text-sm sm:text-base hover:bg-vermelho transition"
              >
                Assistir
              </Link>
              <button className="w-12 h-12 rounded-full bg-azul bg-opacity-70 text-vanila flex items-center justify-center text-xl hover:bg-vermelho hover:bg-opacity-70 transition">
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default BannerFilmes;
