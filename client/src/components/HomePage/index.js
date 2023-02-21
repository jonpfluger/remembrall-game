import homeCard from "../../img/HP Cards-12.png";
import remembrall from "../../img/remembrall.gif";
import Rules from "../../components/Rules";
import '../HomePage/homepage.css'

const HomePage = () => {
  return (
    <main id="homepage" className="flex-row justify-center px-3 py-4 p-lg-5">
      <div className="flex-row justify-center px-3 py-4 ">
        <img src={homeCard} className="homeCard" width="300" />
        <img src={remembrall} className="py-4 my-4" />
        <Rules />
      </div>
    </main>
  );
};

export default HomePage;
