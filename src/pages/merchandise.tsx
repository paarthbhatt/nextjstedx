import React from "react";
import MorphingText from "@/components/ui/morphing-text";
const texts = [
    "Hello",
    "Morphing",
    "Text",
    "Animation",
    "React",
    "Component",
    "Smooth",
    "Transition",
    "Engaging",
];
const Merchandise: React.FC = () => {
    return (
        <div style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            <h1>Merchandise</h1>
            <p>Welcome to the merchandise page!</p>
            <div style={{ marginTop: "20px" }}>
                <MorphingText texts={texts} />
            </div>
            <div style={{ height: "50px" }} />
        </div>
    );
};
export default Merchandise;
 