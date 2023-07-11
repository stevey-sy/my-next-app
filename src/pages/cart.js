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
            <div className="text">
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
                    <div className="stepper">
                        <a href="#" className="stepper-button down">-</a>
                        <input type="text" className="form-control" value="1" disabled />
                        <a href="#" className="stepper-button up">+</a>
                    </div>


                </article>
            </li>
          </ul>
        </article>
      </div>

      <style jsx>{`

        a {
            text-decoration: none;
        }

        .carted-product {
          background-color: #fefefe;
          position: relative;
          display: inline-block;
          padding: 20px 15px 20px 40px;
        }
        .product-select {
          position: absolute;
          display: inline-block;
          top: 10px;
          left: 10px;
          width: 20px;
          height: 20px;
        }

        h3, h4 {
            font-size: 14px;
        }

        input[type=checkbox] {
            transform : scale(1.2);
            width: 100%;
            height: 100%;
        }

        .carted-product-option-list-item-article {
            background-color: #F7F9FA;
            padding: 8px;
        }

        .product-delete-button {
            position: absolute;
            display: inline-block;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
        }

        .product-delete-button img {
            width: 100%;
            height: 100%;
        }

        .in {
          position: relative;
          display: flex;
          align-items: center; /* 수직 가운데 정렬 */
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
            width: 20px;
            height: 20px;
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

        .stepper {
            height: 28px;
            width: 80px;
            min-width: 80px;
            border-radius: 6px;
            display: inline-flex;
            align-items: flex-start;
            justify-content: space-between;
            overflow: hidden;
            margin: 10px 0px 0px 0px;
        }

        .stepper > a {
            color: white;
          }

        .stepper-button {
            background: #6C7C94;
            border-color: #6C7C94;
            height: 30px;
            width: 24px;
            font-size: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .form-control {
            border-color: #6C7C94;
            color: #6C7C94;
            height: 30px;
            width: 32px;
            font-size: 15px;
            border-radius: 0;
            box-shadow: none !important;
            background: transparent;
            text-align: center;
            border: 2px solid #1E74FD;
        }

        .stepper-button-up {
            
        }



        .image-container {
          width: 20%;
          margin-right: 10px; /* 이미지와 텍스트 사이의 간격 조정 */
        }

        .image-container img {
          width: 100%;
          border-radius: 12px;
        }

        .text {
          flex-grow: 1; /* 텍스트 컨테이너가 남은 공간을 채우도록 설정 */
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