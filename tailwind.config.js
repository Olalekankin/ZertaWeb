/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#150958',
        link: '#022C22',
        tblack: '#1D1F1E',
        bgreen: '#8DC63F',
        grey: '#646A69',
        cream: '#150958',
        bud: '#D9DEDD',
        foo: '#383b56',
        soc: '#4d4480',
      },
      fontFamily: {
        ribeye: ['Ribeye Marrow'],
        roboto: ['Roboto'],
        lora: ['Lora'],
        aclon: ['Aclonica'],
      },
      backgroundImage: {
        pattern: "url('/asset/pattern.png')",
        pat: "url('/asset/pat.png')",
      },
    },
  },
  plugins: [],
}

