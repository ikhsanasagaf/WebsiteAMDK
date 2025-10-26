import DataImage from "./data.js";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <h1 className="text-5xl/tight font-bold mb-6">Selamat Datang</h1>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px]" />
      </div>
    </>
  );
}

export default App;
