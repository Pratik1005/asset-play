import notFound from "../assets/404_page_not_found.svg";
import {MobileHeader, NavMenu} from "../components";

const PageNotFound = () => {
  return (
    <section className="app-ctn">
      <MobileHeader />
      <NavMenu />
      <div className="not-found-ctn">
        <img src={notFound} alt="page-not-found" className="img-responsive" />
      </div>
    </section>
  );
};

export {PageNotFound};
