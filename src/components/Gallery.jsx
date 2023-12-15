import endor from "../assets/endor.jpg";
import jakku from "../assets/jakku.jpg";
import mustafar from "../assets/mustafar.jpg";
import ahchto from "../assets/ahch-to.jpg";
import hoth from "../assets/hoth.jpg";
import tatouine from "../assets/tatouine.jpg";

const Gallery = () => {
  return (
    <>
      <div className="Gallery">
        <div className="Card">
          <img src={endor} className="Images one" alt="" />
        </div>
        <div className="Card">
          <img src={hoth} className="Images two" alt="" />
        </div>
        <div className="Card">
          <img src={mustafar} className="Images three" alt="" />
        </div>
        <div className="Card">
          <img src={tatouine} className="Images four" alt="" />
        </div>
        <div className="Card">
          <img src={ahchto} className="Images five" alt="" />
        </div>
        <div className="Card">
          <img src={jakku} className="Images six" alt="" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
