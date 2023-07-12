import Seo from "../../components/Seo";

export default function Cart() {
  return (
    <div>
      <Seo title="Cart" />
      <div>
        <article className="carted-product">
          <div className="product-select">
            <input type="checkbox" /> 
          </div>
          <div className="in">
            <div className="image-container">
              <img src="/pink_frame.jpg" alt="product" />
            </div>
            <div className="product-small-item-title">
              <h3>Pink Frame</h3>
              <h4>배송비 5,000원 | 일반택배</h4>
            </div>
          </div>
          <div className="product-delete-button">
              <img src="/cross.png" /> 
          </div>
          <ul className="carted-product-option-list">
            <li className="carted-product-option-list-item">
                <article className="carted-product-option-list-item-article">
                    <h4>블랙</h4>
                    <div className="options-delete-button">
                        <img src="/thin_close.png" />
                    </div>
                    <div className="carted-product-option-list-item-bottom">
                      <div className="stepper">
                          <span className="stepper-button down">-</span>
                          <button className="form-control" disabled >1</button>
                          <span className="stepper-button up">+</span>
                      </div>
                      <div className="item-price">
                        <span>
                          15,900원
                        </span>
                      </div>
                    </div>
                </article>
            </li>
          </ul>
          <div className="carted-product-footer">
              <span className="carted-product-footer-left">
                TOTAL
              </span>
              <span className="carted-product-subtotal">
                  <span className="carted-product-subtotal-number">
                      63,600
                  </span>
                  원
              </span>
          </div>
        </article>
      </div>

      <style jsx>{`

        blockquote, body, code, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, pre, td, textarea, th, ul {
          margin: 0;
          padding: 0;
        }

        a {
            text-decoration: none;
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
            // height: 28px;
            // width: 80px;
            // min-width: 80px;
            // border-radius: 6px;
            // display: inline-flex;
            // align-items: flex-start;
            // justify-content: space-between;
            // overflow: hidden;
            // margin: 10px 0px 0px 0px;
            // position: absolute;
            // bottom: 10px;
            // left: 20px;

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

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>  
    </div>
  );
}