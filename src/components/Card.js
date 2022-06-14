import { useState } from "react";

export default function Card(props) {
    // const flipped = useState(false);
    // const isFlipped = flipped[0];
    // const setIsFlipped = flipped[1];

    // ^^^ ,, these are equal
    const [isFlipped, setIsFlipped] = useState(false);
    // let isFlipped = false;

    if (isFlipped === false) {
        // document.getElementById("x").addEventListener("click", () =>)
        return (
            <div>
                <button
                    id="x"
                    onClick={() => {
                        setIsFlipped(true);
                        // isFlipped = true;
                        // alert("zmáčkl jsi to! hustě!");
                    }}
                >
                    X
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <div>{props.name}</div>
                <img
                    onClick={() => setIsFlipped(false)}
                    src={props.image}
                    alt="tady je pes"
                />
            </div>
        );
    }
}
