import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from 'react-redux'

const Cart = (props) => {
    console.log(props.dataList)
    return (
        <div>
            <h2>
                <Link to="/product">Products</Link> <span>Sepetim</span>
            </h2>

            <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>

            {props.postAdded?.basket.map(item => (
                <div className="book" key={item.id}>
                    <img
                        src={item.image}
                        alt={item.title}
                    />
                    <div>
                        <h4>{item.title}</h4>
                        <p>Fiyat: &#8378;{item.price}</p>
                        <p>Toplam: &#8378;{item.price}</p>
                        <button>-</button>
                        <button>Sepetten Çıkar</button>
                        <button>+</button>
                    </div>
                </div>
            ))}

            {/* <div className="book">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg"
          alt="Simyacı"
        />
        <div>
          <h4>Simyaci</h4>
          <p>Yazar: Paulo Coelho</p>
          <p>Fiyat: &#8378;19.99</p>
          <p>Toplam: &#8378;19.99</p>
          <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
          <button>-</button>
          <button>Sepetten Çıkar</button>
          <button>+</button>
        </div>
      </div> */}

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dataList: state.dataList
    }
}

export default connect(mapStateToProps)(Cart);
