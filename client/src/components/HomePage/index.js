import house1 from "../../img/HouseCard1.png"
import house2 from "../../img/HouseCard2.png"
import house3 from "../../img/HouseCard3.png"
import house4 from "../../img/HouseCard4.png"

import remembrall from "../../img/My project (49).png";
import Rules from "../../components/Rules";
import '../HomePage/homepage.css'

const HomePage = () => {
  return (
    <main id="homepage" className="flex-row d-flex justify-content-center ">
      <div className="flex-row justify-center align-items-center">
      <div className="text-center justify-center px-5">
        <img src={house1} className="homeCard position-relative py-2" width="200" />
        <img src={house2} className="homeCard position-relative py-2" width="200" />
        </div>
        <div className="text-center justify-center px-5">
        <img src={remembrall} className=" position-relative" width="250" />
        <Rules />
        </div>
        <div className="text-center justify-center px-5">
        <img src={house3} className="homeCard position-relative py-2" width="200" />
        <img src={house4} className="homeCard position-relative py-2" width="200" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
