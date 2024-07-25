/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

    theme: {
    extend: {
      colors: {
        'grey': '#737373', 
        'borders': '#D9D9D9', 
        'white': '#FFF',  
        'dark-grey': '#333',
        'purple': '#633CFF',
        'purple-hover': '#BEADFF',
        'red-custom': '#FF3939',
        'light-purple': '#EFEBFF',
        'light-grey':'#FAFAFA',
        'light' : '#EEE',
        
      },
      fontFamily: {
        'instrument': ['Instrument Sans', 'sans-serif'], 
      },
      fontSize: {
        'body-m': '16px',
        'heading-m': '32px', 
        'xs': '12px',
        'heading-s': ['16px', '24px'],
      },

      lineHeight: {
        'body-m': '24px', 
        'heading-m': '48px', 
        'body-s': '18px',
        
      },
      fontWeight: {
        'normal': 400, 
        'bold': 700, 
        'heading-s': '600',
      },
      borderRadius: {
        'custom': '8px',    
        'customs': '12px',    
        'custom-t': '12px 12px 0 0', 
        'custom-b': '0 0 12px 12px', 
        'plan':'0px 0px 32px 32px',
        'custom-big' : '24px'
        
      },
      borderWidth: {
        'custom': '1px',       

      },
      boxShadow: {
        'input-focus': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)', 
        'hover-focus': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
        'pad-shade': '0px 0px 32px 0px rgba(0, 0, 0, 0.1)'
      },
      transitionProperty: {
        'border': 'border-color',
        'box-shadow': 'box-shadow',
      },
      padding: {
        'custom-horizontal': '27px',
        'custom-vertical': '11px',
        'pad-plan': '16px 16px 16px 24px',
        'main-pad': '48px 56px 48px 56px'
      },
    },
  },
  
  plugins: [],
}
