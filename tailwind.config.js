/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
        colors: {
            'emerald': {
                500: '#018673',
                600: '#017E73'
            },
            'glacial-emerald': {
                50: '#F5F7F7'
            }
        },
        boxShadow: {
            'card-post': '0px 2px 4px rgba(0, 0, 0, 0.25);'
        },
        keyframes: {
            'mouse': {
                '0%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                },
                '100%': {
                    opacity: 0,
                    transform: 'translateY(6px)'
                }
            },
            'mouse-scroll': {
                '0%': {
                    opacity: 1,
                },
                '50%': {
                    opacity: .5,
                },
                '100%': {
                    opacity: 1,
                },
            },
            'blink': {
                '0%, 100%': {
                    opacity: 1
                },
                '50%': {
                    opacity: 0
                }
            }
        },
        animation: {
            'mouse': 'mouse 1.2s ease infinite',
            'mouse-scroll': 'mouse-scroll 1s infinite',
            'blink': 'blink .9s infinite'
        },
        gridTemplateColumns: {
            'form-search': '1fr auto',
            post: '2fr 1fr'
        },
        minHeight: {
            inherit: 'inherit'
        }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

