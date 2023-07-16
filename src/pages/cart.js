import Seo from "../../components/Seo";
import { useEffect, useState } from "react";

export default function Cart() {
  var [products, setProducts] = useState([]);
  var [allSelected, setAllSelected] = useState(true);

  var results = [
    {
      id: 1,
      isChecked: true,
      productImg: "pink_frame.jpg",
      productName: "Product 1",
      options: [
        {
          optionId: "option-1",
          optionName: "블랙",
          optionQty: 1,
          optionPrice: 5000,
        },
        {
          optionId: "option-2",
          optionName: "화이트",
          optionQty: 2,
          optionPrice: 5000,
        }
      ],
      deliveryFee: 1000,
      subTotalPrice: 0,

    },
  ];
  useEffect(() => {
    setProducts(results);
  }, []);

  return (
    <div>
      <Seo title="Cart" />
      <div className="container">
        <div className="cart-header-container">
          <div className="cart-header">
            <span className="cart-header-left">
              <label>
                <div className="product-all-select">
                  <input type="checkbox" /> 
                </div>
              </label>
              <span>
                모두 선택
              </span>
            </span>
            <span className="cart-header-right">
              <button>
                선택삭제
              </button>
            </span>
          </div>
        </div>
        <ul>
          {products?.map((product) => (         
                   <li key={product.id}>
                   <article className="carted-product">
                     <div className="product-select">
                       <input type="checkbox" value={product.isChecked}/> 
                     </div>
                     <div className="in">
                       <div className="image-container">
                         <img src={product.productImg} alt="product" />
                       </div>
                       <div className="product-small-item-title">
                         <h3>{product.productName}</h3>
                         <h4>배송비 {product.deliveryFee}원 | 일반택배</h4>
                       </div>
                     </div>
                     <div className="product-delete-button">
                         <img src="/cross.png" /> 
                     </div>
                     <ul className="carted-product-option-list">
                      {product.options?.map((option) => ( 
                       <li className="carted-product-option-list-item" key={option.optionId}>
                           <article className="carted-product-option-list-item-article">
                               <h4>{option.optionName}</h4>
                               <div className="options-delete-button">
                                   <img src="/thin_close.png" />
                               </div>
                               <div className="carted-product-option-list-item-bottom">
                                 <div className="stepper">
                                     <span className="stepper-button down">-</span>
                                     <button className="form-control" disabled >{option.optionQty}</button>
                                     <span className="stepper-button up">+</span>
                                 </div>
                                 <div className="item-price">
                                   <span>
                                     {option.optionPrice}원
                                   </span>
                                  
                                 </div>
                               </div>
                           </article>
                       </li>
                      ))}
                     </ul>
                     <div className="carted-product-footer">
                       <span className="carted-product-footer-left">
                         TOTAL
                       </span>
                       <span className="carted-product-subtotal">
                           <span className="carted-product-subtotal-number">
                               {product.subTotalPrice}
                           </span>
                           원
                       </span>
                     </div>
                     {/* <footer className="delivery-subtotal-container">
                       <p className="delivery-subtotal-price">
                         배송비 24,000원
                       </p>
                     </footer> */}
                   </article>
                 </li>
          ))}
         
        </ul>
      </div>
      <div className="sticky-cart-footer">
        <div className="sticky-child-cart-footer">
          <div className="cart-footer-total">
            <span className="total-count">10개 </span>
            <span className="total-cost">855,800원</span>
          </div>
          <button className="cart-order-button">바로구매</button>
        </div>
      </div>
      <dl className="cart-summary">
        <div className="cart-summary-row">
          <dt>총 상품금액</dt>
          <dd> <span className="number">1,625,100</span>원</dd>
        </div>
        <div className="cart-summary-row">
          <dt>총 배송비</dt>
          <dd> <span className="number">1,625,100</span>원</dd>
        </div>
        <div className="cart-summary-total-row">
          <dt>결제금액</dt>
          <dd> <span className="number">1,625,100</span>원</dd>
        </div>
      </dl>

      <style jsx>{`

        .container {
          background-color: #e9e9e9;
        }

        body
        {
          background-color: red;
        }

        h3 {
          margin: 0 20px 12px 0;
          font-size: 16px;
        }

        h4 {
          margin: 0 20px 12px 0;
          font-size: 12px;
        }

        input[type=checkbox] {
            transform : scale(1.1);
            width: 100%;
            height: 100%;
        }

        blockquote, body, code, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, pre, td, textarea, th, ul {
          margin: 0;
          padding: 0;
        }

        a {
            text-decoration: none;
        }

        .product-all-select {
          padding: 0px 10px 0px 0px;
        }

        .cart-header-container {
          position: sticky;
          top: 51px;
          transition: top 0.1s ease 0s;
        }

        .cart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 8px 15px;
          margin: 0 0 11px;
          background-color: #fff;
          border-top: 1px solid #ededed;
          border-bottom: 1px solid #ededed;
          z-index: 100;
        }

        .cart-header-left {
          display: flex;
        }

        .cart-header-left input[type=checkbox] {
          transform : scale(1.8);
          width: 100%;
          height: 100%;
        }

        .cart-header-right {
          flex: 0 0 auto;
        }

        .cart-header-right button {
          display: inline-block;
          margin: 2px -3px 0;
          padding: 3px;
          background: none;
          border: none;
          color: #424242;
          font-family: inherit;
          font-weight: 400;
          font-size: 12px;
          line-height: 1;
          transition: opacity .1s;
        }

        .carted-product {
          background-color: #fefefe;
          position: relative;
          display: inline-block;
          padding: 20px 15px 20px 50px;  
        }

        .product-select {
          position: absolute;
          display: inline-block;
          top: 20px;
          left: 10px;
          width: 20px;
          height: 20px;
        }

        .product-delete-button {
            position: absolute;
            display: inline-block;
            top: 20px;
            right: 10px;
            width: 20px;
            height: 20px;
        }

        .product-delete-button img {
            width: 100%;
            height: 100%;
        }

        .in {
          margin: 0 20px 12px 0;
          position: relative;
          display: flex;
        }

        .image-container {
          width: 20%;
          margin-right: 10px; /* 이미지와 텍스트 사이의 간격 조정 */
        }

        .image-container img {
            width: 100%;
            border-radius: 12px;
        }

        .product-small-item-title {
          -webkit-box-flex: 1;
          flex: 1 0 0px;
          padding-left: 12px;
         }

        .carted-product-option-list-item-article {
          position: relative;
          margin-bottom: 8px;
          padding: 12px;
          background-color: rgb(247, 249, 250);
          border-radius: 4px;
          color: rgb(47, 52, 56);
        }

        .carted-product-option-list-item-article h4 {
            margin: 4px;
        }

        .options-delete-button {
            position: absolute;
            display: inline-block;
            top: 0px;
            right: 0px;
            border: none;
            width: 40px;
            height: 40px;
        }

        .options-delete-button img {
            width: 100%;
            height: 100%;
        }

        .carted-product-option-list {
            padding-left: 0;
        }

        .carted-product-option-list li {
            list-style: none;
        }

        .carted-product-option-list-item-bottom {
            display: flex;
            align-items: flex-end;
            -webkit-box-pack: justify;
            justify-content: space-between;
        }

        .stepper {
            width: 70px;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            padding: 7px 6px;
            background: rgb(255, 255, 255);
            color: rgb(47, 52, 56);
            border: 1px solid rgb(218, 221, 224);
            border-radius: 4px;
            margin-top: 12px;
        }

        .stepper > a {
            color: white;
          }

        .stepper-button {
            display: inline-block;
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
        }

        .form-control {
          font-size: 14px;
          line-height: 18px;
          padding: 0px;
          border: 0px;
          background: none;
          color: rgb(47, 52, 56);
        }

        .item-price {
            flex: 1 1 0%;
            text-align: right;
            display: block;
        }

        .item-price span {
            font-size: 16px;
            line-height: 20px;
            font-weight: 600;
            text-align: right;
        }

        .carted-product-footer {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
            margin-top: 16px;
        }

        .carted-product-footer-left {
            flex: 0 0 auto;
        }

        .carted-product-subtotal {
            -webkit-box-flex: 0;
            flex: 0 0 auto;
            color: #000;
            font-size: 17px;
            font-weight: 700;
        }

        .carted-product-subtotal-number {
            color: #000;
            font-size: 17px;
            font-weight: 700;
        }

        .delivery-subtotal-container {
            padding: 10px 0;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
            color: #424242;
        }

        .delivery-subtotal-price {
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            margin: 0;
            padding: 0;
        }

        .sticky-cart-footer {
          position: sticky;
          bottom: 0px;
          transition: bottom 0.1s ease 0s;
        }

        .sticky-child-cart-footer {
          display: flex;
          z-index: 502;
          padding: 6px;
          background-color: hsla(0,0%,100%,.94);
          flex-wrap: wrap;
        }

        .cart-footer-total {
          flex: 0 0 auto;
          padding: 12px 16px 12px 10px;
          color: #000;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
        }

        .total-count {
            color: #000;
            font-size: 15px;
            line-height: 20px;
            text-align: center;
        }

        .total-cost {
          color: #000;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          font-weight: bold;
        }

        .cart-order-button {
            -webkit-box-flex: 1;
            flex: 1 0 auto;
            width: auto;
            padding: 11px 10px;
            margin-bottom: env(safe-area-inset-bottom,0);
        }

        footer, header, main {
            box-sizing: border-box;
            position: relative;
            display: block;
        }

        .cart-summary {
          background-color: #fff;
          padding: 10px 20px;
        }

        dl {
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }

        body, html {
          line-height: 1;
          font-family: OhouseSans, "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕", "Malgun Gothic", sans-serif;
          -webkit-font-smoothing: antialiased;
          letter-spacing: -0.4px;
          font-size: 13px;
        }

        .cart-summary-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 20px 0;
          font-size: 15px;
          font-weight: 400;
          color: #424242;
        }

        .cart-summary-row dt {
          flex: 0 0 auto;
        }

        .cart-summary-row dd {
          font-weight: 700;
          text-align: right;
        }

        dt {
          display: block;
        }

        .cart-summary-total-row {
          margin: 30px 0 20px;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-weight: 400;
        }

        .cart-summary-total-row dt {
          font-weight: 700;
          flex: 0 0 auto;
        }

        .cart-summary-total-row dd {
          font-size: 24px;
          font-weight: 700;
          text-align: right;
        }
      `}</style>  
    </div>
  );
}