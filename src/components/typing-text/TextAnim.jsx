import { useEffect, useState } from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import CursorBlinker from './CursorBlinker';

// export default function TextAnim() {
//   const baseText = 'Reagan Lee';
//   const count = useMotionValue(0);
//   const [displayText, setDisplayText] = useState('');
//   const [highlight, setHighlight] = useState(false); // State to control highlighting
//   const [bold, setBold] = useState(false); // State to control bold text

//   useEffect(() => {
//     // Delay the start of the animation by 1 second
//     const delay = setTimeout(() => {
//       const controls = animate(count, baseText.length, {
//         type: 'tween',
//         duration: 2,
//         ease: 'easeInOut',
//         onComplete: () => {
//           setHighlight(true);
//           setTimeout(() => {
//             setHighlight(false);
//             setBold(true);
//           }, 2000); // Further delay as needed
//         },
//       });

//       // Cleanup function to stop the animation if the component unmounts
//       return () => {
//         controls.stop();
//         clearTimeout(delay); // Clear the timeout if the component unmounts before the delay is over
//       };
//     }, 5000); // Delay animation start by 1000 milliseconds

//     // Cleanup function for the useEffect hook itself
//     return () => clearTimeout(delay);
//   }, [baseText, count]);

//   useEffect(() => {
//     // Subscribe to changes in `count` and update displayed text
//     const unsubscribe = count.onChange(() => {
//       setDisplayText(baseText.slice(0, Math.round(count.get())));
//     });

//     // Cleanup by unsubscribing from changes
//     return () => unsubscribe();
//   }, [baseText, count]);

//   return (
//     <Flex alignItems="center">
//       {/* <Box p={0} m={5} ml={0} mr={0}> */}
//       <Box
//         as={motion.span}
//         bg={highlight ? '#B4D8FD' : 'transparent'} // Apply blue background when highlighted
//         fontWeight={bold ? 'bold' : 'normal'} // Make text bold
//         color={highlight ? 'black' : 'black'} // Ensure text color contrasts with background
//         // height="4.5rem"
//         justify="center"
//         alignItems="center"
//       >
//         <Text fontFamily="Poppins" fontSize="5xl">
//           {displayText}
//         </Text>
//       </Box>
//       {/* </Box> */}
//       <CursorBlinker visible={!highlight} />
//     </Flex>
//   );
// }

// ####
export default function TextAnim() {
  const baseText = 'Reagan Lee';
  const count = useMotionValue(0);
  const [displayText, setDisplayText] = useState('');
  const [highlight, setHighlight] = useState(false);
  const [bold, setBold] = useState(false);

  useEffect(() => {
    // Delay the start of the animation by 1 second
    const delay = setTimeout(() => {
      const controls = animate(count, baseText.length, {
        type: 'tween',
        duration: 1.5,
        ease: 'easeInOut',
        onComplete: () => {
          setHighlight(true);
          setTimeout(() => {
            setHighlight(false);
            setBold(true);
          }, 1000); // Further delay as needed
        },
      });

      // Cleanup function to stop the animation if the component unmounts
      return () => {
        controls.stop();
        clearTimeout(delay); // Clear the timeout if the component unmounts before the delay is over
      };
    }, 1000); // Delay animation start by 1000 milliseconds

    // Cleanup function for the useEffect hook itself
    return () => clearTimeout(delay);
  }, [baseText, count]);

  useEffect(() => {
    // Subscribe to changes in `count` and update displayed text
    const unsubscribe = count.onChange(() => {
      setDisplayText(baseText.slice(0, Math.round(count.get())));
    });

    // Cleanup by unsubscribing from changes
    return () => unsubscribe();
  }, [baseText, count]);

  return (
    <Flex fontSize="5xl" alignItems="center" p={0} m={5} ml={0} mr={0}>
      <Box
        as={motion.span}
        bg={highlight ? '#B4D8FD' : 'transparent'}
        fontWeight={bold ? 'bold' : 'normal'}
        color={highlight ? 'black' : 'black'}
      >
        <Text fontFamily="Poppins" fontSize="5xl">
          {displayText}
        </Text>
      </Box>
      <CursorBlinker visible={!highlight} />
    </Flex>
  );
}
