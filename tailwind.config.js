/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,tsx}", "./public/**/*.{html,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    fontFamily: {
      "pt-sans": ['PT Sans', 'sans-serif'],
    },

    // fontSize: {
    //   title: `2.6rem;`,
    //   paragraph: `1.2rem;`
    // },
    colors: {
      'purple': {
        '900': '#290E58',
        '800': '#31116A',
        '700': '#3A147B',
        '600': '#42178C',
        '500': '#4A1A9E',
        '400': '#5B1FC1',
        '300': '#6D2CDD',
        '200': '#9261E5',
        '100': '#AA84EB',
        '10': '#C2A7F1',
        '1': '#DACAF7'
      },
      'white': '#FFFFFF',
      'blue': {
        '900': '#000a1a',
        '800': '#001f4d',
        '700': '#003380',
        '600': '#0047b3',
        '500': '#005ce6',
        '400': '#1a75ff',
        '300': '#4d94ff',
        '200': '#80b3ff',
        '100': '#b3d1ff',
        '10': '#e5f0ff',
        '1': '#eaf2ff'
      },
      'grey': {
        '900': '#0b0d0e',
        '800': '#22282b',
        '700': '#384348',
        '600': '#4e5e64',
        '500': '#657981',
        '400': '#7e929a',
        '300': '#9baab1',
        '200': '#b7c3c7',
        '100': '#d4dbdd',
        '10': '#f1f3f4',
        '1': '#f3f5f6'
      },
    },
    extend: {},
    plugins: [],
  }
}


