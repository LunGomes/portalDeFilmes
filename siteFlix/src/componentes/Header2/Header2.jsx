import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-screen h-full ">
      <header className=" pt-6 px-4 sm:px-10 md:px-16 lg:px-20 w-full z-30">
        <nav className="bg-gradient-to-r from-amarelo via-vanila to-amarelo shadow-lg rounded-3xl p-4 w-full flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 lg:text-3xl md:text-2xl text-xl font-extrabold text-vermelho hover:text-azul transition-colors duration-300"
          >
            <div className="flex items-center font-extrabold text-xl sm:text-2xl lg:text-3xl">
              <span className="text-vanila">Lun</span>
              <span className="text-azul">Flix</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 text-xl">
            <Link to="/" className="text-vermelho hover:text-azul font-bold">
              Menu
            </Link>
            <Link
              to="/filmes"
              className="text-vermelho hover:text-azul font-bold"
            >
              Filmes
            </Link>
            <Link
              to="/noticias"
              className="text-vermelho hover:text-azul font-bold"
            >
              Notícias
            </Link>
            <Link
              to="/contato"
              className="text-vermelho hover:text-azul font-bold"
            >
              Contato
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-vermelho hover:text-azul transition-colors duration-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-40 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gradient-to-b  from-amarelo/60 via-vanila/60 to-amarelo/20 backdrop-blur-[2px] shadow-lg rounded-l-3xl p-6 transform transition-transform duration-500 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-vermelho hover:text-azul transition-colors duration-300 focus:outline-none mb-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="space-y-4 text-xl font-bold">
          <Link
            to="/"
            className="block text-vermelho hover:text-azul"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/filmes"
            className="block text-vermelho hover:text-azul"
            onClick={() => setMenuOpen(false)}
          >
            Filmes
          </Link>
          <Link
            to="/noticias"
            className="block text-vermelho hover:text-azul"
            onClick={() => setMenuOpen(false)}
          >
            Notícias
          </Link>
          <Link
            to="/contato"
            className="block text-vermelho hover:text-azul"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </nav>
      </div>
    </div>
  );
}
