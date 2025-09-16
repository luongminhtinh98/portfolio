
import { BiHomeAlt2, BiUser, BiCaretRightCircle, BiMessageRounded } from 'react-icons/bi';

function Nav() {
  return (
    <nav className="nav container grid">
      <div className="nav__menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link active-link">
              <BiHomeAlt2 />
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link">
              <BiUser />
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link">
              <BiCaretRightCircle />
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link">
              <BiMessageRounded />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;