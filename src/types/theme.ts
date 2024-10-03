import '@vue-styled-components/core';

export const theme = {
  colors: {
    greenDark: '#015f43',
    green: '#00875f',
    greenLight:'#00B37E',
    red:'#F75A68',
    darkRed:'#AA2834  ', 
    gray:"#121214",
    gray2:"#202024",
    gray3: "#29292e",
    gray4: "#323238",
    gray5:"#7C7C8A",
    gray6:"#c4c4cc",
    gray7:"#e1e1e6",
    white:'#fff', 
  },
  fonts: {
    main: 'roboto, sans-serif',
  },
};

interface Theme {
  colors: {
    greenDark: string;
    green: string;
    greenLight:string;
    red:string;
    darkRed:string;
    gray:string;
    gray2:string;
    gray3: string;
    gray4: string;
    gray5:string;
    gray6:string;
    gray7:string;
    white:string; 
  };
  fonts: {
    main: string;
  };
}

declare module '@vue-styled-components/core' {
  export interface DefaultTheme extends Theme {}
}
