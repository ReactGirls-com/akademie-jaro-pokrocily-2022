import { useState } from "react";
import Board from "./components/Board";

const dogs = [
    "ret.jpg",
    "pug.jpg",
    "brooke.jpg",
    "french.jpg",
    "staff.jpeg",
    "husky.jpg",
];

export default function Pexeso() {
    const [difficulty, setDifficulty] = useState(null);

    return (
        <div className="bg-slate-50 h-screen flex flex-col gap-4 items-center justify-center">
            {difficulty === null ? (
                <>
                    <Button title="Beginner" onClick={() => setDifficulty(1)} />
                    <Button title="Normal" onClick={() => setDifficulty(2)} />
                    <Button title="Expert" onClick={() => setDifficulty(3)} />
                </>
            ) : (
                <Board
                    key={difficulty}
                    difficulty={difficulty}
                    images={dogs.slice(0, difficulty + 1)}
                    onGameFinished={(previousDifficulty) =>
                        setDifficulty(previousDifficulty + 1)
                    }
                />
            )}
        </div>
    );
}

function Button(props) {
    return (
        <button
            className="border p-2 px-4 rounded-md bg-slate-300"
            onClick={props.onClick}
        >
            {props.title}
        </button>
    );
}
