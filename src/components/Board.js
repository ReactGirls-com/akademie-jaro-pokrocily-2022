import { useState, useEffect } from "react";
import Card from "./Card";
import { shuffle } from "../utilities/shuffle";

export default function Board(props) {
    const [flippedCards, setFlippedCards] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const [dogsDoubled] = useState(shuffle([...props.images, ...props.images]));

    useEffect(() => {
        if (flippedCards.length === 2) {
            const flippedImages = flippedCards.map((idx) => {
                return dogsDoubled[idx];
            });
            const doTheyMatch = flippedImages[0] === flippedImages[1];
            if (doTheyMatch) {
                setFoundCards([...foundCards, ...flippedCards]);
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 3000);
            }
        }
    });

    useEffect(() => {
        if (foundCards.length === dogsDoubled.length) {
            setTimeout(() => {
                props.onGameFinished(props.difficulty);
            }, 3000);
        }
    });

    function flipCard(index) {
        if (flippedCards.length < 2 && !flippedCards.includes(index)) {
            setFlippedCards([...flippedCards, index]);
        }
    }

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {dogsDoubled.map((src, idx) => (
                <Card
                    key={idx}
                    image={"/dogs/" + src}
                    flipped={
                        flippedCards.includes(idx) || foundCards.includes(idx)
                    }
                    click={() => {
                        flipCard(idx);
                    }}
                />
            ))}
        </div>
    );
}
