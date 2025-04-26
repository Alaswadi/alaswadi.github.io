// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                dark: {
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                'mono': ['JetBrains Mono', 'monospace'],
                'sans': ['Inter', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'typewriter': 'typewriter 4s steps(44) 1s 1 normal both, blinkTextCursor 500ms infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                typewriter: {
                    from: { width: '0' },
                    to: { width: '100%' }
                },
                blinkTextCursor: {
                    from: { borderRightColor: 'rgba(255,255,255,.75)' },
                    to: { borderRightColor: 'transparent' }
                }
            }
        }
    }
};

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});