/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                smallBounce: {
                    '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'ease-in-out' },
                    '50%': { transform: 'translateY(-0.5rem)', animationTimingFunction: 'ease-in-out' },
                },
            },
            animation: {
                smallBounce: 'smallBounce 1.5s infinite',
            },
        },
        screens: {
            "tn": "460px",
            "sh": "458px",
            "cin": "500px",
            "sm": "640px",
            "six": "600px",
            "md": "768px",
            "hui": "800px",
            "nf": "900px",
            "lg": "1024px",
            "uu": "1100px",
            "lgx": "1124px",
            "dct": "1230px",
            "xl": "1280px",
            "2xl": "1536px"
        }
    },
    plugins: [],
}

