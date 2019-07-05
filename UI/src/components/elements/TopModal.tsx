import { withStyles, Dialog } from "@material-ui/core";
/**
 * A modal which is positioned at the top of the screen instead of the center. 
 */
export const TopModal = withStyles({
    paper: {
        margin: 48,
        position: 'absolute',
        overflowY: 'auto', // Fix IE 11 issue, to remove at some point.
        '@media print': {
          overflowY: 'visible',
          boxShadow: 'none',
        },
        top:"0px"
    }
})(Dialog);
