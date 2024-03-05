import React, {useState} from "react";
import { IProduct } from "../../lib/types/products";
import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import Benefits from "../Benefits";
import SimilarProducts from "./SimilarProducts";
import { IComment } from "../../lib/types/comment";
import CommentSection from "./CommentSection";
import FormPopup from "./FormPopup";

interface Props {
  product: IProduct;
  products: IProduct[];
}
// FakeCommentsData
export const fakeComments: IComment[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    content: "This is a great product!",
    brand: "TechGadgets",
    category: ["Electronics", "Gadgets"],
    starRating: 5,
    registerDate: "2022-01-19",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Jane Doe",
    content: "I agree with John. Awesome product!",
    brand: "TechGadgets",
    category: ["Electronics", "Gadgets"],
    starRating: 4,
    registerDate: "2022-01-20",
    replies: [
      {
        id: 201,
        image: "https://via.placeholder.com/150",
        name: "Bob Smith",
        content: "Yes, it's amazing!",
        brand: "TechGadgets",
        category: ["Electronics", "Gadgets"],
        starRating: 5,
        registerDate: "2022-01-21",
      },
    ],
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    name: "Alice Johnson",
    content: "This product is not what I expected.",
    brand: "TechGadgets",
    category: ["Electronics", "Gadgets"],
    starRating: 2,
    registerDate: "2022-01-22",
  },
  // Add more fake comments as needed
];


const ProductDetails: React.FC<Props> = ({ product, products }) => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Hàm mở popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const similarProductsList = products
    .filter(
      (similarProduct) => similarProduct.slug.current !== product.slug.current
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col">
      {isPopupOpen && <FormPopup isOpen={isPopupOpen} onClose={closePopup}/>}
      <Breadcrumb />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          <ImageSection imgArray={product.image} product={product} />
          <DetailsSection product={product} openPopup={openPopup} />
        </div>
        <div className="border-2 my-8">
          <Benefits />
        </div>
        <div className="border-2 my-8">
          <CommentSection comments={fakeComments} />
        </div>
        <SimilarProducts products={similarProductsList} />
      </div>
    </div>
  );
};

export default ProductDetails;
