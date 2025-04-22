import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header2 from "../componentes/Header2/Header2";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: linear-gradient(
      90deg,
      rgba(224, 159, 62, 1) 0%,
      rgba(158, 42, 43, 1) 100%
    );
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(18deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #212121;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: linear-gradient(
      90deg,
      rgba(158, 42, 43, 1) 0%,
      rgba(51, 92, 103, 1) 100%
    );
    transform: scale(1.05);
  }

  .button:hover .button__icon {
    color: #fff;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }

  .button:active {
    transform: scale(0.95);
  }
`;

export default function PaginaFilme() {

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); 
  };

  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [diretor, setDiretor] = useState("");
  const apiKey = "api_key=d585b66222a73fca5fc14f7d1568b41f";
  const urlBase = "https://api.themoviedb.org/3/movie/";
  const urlImg = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    (async () => {
      try {
        const m = await fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`).then(
          (r) => r.json()
        );
        setFilme(m);
        const credits = await fetch(
          `${urlBase}${id}/credits?${apiKey}&language=pt-BR`
        ).then((r) => r.json());
        const d = credits.crew.find((c) => c.job === "Director");
        setDiretor(d?.name || "N/A");
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  if (!filme) return <div className="text-center p-20">Carregando...</div>;

  const formatarData = (d) => d.split("-").reverse().join("/");

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95)), url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
      }}
    >
      <Header2 />

      <div className="flex justify-center items-start py-8 px-4 sm:px-6 lg:px-20">
        <div className="w-full mx-4 sm:mx-6 md:mx-12 lg:mx-20 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
          <div className="md:w-2/6 flex items-center justify-center p-2">
            <img
              src={`${urlImg}${filme.poster_path}`}
              alt={filme.title}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="md:w-4/6 p-6 md:p-8 flex flex-col justify-between text-white">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
                {filme.title}
              </h1>
              <p className="text-sm sm:text-base">
                <span className="font-semibold text-marrom">Diretor:</span>{" "}
                {diretor}
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold text-marrom">Lançamento:</span>{" "}
                {formatarData(filme.release_date)}
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold text-marrom">Sinopse:</span>{" "}
                {filme.overview}
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-semibold text-marrom">Nota:</span>{" "}
                {filme.vote_average.toFixed(1)} / 10
              </p>
            </div>

            <Link className="mt-6 self-end">
              <StyledWrapper>
                <button onClick={handleVoltar} className="button">
                  <p className="button__text">
                    {["V", "O", "L", "T", "A", "R", " ", " ", " ", " ", "V", "O", "L", "T", "A", "R"].map((letra, i) => (
                      <span key={i} style={{ "--index": `${i}` }}>
                        {letra}
                      </span>
                    ))}
                  </p>
                  <div className="button__circle">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon"
                      width={14}
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon button__icon--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
              </StyledWrapper>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
