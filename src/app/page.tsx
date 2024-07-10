import Image from "next/image";
import Container from "./container/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <main>
      <div className="relative z-50">
        <div className="absolute">
        <Navbar />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="relative h-screen">
          <img
            src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
            width='4377'
            alt="background image"
            className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
          />
        </div>
      </div>
    </main>
  );
}
