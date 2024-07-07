import Link from "next/link";
import Image from "next/image";
export default function Footer(){
    return (
        <>
          {/*/ subscribe end */}
      <footer id="footer" className="footer bg-overlay">
        <div className="footer-main">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-widget footer-about">
                <h3 className="widget-title">A propos de nous</h3>
                <Image
                  loading="lazy"
                  className="footer-logo"
                  src="/images/footer-logo.png"
                  alt="Footer Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }} 
                />
                <p>
                  Location &amp; vente de tous types de véhicules et d&apos;engins -
                  Gestion locative - Plan - Suivi de chantier - Gros &amp; seconde
                  oeuvre - Expertise de travaux - Décapage - Gestion de biens -
                  Permis de construire - Devis quantitatif &amp; estimatif -
                  Événementiel - Soutien scolaire
                </p>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a
                        href="https://facebook.com/themefisher"
                         target="_blank"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/themefisher"
                         target="_blank"
                        aria-label="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/themefisher"
                         target="_blank"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/themefisher"
                        target="_blank"
                        aria-label="Github"
                      >
                        <i className="fab fa-github" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer social end */}
              </div>
              {/* Col end */}
              <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                <h3 className="widget-title">Nos Horaires</h3>
                <div className="working-hours">
                  Nous travaillons 7 jours sur 7, tous les jours sauf jours
                  fériés. Contactez-nous en cas d&rsquo;urgence, avec notre Hotline et
                  notre formulaire de contact.
                  <br />
                  <br /> Lundi - Vendredi:{" "}
                  <span className="text-right">08:00 - 17:00 </span>
                  <br /> Samedi: <span className="text-right">09:00 - 13:00</span>
                  <br /> Dimanche and jours fériés:{" "}
                  <span className="text-right">09:00 - 12:00</span>
                </div>
              </div>
              {/* Col end */}
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                <h3 className="widget-title">Nos Services</h3>
                <ul className="list-arrow">
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
              </div>
              {/* Col end */}
            </div>
            {/* Row end */}
          </div>
          {/* Container end */}
        </div>
        {/* Footer main end */}
        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="copyright-info text-center">
                  <span>Copyright &copy; 2024</span>
                </div>
              </div>
              <div className="col-md-12">
                <div className="footer-menu text-center">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="home.html">Accueil</a>
                    </li>
                    <li>
                      <Link href="directeur">Qui sommes-nous ?</Link>
                    </li>
                    <li>
                      <Link href="immobilier">Services</Link>
                    </li>
                    <li>
                      <Link href="galerie-photos">Réalisations</Link>
                    </li>
                    <li>
                      <Link href="contact">Contactez-nous</Link>
                    </li>
                  </ul>
                  <div className="copyright-info text-center">
                    <span style={{ display: "none" }}>
                      , Designed &amp; Developed by{" "}
                      <a href="#">Alexandre Kanga</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Row end */}
            <div
              id="back-to-top"
              data-spy="affix"
              data-offset-top={10}
              className="back-to-top position-fixed"
            >
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up" />
              </button>
            </div>
          </div>
          {/* Container end */}
        </div>
        {/* Copyright end */}
      </footer>
        </>
    )
}