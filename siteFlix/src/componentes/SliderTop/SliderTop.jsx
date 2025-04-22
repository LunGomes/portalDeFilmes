import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 6px 12px #9e2a2b, -6px -6px 12px #e09f3e;
    margin: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 12px 20px rgba(51, 92, 103, 1.25);
    }

    &:hover .blob {
      background: linear-gradient(
        90deg,
        rgba(224, 159, 62, 1) 0%,
        rgba(158, 42, 43, 1) 100%
      );
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: #335c67;
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;

    img {
      transition: transform 0.4s ease;
    }
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #335c67;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
    transition: background 0.4s ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }

  .slider-container {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .slider-track {
    display: flex;
    gap: 2rem;
    animation: scroll 40s linear infinite;
    width: max-content;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .gradient-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10%;
    pointer-events: none;
    z-index: 10;
  }

  .gradient-left {
    left: 0;
    background: linear-gradient(to right, #0b0c10, transparent);
  }

  .gradient-right {
    right: 0;
    background: linear-gradient(to left, #0b0c10, transparent);
  }
`;

const formatarDataBrasileira = (dataIso) => {
  const [ano, mes, dia] = dataIso.split("-");
  return `${dia}/${mes}/${ano}`;
};

const SliderTop = () => {
  const [filmes, setFilmes] = useState([]);
  const apiKey = "api_key=d585b66222a73fca5fc14f7d1568b41f";
  const urlBase = "https://api.themoviedb.org/3/movie/";
  const urlImg = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    fetch(`${urlBase}top_rated?${apiKey}&language=pt-BR&page=1`)
      .then((response) => response.json())
      .then((response) => setFilmes([...response.results, ...response.results])) // duplicando para loop contínuo
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <section className="mx-20 my-10">
      <h2 className="text-2xl font-bold text-vanila mb-6">
        Os melhores de todos os tempos
      </h2>
      <StyledWrapper className="">
        <div className="slider-container w-[80%] mx-auto relative">
          <div className="gradient-mask gradient-left" />
          <div className="gradient-mask gradient-right" />
          <div className="slider-track">
            {filmes.map((filme) => (
              <div className="mt-6" key={filme.id}>
                <Link to={`${filme.id}`}>
                  <StyledWrapper>
                    <div className="card m-6">
                      <div className="blob" />

                      <div className="bg flex flex-col items-ke justify-between">
                        <img
                          src={`${urlImg}${filme.poster_path}`}
                          alt={filme.title}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </StyledWrapper>
                </Link>

                <div className="mx-4 mt-4 text-vanila rounded-xl w-[180px] break-words shadow-sm text-left">
                  <h2 className="text-base font-semibold">{filme.title}</h2>
                  <p className="text-sm text-amarelo">
                    {formatarDataBrasileira(filme.release_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyledWrapper>
    </section>
  );
};

export default SliderTop;
