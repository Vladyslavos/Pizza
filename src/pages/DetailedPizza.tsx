import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const DetailedPizza: React.FC = () => {
  const { id } = useParams();
  const [pizzaInfo, setPizzaInfo] = React.useState<IData>();
  const navigate = useNavigate();

  interface IData {
    title: string;
    imageUrl: string;
    price: number;
    rating: number;
    description: string;
  }

  React.useEffect(() => {
    async function fetchDetailedPizza() {
      try {
        const { data } = await axios.get(
          "https://64b45fca0efb99d86268fe60.mockapi.io/items/" + id
        );
        setPizzaInfo(data);
      } catch (err) {
        console.error("Error >>>", err);
        navigate("/");
      }
    }
    fetchDetailedPizza();
  }, []);

  if (!pizzaInfo) {
    return <>"Loading..."</>;
  }

  return (
    <div className="container">
      <h1>{pizzaInfo.title}</h1>
      <img src={pizzaInfo.imageUrl} />
      <div className="container-details__price__rating">
        <h2>
          {pizzaInfo.price} <span>$</span>
        </h2>
        <h2>
          Rating:<span>{pizzaInfo.rating}</span>
        </h2>
      </div>
      <hr className="container-description__hr" />
      <p className="container-details__description">
        <strong>{pizzaInfo.description}</strong>
      </p>
      <Link to={"/"} className="container-descriptiption__link">
        Get back
      </Link>
    </div>
  );
};
