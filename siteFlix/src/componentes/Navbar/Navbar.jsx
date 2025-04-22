import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 text-vermelho text-xl font-bold">
        <li className="hover:text-azul transition-colors duration-600 ">
          <Link to="/">Menu</Link>
        </li>
        <li className="hover:text-azul transition-colors duration-600 ">
          <Link to="/filmes"> Filmes</Link>
        </li>
        <li className="hover:text-azul transition-colors duration-600 ">
          <Link to="/noticias">Noticías</Link>
        </li>
        <li className="hover:text-azul transition-colors duration-600 ">
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;