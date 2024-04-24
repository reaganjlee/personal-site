import { extendTheme } from '@chakra-ui/react';
// import '@fontsource/montserrat-alternates';
// import '@fontsource/rajdhani';
// import '@fontsource/heebo';
// import '@fontsource/josefin-sans';
import '@fontsource/poppins';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FFFFFF',
        // color: 'black',
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    // body: `'Open Sans', sans-serif`,
    // body: `montserrat-alternates', sans-serif`,
    // mono: `montserrat-alternates', sans-serif`,
    // heading: `montserrat-alternates', sans-serif`,
    // body: `montserrat-alternates', sans-serif`,
    // heading: `'josefin-sans', montserrat`,
    // body: `'heebo', montserrat`,
  },
});

export default theme;
