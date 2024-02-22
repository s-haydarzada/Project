import React, { useContext } from "react";
import CardItem from "../CardItem";
import { ProductContext } from "./../../../../../../Contexts/ProductContext";
import Slider from "react-slick"

const CardSection = () => {
  const { products } = useContext(ProductContext);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2 ,
    row:1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div>
          <Slider {...settings}>
            {products.map((prod) => (
              <CardItem key={prod._id} product={prod} />
            ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
