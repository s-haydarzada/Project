import React, { useState, useEffect } from 'react';
import "./style.css";
import {  useDispatch } from 'react-redux';
import { postAdded, postRemoved } from '../../Redux/actions/index';
import { Row, Col, Button, Space, Skeleton } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useParams } from 'react-router';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import { MyHeader } from '../../components';


const ProductsDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);



  const dispatch = useDispatch();

  const addProduct = (product) => {
    // console.log(product);
    if (cartBtn === "Add to Cart") {
      setCartBtn("Remove from Cart");
    dispatch(postAdded(product));

    } else {
      setCartBtn("Add to Cart")
    dispatch(postRemoved(product));

    }
  }



  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      .catch((err)=>{
        console.log("Error",err);
      });
      setProduct(await response.json());
      setLoading(false);
    }
    getProduct()
  }, [id])

  const Loading = () => {
    return (
      <>
        <Row style={{ paddingTop: 30 }}>
          <Col span={10} style={{ paddingLeft: 50 }}>
            <Skeleton.Input style={{ height: 350, width: 400 }} />
          </Col>
          <Col span={14}>
            <p>
              <Skeleton.Input style={{ height: 40, width: 300 }} />
            </p>
            <p>
              <Skeleton.Input style={{ height: 75, width: 550 }} />
            </p>
            <p>
              <Skeleton.Input style={{ height: 25, width: 150 }} />
            </p>
            <p>
              <Skeleton.Input style={{ height: 50, width: 550 }} />
            </p>
            <p>
              <Skeleton.Input style={{ height: 50, width: 550 }} />
            </p>
            <p>
              <Skeleton.Input style={{ height: 40, width: 500 }} />
            </p>

          </Col>

        </Row>
      </>
    )
  }



  const ShowProductItem = () => {
    return (
      <div key={product?.id}>
        <Row style={{ padding: 50 }}>
          <Col span={10}>
            <img src={product?.image} className="image" alt={product?.title} height="350px" width="350px" />
          </Col>
          <Col span={14}>
            <h4 style={{ fontSize: 35, fontWeight: "bolder" }}>{product?.category}</h4>
            <h1 style={{ fontSize: 45, display: "inline-block" }}>{product?.title}</h1>
            <p>
              Rating {product?.rating && product?.rating.rate} <StarFilled />
            </p>
            <h3 style={{ fontWeight: "bolder", fontSize: 35 }}> $ {product?.price}</h3>
            <p>{product?.description}</p>
            <br/>
            <Space direction="vertical"
              style={{
                width: '100%',
              }}>
              <Button type='primary' onClick={()=>addProduct(product)} block>{cartBtn}</Button>

            </Space>
          </Col>
        </Row>
      </div>
    )
  }
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <MyHeader />
      </Header>

      <Content style={{ marginTop: 10 }}>
        <>
          <div>
            <div className="container">
              <div className="row">
                {loading ? <Loading /> : <ShowProductItem />}
              </div>
            </div>
          </div>
        </>
      </Content>
    </Layout>




  )
}


export default ProductsDetail;