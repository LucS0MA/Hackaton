import "../pages/Pages.css";
import endor from "../assets/endor.jpg";
import jakku from "../assets/jakku.jpg";
import mustafar from "../assets/mustafar.jpg";
import ahchto from "../assets/ahch-to.jpg";
import hoth from "../assets/hoth.jpg";
import tatouine from "../assets/tatouine.jpg";

const Characters = () => {
  return (
    <>
      <div className="Opening">
        Here is our minimalist Star Wars Posters, check it out !
      </div>
      <div className="Gallery">
        <div className="Card">
          <img src={endor} className="Images" alt="" />
        </div>
        <div className="Card">
          <img src={hoth} className="Images" alt="" />
        </div>
        <div className="Card">
          <img src={mustafar} className="Images" alt="" />
        </div>
        <div className="Card">
          <img src={tatouine} className="Images" alt="" />
        </div>
        <div className="Card">
          <img src={ahchto} className="Images" alt="" />
        </div>
        <div className="Card">
          <img src={jakku} className="Images" alt="" />
        </div>
      </div>
    </>
  );
};

export default Characters;
