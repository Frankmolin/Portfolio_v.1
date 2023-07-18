import Maleta from "./svgs/Maleta"
import Info from "./svgs/Info"
import Star from "./svgs/Star"
import Correo from "./svgs/Correo"
import { Link } from "react-scroll"

type Props = {
  children: string | JSX.Element | JSX.Element[]
  to: string
}


function SideBar() {
  const linkStyle = `
    transition
    cursor-pointer
    text-dark
    group-[.scale-75]:scale-75
    group-[.text-primary]:text-primary
  `;

  return (
    <aside className="hidden sm:grid h-screen items-center fixed z-20">
      <nav className="bg-light dark:bg-secondary rounded-r-lg">
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <LinkTab to="about">
              <Info className={linkStyle} />
            </LinkTab>
          </li>
          <li>
            <LinkTab to="portfolio">
              <Maleta className={linkStyle} />
            </LinkTab>
          </li>
          <li>
            <LinkTab to="skills">
              <Star className={linkStyle} />
            </LinkTab>
          </li>
          <li>
            <LinkTab to="contact">
              <Correo className={linkStyle} />
            </LinkTab>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

function LinkTab(to:Props) {
  return (
    <Link
      activeClass="text-primary scale-75"
      to={to.to}
      spy={true}
      smooth={true}
      duration={500}
      className="group"
    >
      {to.children}
    </Link>
  );
}

export default SideBar