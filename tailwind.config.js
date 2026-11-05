import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
                sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                charcoal: "#0B0D10",
                offwhite: "#F2F2EE",
                amber: {
                    DEFAULT: "#FFB020",
                    light: "#FFC24D",
                    dark: "#D9900B"
                },
                teal: {
                    DEFAULT: "#2DD4BF",
                    light: "#5EEAD4",
                    dark: "#0F766E"
                },
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
