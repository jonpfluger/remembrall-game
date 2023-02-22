import homeCard from "../../img/cardBack.png";
import remembrall from "../../img/My project (49).png";
import Rules from "../../components/Rules";
import '../HomePage/homepage.css'

const HomePage = () => {
  return (
    <main id="homepage" className="flex-row d-flex justify-content-center ">
      <div className="flex-row justify-center align-items-center">
        <img src={homeCard} className="homeCard position-relative" width="200" />
        <div className="justify-center px-5">
        <img src={remembrall} className=" position-relative" width="250" />
        <Rules />
        </div>
        <img src={homeCard} className="homeCard position-relative" width="200" />
      </div>
    </main>
  );
};

export default HomePage;
