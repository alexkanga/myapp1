import Link from "next/link";
export default function Header() {
  return (
  <>
   <header id="header" className="header-one">
        <div className="bg-white">
          <div className="container">
            <div className="logo-area">
              <div className="row align-items-center">
                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                  <Link className="d-block" href="/">
                    <img loading="lazy" src="images/logo.png" alt="MAWU" />
                  </Link>
                </div>
                {/* logo end */}
                <div className="col-lg-9 header-right">
                  <ul className="top-info-box">
                    <li>
                      <div className="info-box">
                        <div className="info-box-content">
                          <p className="info-box-title">Appelez-nous</p>
                          <p className="info-box-subtitle">(+225) 015-184-5867</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="info-box">
                        <div className="info-box-content">
                          <p className="info-box-title">Ecrivez-nous</p>
                          <p className="info-box-subtitle">allo.mawu@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <li className="last">
                      <div className="info-box last">
                        <div className="info-box-content">
                          {/* <p class="info-box-title">Rejoignez-nous sur</p> */}
                          <p className="info-box-subtitle" />
                          <div className="top-social text-center text-md-right">
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  title="Facebook"
                                  target="_blank"
                                  href="https://www.facebook.com/profile.php?id=61555593353534"
                                >
                                  <span className="social-icon">
                                    <i className="fab fa-facebook-f" />
                                  </span>
                                </a>
                                <a
                                  title="Linkedin"
                                  target="_blank"
                                  href="https://github.com/themefisher.com"
                                >
                                  <span className="social-icon">
                                    <i className="fab fa-linkedin-in" />
                                  </span>
                                </a>
                                <a
                                  title="Instagram"
                                  target="_blank"
                                  href="https://instagram.com/themefisher.com"
                                >
                                  <span className="social-icon">
                                    <i className="fab fa-instagram" />
                                  </span>
                                </a>
                                <a
                                  title="Twitter"
                                  target="_blank"
                                  href="https://twitter.com/themefisher.com"
                                >
                                  <span className="social-icon">
                                    <i className="fab fa-twitter" />
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <p />
                        </div>
                      </div>
                    </li>
                    <li className="header-get-a-quote">
                      <Link className="btn btn-primary" href="contact">
                        En savoir plus
                      </Link>
                    </li>
                  </ul>
                  {/* Ul end */}
                </div>
                {/* header right end */}
              </div>
              {/* logo area end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div id="navbar-collapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" href="/">
                          Accueil
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Qui sommes-nous ? <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <Link href="directeur">Mot du Directeur</Link>
                          </li>
                          <li>
                            <Link href="presentation">Présentation</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Services <i className="fa fa-angle-down" />
                        </Link>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <Link href="immobilier">Immobilier</Link>
                          </li>
                          <li>
                            <Link href="imprimerie">Imprimerie</Link>
                          </li>
                          <li>
                            <Link href="transport">Transport</Link>
                          </li>
                          <li>
                            <Link href="education">Education Scolaire</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="galerie-photos">
                          Réalisations
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/*/ Col end */}
            </div>
            {/*/ Row end */}
          </div>
          {/*/ Container end */}
        </div>
        {/*/ Navigation end */}
      </header>
  </>
  );
}
