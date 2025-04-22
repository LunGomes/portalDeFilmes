import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative rounded-t-3xl bg-gradient-to-r from-amarelo via-vanila to-amarelo pt-6 pb-6 px-10 tracking-wide">
      <div className="relative z-20 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6">
          <div>
            <Link to="/">
              <span className="text-4xl text-vermelho hover:text-azul transition-colors duration-600 font-extrabold">
                LunFlix
              </span>
            </Link>
          </div>

          <ul className="flex items-center justify-center font-bold flex-wrap gap-y-2 md:justify-end space-x-6">
            <li>
              <Link
                to="/"
                className="text-vermelho hover:underline hover:text-azul transition-colors duration-600 text-base"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/filmes"
                className="text-vermelho hover:underline hover:text-azul transition-colors duration-600 text-base"
              >
                Filmes
              </Link>
            </li>
            <li>
              <Link
                to="/noticias"
                className="text-vermelho hover:underline hover:text-azul transition-colors duration-600 text-base"
              >
                Notícias
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="text-vermelho hover:underline hover:text-azul transition-colors duration-600 text-base"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-azul" />

        <div className="flex flex-wrap items-center md:justify-evenly max-md:flex-col gap-6">
          <p className="text-center cursor-pointer text-vermelho hover:text-azul transition-colors duration-600 text-base font-bold hover:underline">
            Made by: Luana Gomes da Silva
          </p>

          <div className="lg:flex lg:items-center">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://github.com/LunGomes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-vermelho hover:fill-azul transition-colors duration-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.55-3.88-1.55a3.06 3.06 0 0 0-1.28-1.68c-1.05-.72.08-.7.08-.7a2.43 2.43 0 0 1 1.78 1.2 2.46 2.46 0 0 0 3.36.96c.05-.91.37-1.53.67-1.88-2.56-.29-5.26-1.28-5.26-5.7a4.45 4.45 0 0 1 1.18-3.08 4.13 4.13 0 0 1 .11-3.03s.97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.52.23 2.65.11 3.03a4.45 4.45 0 0 1 1.18 3.08c0 4.43-2.7 5.4-5.27 5.69.38.33.71.97.71 1.96v2.9c0 .31.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luanaGSil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-vermelho hover:fill-azul transition-colors duration-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
