import { Typography } from "@material-tailwind/react";

function Footer(){
    return(
        <footer className="bg-marrom flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center text-whitemd:justify-between">
      <Typography color="white" className="font-normal">
        &copy; 2024 LunFlix
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="/"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Menu
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="filmes"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Filmes
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="noticias"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Noticías
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="contato"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contato
          </Typography>
        </li>
      </ul>
    </footer>
    )
}
export default Footer;