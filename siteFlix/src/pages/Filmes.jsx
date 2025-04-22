import { Link } from "react-router-dom";
import BannerFilmes from "../componentes/BannerFilmes/BannerFilmes";
import SliderPopulares from "../componentes/SliderPopulares/SliderPopulares";
import SliderCartaz from "../componentes/SliderCartaz/SliderCartaz";
import SliderTop from "../componentes/SliderTop/SliderTop";
import SliderRomance from "../componentes/SliderRomance/SliderRomance";
import SliderTerror from "../componentes/SliderTerror/SliderTerror";
import SliderComedia from "../componentes/SliderComedia/SliderComedia";

function Filmes() {
  return (
    <>
      <BannerFilmes />

      <SliderTop/>
      <SliderPopulares basePath="/filmes"/>
      <SliderCartaz/>

      <div className="p-10 sm:p-10 mx-10 mb-10 rounded-3xl bg-amarelo text-white flex items-center justify-center overflow-hidden shadow-2xl">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center text-center md:text-left z-10">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold uppercase leading-tight tracking-tight">
                Gostou do <span className="text-azul">LunFlix</span>?
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-white text-balance">
                Venha fazer parte do nosso projeto feito de cinéfilos para
                cinéfilos!
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contato"
                  className="rounded-md p-3 grow border text-center border-vermelho text-vermelho font-bold uppercase text-sm tracking-widest hover:bg-vermelho hover:text-vanila transition"
                >
                  Seja um voluntário
                </Link>
              </div>
            </div>

            <div className="relative flex items-center sm:m-10">
              <img
                src="https://static.vecteezy.com/system/resources/previews/056/097/114/non_2x/fluffy-popcorn-kernels-flying-in-the-air-on-a-free-png.png"
                alt="Balde de Pipoca"
                className="absolute -top-10 md:-top-20 -left0 sm:w-24 lg:w-[350px] animate-float-slow max-sm:hidden"
              />

              <div className="relative z-10 bg-azul p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-vermelho border-b-4 border-r-8">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white text-balance">
                  Se o cinema te chama, a gente também!
                </h2>
                <p className="mt-1 text-sm sm:text-base font-light text-vanila break-words text-pretty">
                  Venha colaborar, curtir e fazer parte desse projeto com a
                  gente.
                </p>
              </div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/056/097/114/non_2x/fluffy-popcorn-kernels-flying-in-the-air-on-a-free-png.png"
                alt="Pipocas voando"
                className="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-24 lg:w-[350px] animate-float max-sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <SliderRomance/>
      <SliderTerror/>
      <SliderComedia/>
    </>
  );
}

export default Filmes;
