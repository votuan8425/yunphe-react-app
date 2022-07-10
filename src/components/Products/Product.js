import "./Product.scss";
import iphone1 from "../../assets/images/iphone1.jpg";
import iphone2 from "../../assets/images/iphone2.jpg";
import iphone3 from "../../assets/images/iphone3.jpg";
import iphone4 from "../../assets/images/iphone4.jpg";
import iphone5 from "../../assets/images/iphone5.jpg";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';
const images = [
    iphone1,
    iphone2,
    iphone3,
    iphone4,
    iphone5
  ];
const Product = () =>{
    const [currentUpImg, setCurrentUpImg] = useState(iphone1);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setphotoIndex] = useState(0);

    const handleClickPreviewImg  = () =>{
        setIsOpen(true);
        let index =images.findIndex(item => item === currentUpImg);
        setphotoIndex(index);
        setIsOpen(true);
    }
    return(
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="main-img">
                        <img src={currentUpImg} onClick={() => handleClickPreviewImg()}/>
                    </div>
                    <div className="img-extends">
                        <div className="img-down"> 
                            <img src={iphone1} onClick={() => setCurrentUpImg(iphone1)} className={currentUpImg === iphone1 ? "active" : ""}></img> 
                        </div>
                        <div className="img-down"> 
                            <img src={iphone4} onClick={() => setCurrentUpImg(iphone4)} className={currentUpImg === iphone4 ? "active" : ""}></img> 
                        </div>
                        <div className="img-down"> 
                            <img src={iphone5} onClick={() => setCurrentUpImg(iphone5)} className={currentUpImg === iphone5 ? "active" : ""}></img> 
                        </div>
                        <div className="img-down"> 
                            <img src={iphone2} onClick={() => setCurrentUpImg(iphone2)} className={currentUpImg === iphone2 ? "active" : ""}></img> 
                        </div>
                        <div className="img-down"> 
                            <img src={iphone3} onClick={() => setCurrentUpImg(iphone3)} className={currentUpImg === iphone3 ? "active" : ""}></img> 
                        </div>
                        
                    </div>
                </div>
                <div className="content-right">
                    <div className="name">IPhone 13 Pro Max 128GB Chính hãng VN/A</div>
                    <div className="price">27.990.000đ</div>
                    <div>
                    <label className="quantity" form="">Số lượng</label>
                    <input type="number" min="0"></input>
                    </div>
                    <button className="btn btn-add-product"> Thêm vào giỏ hàng</button>
                </div>
            </div>
            {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setphotoIndex((setphotoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={()=>setphotoIndex((photoIndex + 1) % images.length)}
            animationDuration={350}
          />
        )}
        </div>

    )
}
export default Product;