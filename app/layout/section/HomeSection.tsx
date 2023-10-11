import { homeValue } from "@/app/constant/listData";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container__custom grid__custom">
        <div className="home__data">
          <h1 className="home__title">
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="home__description">
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>
          <div className="home__search">
            <i className="bx bxs-brain"></i>
            <span className="home__search-input">more about me?</span>
            <button className="button">Let`s goow</button>
          </div>

          <div className="home__value">
            {homeValue.map((item) => (
              <>
                <div key={item.value}>
                  <h1 className="home__value-number">
                    {item.value} <span>+</span>
                  </h1>
                  <span className="home__value-description">{item.detail}</span>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="home__images">
          <div className="home__orbe"></div>
          <div className="home__img">
            <img src="/img/home.jpg" alt="home" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
