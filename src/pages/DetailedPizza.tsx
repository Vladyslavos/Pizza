import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const DetailedPizza: React.FC = () => {
  const { id } = useParams();
  const [pizzaInfo, setPizzaInfo] = React.useState<IData>();
  const navigate = useNavigate();

  interface IData {
    title: string;
    imageUrl: string;
    price: number;
    rating: number;
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
      <h2>{pizzaInfo.title}</h2>
      <img src={pizzaInfo.imageUrl} />
      <h3>{pizzaInfo.price} $</h3>
      <h2>Rating:{pizzaInfo.rating}</h2>
    </div>
  );
};
