import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { GetSingleProduct } from './../../../../../../services/products';
import { ProductContext } from './../../../../../../Contexts/ProductContext';
import { CartContext } from "../../../../../../Contexts/CardContext";
import { fadeIn } from './../../../../../../_variants';

const DetailContent = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToBasket } = useContext(CartContext);
  const [singleItem, setSingleItem] = useState([]);

  const product = products.find((item) => {
    return item._id === id;
  });

  const imgArray = product.images;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetSingleProduct(product._id);
        const singleData = res.data;
        console.log(singleData);
        if (singleData.images && singleData.images.length > 0) {
          setSingleItem(singleData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [product._id]);

  // if products is not found

  if (!singleItem) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Spin />
      </section>
    );
  }

  const { title, description, productPrice, _id } = singleItem;
  return (
    <div className="container mx-auto h-[400px] flex justify-between items-center mb-20">
        <div className="w-1/2">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
              style={{ height: "100%" }}
            >
              {imgArray.map((item) => (
                <SwiperSlide key={item.url}>
                  <img
                    src={item.url}
                    className="w-full h-[400px] custom_style_img object-center"
                    alt="product"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
        <div className="w-1/2 py-16 ml-10 text-center lg:text-left">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className="text-[26px] lg:text-4xl font-medium max-w-[450px] mx-auto lg:mx-0 mb-4">
              {title}
            </h1>
            <div className="text-xl lg:text-2xl font-medium mb-6 text-red-500">
              $ {productPrice}
            </div>
            <p className="mb-8 text-sm lg:text-base max-h-[150px] overflow-hidden">
              {description}
            </p>
            <button
              onClick={() => addToBasket(_id, 1, product)}
              className="bg-primary py-4 px-8 text-white rounded-md hover:bg-gray-300 hover:text-black"
            >
              Add to cart
            </button>
          </motion.div>
        </div>
      </div>
  );
}

export default DetailContent;
