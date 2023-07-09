import Seo from "../../components/Seo";
export default function Cart() {
    return (
        <div> 
            <Seo title="장바구니" />
            <h1>장바구니</h1>
            <div>
                <article className="carted-product">
                    <div className="product-select">
                        <input type="checkbox" /> 
                    </div>
                    <div className="in">
                        <img src="/pink_frame.jpg" alt="product" />
                        <div class="text">
                            <h3>Pink Frame</h3>
                            <h4>배송비 5,000원 | 일반택배</h4>
                        </div>
                    </div>
                    <ul>
                        <li></li>

                    </ul>

                </article>

            </div>
     

            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }

                .carted-product {
                    background-color: purple;
                    position: relative;
                    display: inline-block;
                    padding: 20px 15px 20px 49px;
                    
                }
                .product-select {
                    display: inline-block;
                    top: 20px;
                    left 15px;
                }
                .in {
                    display: inline-block;
                }

                .in img {
                    width: 20%;
                    border-radius: 12px;
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