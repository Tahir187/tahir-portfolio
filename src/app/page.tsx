import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <div className="absolute"></div>
      </div>

      <div className="">
        <div className="overflow-hidden">
          <div className="relative h-screen">
            <img
            className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] image"
              width="4377"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt="bg-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
