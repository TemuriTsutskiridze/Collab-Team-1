import React from "react";
import FirstImage from "/first-image.png";
import secondImage from "/second-image.png";
import thirdImage from "/third-image.png";
import fourthImage from "/fourth-image.png";
import MainImage from "/main-image.png";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Heart from "/heart.png";

interface IProduct {
  name: string | null;
  description: string | null;
  price: number;
  discountPrice: number;
  discountPercent: number;
  color: string | null;
  category: string | null;
  image: string | null;
  rating: number;
  reviewCount: number;
  stock: number;
}

const Product: React.FC = () => {
  const { Product: productId } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const productData = async () => {
      if (!product) return;

      try {
        const response = await fetch(`http://localhost:3002/${productId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("No results.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("Product has not found.");
      }
    };

    productData();
  }, [productId]);

  return (
    <>
      <div>
        <section>
          <img src={FirstImage} alt="First Image" />
          <img src={secondImage} alt="Second Image" />
          <img src={thirdImage} alt="Third Image" />
          <img src={fourthImage} alt="Fourth Image" />
        </section>
        <img src={MainImage} alt="Main Image" />
        <div>
          <h5>{product?.name}</h5>
          <span>({product?.reviewCount} Reviews | )</span>
          <span>{product?.stock}</span>
          <p>{product?.price}</p>
          <p>{product?.description}</p>
          <div>
            <p>Colours: </p>
            <div></div>
          </div>
          <div>
            <div>-</div>
            <div>2</div>
            <div>+</div>
            <div>
              <button>Buy Now</button>
              <div>
                <img src={Heart} alt="Heart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
