module.exports = {
  // mode: process.env.TAILWIND_MODE ? 'jit' : '', // 'jit', 'aot'
  // purge: ['/src/**/*.{ts, html}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363', // màu chủ đạo website
        menu: 'rgba(255, 255, 255, 0.95)',
        section: '#adbabf',
        // secondary: { 
        //   100: '#E2E2D5',
        //   200: '#888883',
        // }
      },
      fontFamily: {
        body: ['Asap']
      },
      letterSpacing: {
        bigger: "0.2em",
      },
    },
  },
  plugins: [],
}
