"use client";

import React, { useRef, useState, useEffect } from "react";

interface StarBackgroundProps {
    starValidation?: boolean;
}

const StarBackground = ({ starValidation = true }: StarBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            setContext(ctx);
        }
    }, []);

    useEffect(() => {
        if (context) {
            const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = [];
            const numStars = 100;
            const width = window.innerWidth;
            const height = window.innerHeight;

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    vx: (Math.random() - 0.5) * 0.2, // Slow movement
                    vy: (Math.random() - 0.5) * 0.2,
                });
            }

            const animate = () => {
                if (!canvasRef.current || !context) return;

                context.clearRect(0, 0, width, height);
                context.fillStyle = "rgba(255, 255, 255, 0.8)"; // White stars

                stars.forEach((star) => {
                    context.beginPath();
                    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    context.fill();

                    star.x += star.vx;
                    star.y += star.vy;

                    // Wrap around screen
                    if (star.x < 0) star.x = width;
                    if (star.x > width) star.x = 0;
                    if (star.y < 0) star.y = height;
                    if (star.y > height) star.y = 0;
                });

                requestAnimationFrame(animate);
            };

            animate();

            const handleResize = () => {
                if (canvasRef.current) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                }
            };

            window.addEventListener("resize", handleResize);
            handleResize(); // Set initial size

            return () => window.removeEventListener("resize", handleResize);
        }
    }, [context]);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />
        </div>
    );
};

export default StarBackground;
