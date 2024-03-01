import Link from "next/link";
import { useSession , signOut } from "next-auth/react"

export default function Header ({menu}) {
  const { data: session } = useSession()
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
                        <Link href={item.slug}>{ item.name }</Link>
                      </li>
                      ))
                    }
                  </ul>
                    <div className="classynav">
                        <ul>
                          {
                            !session && <li>
                            <Link href="/login">Login</Link>
                            </li>
                          }
                          
                          {
                            session && <>
                              <li className="mr-3">
                                <i className="fa fa-user"/>
                              </li>
                              <button className="btn btn-danger" onClick={ () => signOut() }>Logout</button>
                            </>
                          }
                          
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