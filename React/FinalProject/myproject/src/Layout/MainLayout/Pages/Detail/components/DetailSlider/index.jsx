import React, { useContext } from 'react'
import Slider from "react-slick";
import { ProductContext } from '../../../../../../Contexts/ProductContext';
import CardItem from '../../../Home/components/CardItem';
import BestsellerHeader from '../../../Home/components/BestsellerHeader';


const DetailSlider = () => {
    const { products } = useContext(ProductContext);
    console.log(products)

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
      };
  return (
    <div className='w-full container'>
         <BestsellerHeader
              title="Related Product"
              subTitle="Most Trendy 2018 Clother"
            />
        <Slider {...settings}>
            {products.map((prod) => (
              <CardItem key={prod._id} product={prod} />
            ))}
            </Slider>
      
    </div>
  )
}

export default DetailSlider
