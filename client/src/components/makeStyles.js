import { createMakeStyles } from 'tss-react';

const theme = {
   backgroundSurfaceColor: 'lightGrey',
};

function useTheme() {
   return theme;
}

export const {
   makeStyles,
   useStyles, //<- To use when you need css or cx but don't have custom classes
} = createMakeStyles({ useTheme });
