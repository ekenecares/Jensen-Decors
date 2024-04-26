import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shuffle = () => {
  const navigate = useNavigate();
  return (
    <section className="shuffle-sect">
      <div className="shuffle-details">
        <div className="arrange">
          <h5>JENSEN DECORS</h5>
          <h2>
            BEST OF EVERYTHING, LET US CHANGE YOUR HOUSE HOLD TO YOUR TASTE.
          </h2>
          <h4>
            Let's talk about change, change it up a bit, do something different
            and as a pulchritudinous household is the first pillar of any
            thriving society, it ought to remain beautiful, this is where jensen
            decor comes into the picture, we provide peculiar services, our goal
            is to make your home prepossesing in a way never seen before, not
            the typical indoor look, something unique for and to you, we seek
            your comforts and your demands will be met,our different brands have
            specialized machineries and personnel designated for your comfort,
            we are a luxury brand and your wants and desires come first and
            foremost. welcome to Jensen.
          </h4>

          <div className="co-signature">
            <img src="images/cosignature.png" />
          </div>
        </div>

        <div className="whater">
          <img src="images/whater.webp"></img>
          <div className="butt-arrange">
            <button
              onClick={() => navigate("/shop")}
              className="arrange-button"
            >
              <h3>Shop</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="shuffle-random">
        <ShuffleGrid />
      </div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "images/d.jpeg",
  },

  {
    id: 2,
    src: "images/try.jpg",
  },

  {
    id: 3,
    src: "images/mir.jpeg",
  },

  {
    id: 4,
    src: "images/mir2.jpeg",
  },

  {
    id: 5,
    src: "images/mir3.jpeg",
  },
  {
    id: 6,
    src: "images/photoart.jpeg",
  },
  {
    id: 7,
    src: "images/metal-wall-art.jpeg",
  },
  {
    id: 8,
    src: "images/metal-shelf.jpeg",
  },
  {
    id: 9,
    src: "images/mirror-prod.jpg",
  },
  {
    id: 10,
    src: "images/prod-shelf.jpeg",
  },
  {
    id: 11,
    src: "images/prod-img.jpg",
  },
  {
    id: 12,
    src: "images/broart.jpeg",
  },
  {
    id: 13,
    src: "images/aura2.webp",
  },
  {
    id: 14,
    src: "images/aura.jpeg",
  },
  {
    id: 15,
    src: "images/gred.jpeg",
  },
  {
    id: 16,
    src: "images/replase.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 3, type: "spring" }}
      className="squares"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundColor: "grey",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="gridder grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Shuffle;
