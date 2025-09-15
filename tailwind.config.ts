import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#333333',
				input: '#2A2A2A',
				ring: '#00FF00',
				background: '#0A0A0A',
				foreground: '#FFFFFF',
				primary: {
					DEFAULT: '#00FF00',
					foreground: '#000000'
				},
				secondary: {
					DEFAULT: '#8B4513',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#FF0000',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#333333',
					foreground: '#CCCCCC'
				},
				accent: {
					DEFAULT: '#FFD700',
					foreground: '#000000'
				},
				popover: {
					DEFAULT: '#1A1A1A',
					foreground: '#FFFFFF'
				},
				card: {
					DEFAULT: '#1A1A1A',
					foreground: '#FFFFFF'
				},
				sidebar: {
					DEFAULT: '#1A1A1A',
					foreground: '#FFFFFF',
					primary: '#00FF00',
					'primary-foreground': '#000000',
					accent: '#FFD700',
					'accent-foreground': '#000000',
					border: '#333333',
					ring: '#00FF00'
				},
				minecraft: {
					green: '#00FF00',
					brown: '#8B4513',
					gold: '#FFD700',
					dark: '#1A1A1A',
					red: '#FF0000'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;