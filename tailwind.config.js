module.exports = {
  theme: {
    extend: {
      colors: {
        'cafe-purr': {
          light: '#D1FFD6', // Light Green for Robot messages
          dark: '#333',    // Dark color for text
        },
        'user-message': '#C5DBFF', // Light Blue for user messages
        'robot-message': '#D1FFD6', // Light Green for robot messages
        'sidebar-bg': '#fff', // white color for sidebar
        'main-bg': '#F3F4F6', // light gray for main background
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '80': '20rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'lg': '0.5rem',
        'full': '9999px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.cafe-purr.dark'),
            a: {
              color: theme('colors.cafe-purr.light'),
              '&:hover': {
                color: theme('colors.cafe-purr.dark'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    // ...
  ],
}
