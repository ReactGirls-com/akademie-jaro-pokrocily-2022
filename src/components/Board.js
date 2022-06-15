import { useState } from "react";
import Card from "./Card";

export default function Board() {
    const [flippedCards, setFlippedCards] = useState([]);

    function flipCard(index) {
        if (flippedCards.length < 2) {
            setFlippedCards([...flippedCards, index]);
        }
    }

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            <Card
                image="/dogs/ret.jpg"
                flipped={flippedCards.includes(0)}
                click={() => flipCard(0)}
            />
            <Card
                image="/dogs/pug.jpg"
                flipped={flippedCards.includes(1)}
                click={() => flipCard(1)}
            />
            <Card
                image="/dogs/ret.jpg"
                flipped={flippedCards.includes(2)}
                click={() => flipCard(2)}
            />
            <Card
                image="/dogs/pug.jpg"
                flipped={flippedCards.includes(3)}
                click={() => flipCard(3)}
            />
        </div>
    );
}
