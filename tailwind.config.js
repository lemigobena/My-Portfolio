import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: "hsl(var(--primary) / <alpha-value>)",
                secondary: "hsl(var(--secondary) / <alpha-value>)",
                accent: "hsl(var(--accent) / <alpha-value>)",
                card: "hsl(var(--card))",
                cardForeground: "hsl(var(--card-foreground))",
                muted: "hsl(var(--muted))",
                mutedForeground: "hsl(var(--muted-foreground))",
                border: "hsl(var(--border))",
            },
            keyframes: {
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                }
            },
            animation: {
                shimmer: 'shimmer 2s infinite',
            }
        },
    },
    plugins: [
        tailwindScrollbarHide
    ],
}
