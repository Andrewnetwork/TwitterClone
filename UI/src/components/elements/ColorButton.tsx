import React from "react";
import logo from "../../images/nav/home.svg";
import { createStyles, withStyles, WithStyles, Grid, Theme } from "@material-ui/core";
const styles = (theme:Theme)=>createStyles({
    container:{
        width:"80px",
        paddingBottom:"10px",
        marginBottom:"-12px",
        [theme.breakpoints.down('xs')]: {
            width:"25px"
        },
        cursor:"pointer",
        maxHeight:"33px",
        marginRight:"5px"
    },
    icon:{
        filter:"invert(0.4) sepia(0) saturate(1) hue-rotate(0deg) brightness(1)"
    },
    iconHover:{
        filter:"invert(0.19) sepia(0.5) saturate(4) hue-rotate(360deg) brightness(1)"
    },
    menuText:{
        fontSize:16,
        fontWeight:700,
        color:"#969696",
        lineHeight:"25px",
        marginLeft:"5px",
        height:"25px",
        [theme.breakpoints.down('xs')]: {
            display:"none"
        }
    },
    menuTextHover:{
        fontSize:16,
        fontWeight:700,
        color:"#FFD26C",
        lineHeight:"25px",
        marginLeft:"5px",
        height:"25px",
        [theme.breakpoints.down('xs')]: {
            display:"none"
        }
    },
    iconCell:{
        height:"25px"
    }
});
interface ColorButtonProps extends WithStyles<typeof styles>{
}
interface ColorButtonState{
    hover:boolean,
    bottomBarPx:number
}
class ColorButton extends React.Component<ColorButtonProps,ColorButtonState>{
    growInterval?:number;

    constructor(props:ColorButtonProps){
        super(props);
        this.state = {hover:false,bottomBarPx:0};
        this.growInterval = undefined;
    }
    growBorder(){
        if(this.state.bottomBarPx>=3 || !this.state.hover){
            if(this.growInterval != undefined){
                window.clearInterval(this.growInterval);
            }
        }else{
            this.setState({bottomBarPx:this.state.bottomBarPx+0.5});
        }
    }
    _mouseOver(){
        this.setState({hover:true});
        this.growInterval = window.setInterval(()=>this.growBorder(),50);
    }
    _mouseLeave(){
        this.setState({hover:false,bottomBarPx:0});
    }
    render(){
        return(
            <Grid style={{borderBottom:`#FFD26C ${this.state.bottomBarPx}px solid`}} className={this.props.classes.container} container onMouseOver={()=>this._mouseOver()} 
                onMouseLeave={()=>this._mouseLeave()}>
                <Grid item className={this.props.classes.iconCell}>
                    <img width="25" height="25" src={logo} 
                        className={this.state.bottomBarPx>=3 ?  this.props.classes.iconHover : this.props.classes.icon}/>
                </Grid>
                <Grid item 
                    className={this.state.bottomBarPx>=3 ?  this.props.classes.menuTextHover : this.props.classes.menuText}>
                        Home
                </Grid>
            </Grid>
        );  
    }
}
export default withStyles(styles)(ColorButton);