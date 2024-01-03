import { Link } from "react-router-dom";

const CardProducts = ({ product }) => {
  const { title, price, _id, thumbnailUrl, authors, categories } = product;

  return (
    <div>
      <Link className="no-underline" to={`/product/${_id}`}>
        <div className="group relative">
          <div className="w-full min-h-80 bg-gray-300 aspect-w-1 rounded-md overflow-hidden group-hover:opacity-60 lg:aspect-none">
            <img src={thumbnailUrl} alt={title} className="w-full h-60 object-center lg:w-full lg:h-60"  />
          </div>
          <div className="mt-4 justify-between">
            <div>
              <h3 className="text-sm text-gray-700">{title}</h3>
              <p className="text-sm text-gray-700">Authors: {authors.join(', ')}</p>
              <p className="text-sm text-gray-700">Categories: {categories.join(', ')}</p>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              ${price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProducts;
