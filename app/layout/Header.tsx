import { navigation } from "@/app/constant/listData";

const Header = () => {
  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container__custom sm:flex-wrap">
          <a href="#" className="nav__logo">
            Nahrul K <i className="bx bxs-terminal"></i>
          </a>

          <div className="nav__menu h-auto w-full">
            <ul className="nav__list flex flex-wrap">
              {navigation.map((item) => (
                <li className="nav__item" key={item.name}>
                  <a href={item.href} className="nav__link">
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#" className="button nav__button">
            CONTACT ME
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
