export default function Header () {
    return (
      <header className="header-area">
      {/* Navbar Area */}
      <div className="newsbox-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container-fluid">
            {/* Menu */}
            <nav className="classy-navbar justify-content-between" id="newsboxNav">
              {/* Nav brand */}
              <a href="index.html" className="nav-brand">
                <img src="/logo.svg" alt="" />
              </a>
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              {/* Menu */}
              <div className="classy-menu">
                {/* Close Button */}
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Nav Start */}
                <div className="classynav">
                  <ul>
                    <li>
                      <a href="#">International</a>
                    </li>
                    <li>
                      <a href="#">Local News</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="catagory.html">Catagory</a>
                        </li>
                        <li>
                          <a href="single-post.html">Single Post</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="elements.html">Elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sport</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Archery</a>
                        </li>
                        <li>
                          <a href="#">Badminton</a>
                        </li>
                        <li>
                          <a href="#">Baseball</a>
                        </li>
                        <li>
                          <a href="#">Boxing</a>
                        </li>
                        <li>
                          <a href="#">Climbing</a>
                        </li>
                        <li>
                          <a href="#">Cricket</a>
                        </li>
                        <li>
                          <a href="#">Football</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
      );
}