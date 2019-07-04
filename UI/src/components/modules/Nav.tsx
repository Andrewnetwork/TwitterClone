import ColorButton from "../elements/ColorButton";
import React from "react";
import { withStyles, createStyles, Theme, WithStyles, Grid } from "@material-ui/core";

const styles = (theme:Theme)=>createStyles({
    textField: {
        width: 200
    },
    topBar:{
        borderBottom:"black thin solid"
    }
});
interface NavProps extends WithStyles<typeof styles>{
}

class Nav extends React.Component<NavProps,{}> {
    render(){
        return(
            <Grid container>
                <ColorButton /><ColorButton />
            </Grid>
        );
    }
}
export default withStyles(styles)(Nav);