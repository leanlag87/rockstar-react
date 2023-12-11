import React from "react";
import GALLERY_1 from "../img/gallery-1.png";
import GALLERY_2 from "../img/gallery-2.png";
import GALLERY_3 from "../img/gallery-3.png";
import GALLERY_4 from "../img/gallery-4.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__container-title">
        <h3 className="gallery__title">Featured Games</h3>
      </div>
      <div className="gallery__container-img">
        <article className="gallery__gallery-img">
          <img className="gallery__img" src={GALLERY_1} alt="gallery-img-1" />
        </article>
        <article className="gallery__gallery-img">
          <img className="gallery__img" src={GALLERY_2} alt="gallery-img-2" />
        </article>
        <article className="gallery__gallery-img">
          <img className="gallery__img" src={GALLERY_3} alt="gallery-img-3" />
        </article>
        <article className="gallery__gallery-img">
          <img className="gallery__img" src={GALLERY_4} alt="gallery-img-4" />
        </article>
      </div>
      <div className="gallery__container-btn">
        <button className="gallery__btn">View More</button>
      </div>
    </section>
  );
};

export default Gallery;
