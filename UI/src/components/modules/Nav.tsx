import home                                  from "../../images/nav/home.svg";
import logo                                  from "../../images/logo.svg";
import moments                               from "../../images/nav/moments.svg";
import messages                              from "../../images/nav/messages.svg";
import notifications                         from "../../images/nav/notifications.svg";
import React                                 from "react";
import SearchIcon                            from '@material-ui/icons/Search';
import ColorButton                           from "../elements/ColorButton";
import { Grid,createStyles,Theme,WithStyles, 
         withStyles,IconButton, 
         InputBase,Button }                  from "@material-ui/core";


const styles = (theme:Theme)=>createStyles({
    topBar:{
        borderBottom:"black thin solid",
        height:"50px",
        paddingTop:"10px",
        maxHeight:"54px",
        textAlign:"center"
    },
    logo:{
        textAlign:"center",
        width:"30px",
        display:"inline",
        lineHeight:"50px"
    },
    iconButton: {
        padding: 10
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
    },
    buttonContainer:{
        float:"left",
        marginLeft:"-10px"
    },
    rightContainer:{
        float:"right",
        marginRight:"10px"
    }
});
interface NavProps extends WithStyles<typeof styles>{
}
class Nav extends React.Component<NavProps,{}>{
    render(){
        let classes = this.props.classes;
        return(
            <div className={classes.topBar}>
                <div className={classes.buttonContainer}>
                    <ColorButton imgSrc={home} text="Home" />
                    <ColorButton imgSrc={moments} text={"Moments"} />
                    <ColorButton imgSrc={notifications} text={"Notifications"} />
                    <ColorButton imgSrc={messages} text={"Messages"} />
                </div>
                <div className={classes.logo}>
                    <img src={logo} width="30" height="25"/>
                </div>
                <div className={classes.rightContainer}>
                    <InputBase className={classes.searchInput}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'Search' }} />
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                    <Button variant="contained" color="primary" onClick={()=>alert("D")}>
                        Tweet
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Nav);