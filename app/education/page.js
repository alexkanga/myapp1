import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata = {
  title: "MAWU | Services - Education",
  description: "MAWU",
};

export default function Home() {
  return (<>
  <div className="body-inner">
    <div id="top-bar" className="top-bar" />
    {/*/ Topbar end */}
     {/* Header start */}
     <Header />
      {/*/ Header end */}
    <div
      id="banner-area"
      className="banner-area"
      style={{ backgroundImage: "url(images/banner/banner1.jpg)" }}
    >
      <div className="banner-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading">
                <h1 className="banner-title">Services</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="#">Accueil</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Services</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Immobilier / Building Remodels
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Banner text end */}
    </div>
    {/* Banner area end */}
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar sidebar-left">
              <div className="widget">
                <h3>
                  {" "}
                  <a
                    className="btn btn-primary border margin-zero brown-bg-color-logo"
                    href="services.html"
                    style={{ width: "100%" }}
                  >
                    retourner aux services
                  </a>
                </h3>
                <h3 className="widget-title">Immobilier</h3>
                <ul className="nav service-menu">
                  <li>
                    <a href="service-single.html">Home Construction</a>
                  </li>
                  <li className="active">
                    <a href="service-single.html">Building Remodels</a>
                  </li>
                  <li>
                    <a href="#">Interior Design</a>
                  </li>
                  <li>
                    <a href="#">Exterior Design</a>
                  </li>
                  <li>
                    <a href="#">Renovation</a>
                  </li>
                  <li>
                    <a href="#">Safety Management</a>
                  </li>
                </ul>
              </div>
              {/* Widget end */}
            </div>
            {/* Sidebar end */}
          </div>
          {/* Sidebar Col end */}
          <div className="col-xl-8 col-lg-8">
            <div className="content-inner-page">
              <h2 className="column-title mrt-0">Building Remodels</h2>
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer adipiscing erat eget risus sollicitudin pellentesque
                    et non erat. Maecenas nibh dolor, malesuada et bibendum a,
                    sagittis accumsan ipsum. Pellentesque ultrices ultrices
                    sapien.
                  </p>
                  <p>
                    Nam scelerisque tristique dolor vitae tincidunt. Aenean quis
                    massa uada mi elementum elementum. , nec tincidunt nunc
                    posuere ut. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla commodo iaculis ligula, ac dapibus
                    quam ornare ut. Praesent ac hendrerit sem, et tempus sem
                  </p>
                </div>
                {/* col end */}
              </div>
              {/* 1st row end*/}
              <div className="gap-40" />
              <div id="page-slider" className="page-slider">
                <div className="item">
                  <Image
                    loading="lazy"
                    className="img-fluid"
                    src="/images/projects/project1.jpg"
                    alt="project-slider-image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="item">
                  <Image
                    loading="lazy"
                    className="img-fluid"
                    src="/images/projects/project2.jpg"
                    alt="project-slider-image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              {/* Page slider end */}
              {/* <div class="gap-40"></div>

    <div class="row">
      <div class="col-md-6">
        <h3 class="column-title-small">What Makes Us Different</h3>

        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
          moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat
          tincidunt nunc posuere.</p>
        <ul class="list-arrow">
          <li>Partnership Strategy tristique eleifend.</li>
          <li>Opporutnity to work with amet elit a.</li>
          <li>Saving Time to Deal with commodo iaculis.</li>
          <li>Leadership skills to manage erat volutpat.</li>
          <li>Cut cost without sacrificing dolore magna.</li>
          <li>Automate your business elis tristique.</li>
        </ul>
      </div>

      <div class="col-md-6 mt-5 mt-md-0">
        <h3 class="column-title-small">You Should Know</h3>

        <div class="accordion accordion-group accordion-classic" id="construction-accordion">
          <div class="card">
            <div class="card-header p-0 bg-transparent" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-block text-left" type="button" data-toggle="collapse"
                  data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Does the law require head protection on construction sites?
                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
              data-parent="#construction-accordion">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                wolf
                moon officia aute, non cupidata
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header p-0 bg-transparent" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What are the first aid requirements for sites?
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
              data-parent="#construction-accordion">
              <div class="card-body">
                Anemi nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo
                consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
                Excepteur sint occaecat cupid henderit in voluptate velit esse cillu oris nisi ut aliquip ex ea
                com
                matat.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header p-0 bg-transparent" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
                  data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What is an appointed person?
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
              data-parent="#construction-accordion">
              <div class="card-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and
                scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div> */}
              {/*2nd row end */}
              <div className="gap-40" />
              <div className="call-to-action classic">
                <div className="row align-items-center">
                  <div className="col-md-8 text-center text-md-left">
                    <div className="call-to-action-text">
                      <h3 className="action-title">
                        Vous avez des questions ?
                      </h3>
                    </div>
                  </div>
                  {/* Col end */}
                  <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                    <div className="call-to-action-btn">
                      <a className="btn btn-primary" href="#">
                        Ecrivez-nous
                      </a>
                    </div>
                  </div>
                  {/* col end */}
                </div>
                {/* row end */}
              </div>
              {/* Action end */}
            </div>
            {/* Content inner end */}
          </div>
          {/* Content Col end */}
        </div>
        {/* Main row end */}
      </div>
      {/* Conatiner end */}
    </section>
    {/* Main container end */}
    <Footer />
   
  </div>
  {/* Body inner end */}

  </>
  );
}
