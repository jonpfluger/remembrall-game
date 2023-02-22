import homeCard from "../../img/cardBack.png";
import remembrall from "../../img/croppedGif.gif";
import Rules from "../../components/Rules";
import '../HomePage/homepage.css'

const HomePage = () => {
  return (
    <main id="homepage" className="flex-row px-3 py-4 p-lg-5 d-flex justify-content-center ">
      <div className="flex-row justify-center align-items-center px-3 py-4 ">
        <img src={homeCard} className="homeCard position-relative" width="300" />
        <img src={remembrall} className="py-4 my-4 " />
        <Rules />
      </div>
    </main>
  );
};

export default HomePage;
