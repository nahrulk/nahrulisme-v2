import { logosImage } from "@/app/constant/listData";
import Image from "next/image";

const LogoSection = () => {
  return (
    <section className="logos section bg-gradient-to-t ">
      <div className="logos__container container__custom grid__custom ">
        {logosImage.map((item) => (
          <>
            <div className="logos__img " key={item.alt}>
              <img src={item.images} alt={item.alt} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default LogoSection;
