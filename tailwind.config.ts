import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'space-mono': "var(--font-space-mono), monospace"
        },
        fontSize: {
            'sm': '12px',
            'base': '16px',
            'xl': '22px',
            '2xl': '28px',
            '3xl': '38px',
            '4xl': '51px',
            '5xl': '67px',
        },
        extend: {
            aspectRatio: {
                '420/296': '420 / 296',
            },
            colors: {
                'background': '#2B2B2B',
                'background-secondary': '#3B3B3B',
                'captions-label': '#858584',
                'default': '#FFFFFF',
                'CTA': '#A259FF',
            },
            screens: {
                'small': '375px',
                'medium': '834px',
                'large': '1280px'
            },
        },
    },
    plugins: [],
} satisfies Config;
