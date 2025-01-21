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
import {
  MainContainer,
  PicturesSection,
  Name,
} from "../components/ProductStyles";

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
  id: string;
}

const Product: React.FC = () => {
  const { ProductId: productId } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const productData = async () => {
      if (!productId) return;
      console.log(productId);

      try {
        const response = await fetch(`http://localhost:3005/product`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("No results.");
        }
        const data = await response.json();
        const searched = data.find((d: IProduct) => productId === d.id);
        console.log(data);
        setProduct(searched);
      } catch (error) {
        console.log("Product has not found.");
      }
    };

    productData();
  }, [productId]);

  return (
    <>
      <MainContainer>
        <PicturesSection>
          <img src={FirstImage} alt="First Image" />
          <img src={secondImage} alt="Second Image" />
          <img src={thirdImage} alt="Third Image" />
          <img src={fourthImage} alt="Fourth Image" />
        </PicturesSection>
        <img src={MainImage} alt="Main Image" style={{ marginLeft: "3rem" }} />
        <div>
          <Name>{product?.name}</Name>
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
      </MainContainer>
    </>
  );
};

export default Product;
