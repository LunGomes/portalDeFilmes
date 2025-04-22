import { Link } from "react-router-dom";

function Meio() {
  return (
    <>
      <div className="mx-10 sm:px-2 sm:py-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-amarelo px-6 pt-16 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-6xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Partiu maratonar? Descubra os filmes que tão bombando!
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-white">
              Explore os lançamentos e os clássicos que tão dominando as telas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/filmes"
                className="bg-vermelho text-vanila font-bold px-3.5 py-4 rounded-md text-sm sm:text-base hover:bg-azul transition"
              >
                Ir para a página de filmes <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src="https://images.pexels.com/photos/7991272/pexels-photo-7991272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md ring-1 ring-vermelho"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Meio;
