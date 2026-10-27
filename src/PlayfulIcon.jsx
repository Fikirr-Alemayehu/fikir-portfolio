import { useState, useEffect, useRef } from "react";

function PlayfulIcon() {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [score, setScore] = useState(0);
    const [isMoving, setIsMoving] = useState(false);
    const iconRef = useRef(null);

    const moveIcon = () => {
        const newX = Math.random() * 80 + 10;
        const newY = Math.random() * 80 + 10;
        setPosition({ x: newX, y: newY });
        setIsMoving(true);
        setTimeout(() => setIsMoving(false), 300);
    };

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        moveIcon();
    };

    const handleCaught = () => {
        setScore(score + 1);
        moveIcon();
    };

    // Auto-move occasionally
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                moveIcon();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div
                ref={iconRef}
                className="playful-icon"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: isMoving ? 'scale(1.2)' : 'scale(1)',
                }}
                onClick={handleClick}
                onMouseEnter={handleCaught}
            >
                🎯
            </div>
            {score > 0 && (
                <div className="score-display">
                    Caught: {score}
                </div>
            )}
        </>
    );
}

export default PlayfulIcon;
