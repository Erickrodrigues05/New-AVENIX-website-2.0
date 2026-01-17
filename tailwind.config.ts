import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "avenix-black": "#000000",
                "avenix-orange": "#D77544",
                "avenix-orange-light": "#FF9F6B", // Lighter variant for gradients
                "avenix-blue": "#00122A",
                "avenix-cyan": "#00D4FF",
                "avenix-cyan-light": "#70E0FF", // Lighter variant for gradients
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(500%)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.333333%)' },
                },
            },
            animation: {
                scroll: 'scroll 30s linear infinite',
                scanline: 'scanline 4s ease-in-out infinite',
                marquee: 'marquee 30s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
