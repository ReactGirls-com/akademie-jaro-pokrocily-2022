import { useState } from "react";
import Board from "./components/Board";

export default function Pexeso() {
    const [difficulty, setDifficulty] = useState(2);
    return (
        <>
            <div className="flex items-center justify-center gap-2 p-4">
                <Button
                    title="-"
                    onClick={() => setDifficulty(difficulty - 2)}
                />
                <input
                    type="number"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                />
                <Button
                    title="+"
                    onClick={() => setDifficulty(difficulty + 2)}
                />
            </div>
            <div>
                <Board count={difficulty} />
            </div>
        </>
    );
}

function Button({ onClick, title }) {
    return (
        <button className="p-2 bg-pink-400 rounded-md" onClick={onClick}>
            {title}
        </button>
    );
}
