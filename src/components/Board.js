import { useState, useEffect } from "react";
import Card from "./Card";
import { shuffle } from "../utilities/shuffle";

function useDogsFromAPI(count) {
    const [dogsDoubled, setDogsDoubled] = useState([]);

    const refetch = () =>
        fetch("https://dog.ceo/api/breeds/image/random/" + count)
            .then((res) => res.json())
            .then((json) => {
                console.log("DATA JSOU ZDE", json);
                const dogs = json.message;
                const dogsDoubled = [...dogs, ...dogs];
                const dogsDoubledAndShuffled = shuffle(dogsDoubled);
                setDogsDoubled(dogsDoubledAndShuffled);
            });

    useEffect(() => {
        refetch();
    }, [count]);

    return {
        dogs: dogsDoubled,
        refetch,
    };
}

export default function Board(props) {
    const [flippedCards, setFlippedCards] = useState([]);
    const [foundCards, setFoundCards] = useState([]);
    const { dogs, refetch } = useDogsFromAPI(props.count);

    function flipCard(index) {
        if (flippedCards.length < 2 && !flippedCards.includes(index)) {
            setFlippedCards([...flippedCards, index]);
        }
    }

    function resetGame() {
        setFlippedCards([]);
        setFoundCards([]);
        refetch();
    }

    useEffect(() => {
        resetGame();
    }, [props.count]);

    useEffect(() => {
        console.log("Effect happening", flippedCards);
        if (flippedCards.length === 2) {
            const flippedImages = flippedCards.map((idx) => {
                return dogs[idx];
            });
            const doTheyMatch = flippedImages[0] === flippedImages[1];
            if (doTheyMatch) {
                setFoundCards([...foundCards, ...flippedCards]);
                setFlippedCards([]);
            } else {
                const timeout = setTimeout(() => {
                    setFlippedCards([]);
                }, 2000);
            }
        }
    });

    const noOfColumns = Math.floor(Math.sqrt(props.count * 2));

    if (foundCards.length === props.count * 2) {
        return (
            <div className="flex flex-col gap-4 justify-center items-center h-screen">
                <h1 className="text-lg">Vyhrál jsi</h1>
                <button
                    className="bg-pink-500 text-white p-2 px-4 rounded-lg"
                    onClick={() => resetGame()}
                >
                    Nová hra
                </button>
            </div>
        );
    }

    return (
        <>
            <div
                className="grid gap-2 p-4"
                style={{
                    gridTemplateColumns:
                        "repeat(" + noOfColumns + ", minmax(0, 1fr))",
                }}
            >
                {dogs.map((src, idx) => (
                    <Card
                        key={idx}
                        image={src}
                        flipped={
                            flippedCards.includes(idx) ||
                            foundCards.includes(idx)
                        }
                        click={() => {
                            flipCard(idx);
                        }}
                    />
                ))}
            </div>
        </>
    );
}
