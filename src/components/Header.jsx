import Link from "next/link";

export default function Header ({menu}) {
    return (
      <header className="header-area">
      <div className="newsbox-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container-fluid">
            <nav className="classy-navbar justify-content-between" id="newsboxNav">
              <a href="index.html" className="nav-brand">
                <img src="/logo.svg" alt="" />
              </a>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                <div className="classynav">
                  <ul>
                    {
                      menu.data.map(item => (
                      <li key={item.id}>
                        <a href="#">{ item.name }</a>
                      </li>
                      ))
                    }
                  </ul>
                    <div className="classynav">
                        <ul>
                          <li>
                          <Link href="/login">Login</Link>
                          </li>
                        </ul>
                    </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
      );
}