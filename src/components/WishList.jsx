import { useState } from "react";
import WishItem from "./WishItem";

const WishList = () => {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      img: "https://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpg",
      isCompleted: false,
    },
    {
      id: 2,
      img: "https://images.ctfassets.net/wv75stsetqy3/DaKdXY2tkQGWeVQiCbSx7/ac01166282697e4e0cafb99180d35cd1/Thailand_Featured.jpg?q=60&fit=fill&fm=webp",
      isCompleted: true,
    },
    {
      id: 3,
      img: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/https://shekem-df.co.il/media/catalog/product/cache/6b2f4d2b8c238597c4864fc429fa65dd/3/1/312656_1.jpg/mxw_640,f_auto",
      isCompleted: false,
    },
  ]);

  const onDelete = (id) => {
    setWishes(wishes.filter((wish) => wish.id !== id));
  };

  const onToggleComplete = (id) => {
    setWishes(
      wishes.map((wish) => {
        if (wish.id === id) {
          return {
            ...wish,
            isCompleted: !wish.isCompleted,
          };
        }
        return wish;
      })
    );
  };

  return (
    <div className="container">
      <h1>Wish List</h1>
      {wishes.map((wish) => (
        <WishItem
          key={wish.id}
          {...wish}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default WishList;
