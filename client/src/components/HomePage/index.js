import house1 from "../../img/HouseCard1.png";
import house2 from "../../img/HouseCard2.png";
import house3 from "../../img/HouseCard3.png";
import house4 from "../../img/HouseCard4.png";

import remembrall from "../../img/My project (49).png";
import Rules from "../../components/Rules";
import "../HomePage/homepage.css";

const HomePage = () => {
  return (
    <div className="row align-items-center justify-items-center">
      <div className="col-lg-4 text-center">
        <img src={house1} className="homeCard py-2 px-2" width="200" />
        <img src={house2} className="homeCard  py-2 px-2" width="200" />
      </div>
      <div className="col-lg-4 text-center">
        <img src={remembrall} width="250" />
        <Rules />
      </div>
      <div className="col-lg-4 text-center">
        <img src={house3} className="homeCard  py-2 px-2" width="200" />
        <img src={house4} className="homeCard  py-2 px-2" width="200" />
      </div>
    </div>
  );
};

export default HomePage;
