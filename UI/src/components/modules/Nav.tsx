import ColorButton from "../elements/ColorButton";
import home from "../../images/nav/home.svg";
import logo from "../../images/logo.svg";
import moments from "../../images/nav/moments.svg";
import notifications from "../../images/nav/notifications.svg";
import messages from "../../images/nav/messages.svg";
import { Grid, createStyles, Theme, WithStyles, withStyles, Paper, Divider, IconButton, InputBase, Button } from "@material-ui/core";
import React from "react";
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme:Theme)=>createStyles({
    topBar:{
        borderBottom:"black thin solid",
        height:"60px",
        paddingTop:"20px",
        maxHeight:"54px"
    },
    logoCell:{
        textAlign:"center",
        marginTop:"-5px"
    },
    iconButton: {
        padding: 10
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    searchInput:{
        border:"1px gray solid",
        height:"35px",
        borderRadius:"20px",
        paddingLeft: 8
    },
    tweetButtonCell:{
        paddingLeft:"10px",
        marginTop:"-10px"
    },
    searchCell:{
        marginTop:"-16px",
        textAlign:"right",
    }
});
interface NavProps extends WithStyles<typeof styles>{
}
class Nav extends React.Component<NavProps,{}>{
    render(){
        let classes = this.props.classes;
        return(
            <Grid xs = {12} className={classes.topBar} container>
                <Grid item xs = {1}>
                    <ColorButton imgSrc={home} text="Home" />
                </Grid>
                <Grid item xs = {1}>
                    <ColorButton imgSrc={moments} text={"Moments"} />
                </Grid>
                <Grid item xs = {1}>
                    <ColorButton imgSrc={notifications} text={"Notifications"} />
                </Grid>
                <Grid item xs = {1}>
                    <ColorButton imgSrc={messages} text={"Messages"} />
                </Grid>
                <Grid item xs = {4} className={classes.logoCell}>
                    <img src={logo} width="30" height="25"/>
                </Grid>
                <Grid xs={3} item className={classes.searchCell}>
                    <InputBase className={classes.searchInput}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'Search' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                </Grid>
                <Grid xs={1}  item className={classes.tweetButtonCell}>
                    <Button variant="contained" color="primary" onClick={()=>alert("D")}>Tweet</Button>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Nav);