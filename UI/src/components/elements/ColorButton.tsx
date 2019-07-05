import React from "react";

import { createStyles, withStyles, WithStyles, Grid, Theme, Box } from "@material-ui/core";
const styles = (theme:Theme)=>createStyles({
    container:{
        paddingBottom:"17px",
        marginTop:"-5px",
        [theme.breakpoints.down('md')]: {
            width:"25px",
            minWidth:"25px"
        },
        cursor:"pointer",
        maxHeight:"38px",
        marginRight:"5px",
        justifyContent:"center",
        width:"150px"
    },
    icon:{
        filter:"invert(0.4) sepia(0) saturate(1) hue-rotate(0deg) brightness(1)",
        marginRight:"10px"
    },
    iconHover:{
        filter:"invert(0.19) sepia(0.5) saturate(4) hue-rotate(360deg) brightness(1)",
        marginRight:"10px"
    },
    menuText:{
        fontSize:16,
        fontWeight:700,
        color:"#969696",
        lineHeight:"25px",
        marginLeft:"5px",
        height:"25px",
        [theme.breakpoints.down('md')]: {
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
        [theme.breakpoints.down('sm')]: {
            display:"none"
        }
    },
    iconCell:{
        height:"25px",
        float:"left"
    }
});
interface ColorButtonProps extends WithStyles<typeof styles>{
    maxBarPx?:number,
    imgSrc:string,
    text:string,
}
interface ColorButtonState{
    hover:boolean,
    bottomBarPx:number
}
class ColorButton extends React.Component<ColorButtonProps,ColorButtonState>{
    growInterval?:number;
    shrinkInterval?:number;
    maxBarPx:number;
    static defaultProps = {maxBarPx:3};

    constructor(props:ColorButtonProps){
        super(props);
        this.state = {hover:false,bottomBarPx:0};
        this.growInterval = undefined;
        this.maxBarPx = props.maxBarPx == undefined ? ColorButton.defaultProps.maxBarPx : props.maxBarPx
    }
    growBorder(){
        if(this.state.bottomBarPx>=this.maxBarPx){
            if(this.growInterval != undefined){
                window.clearInterval(this.growInterval);
            }
        }else{
            this.setState({bottomBarPx:this.state.bottomBarPx+1});
        }
    }
    shrinkBorder(){
        if(this.state.bottomBarPx<=0){
            if(this.shrinkInterval != undefined){
                window.clearInterval(this.shrinkInterval);
            }
        }else{
            this.setState({bottomBarPx:this.state.bottomBarPx-1});
        }
    }
    _mouseOver(){
        if(this.shrinkInterval != undefined){
            window.clearInterval(this.shrinkInterval);
        }
        if(this.growInterval == undefined){
            this.growInterval = window.setInterval(()=>this.growBorder(),25);
        }
    }
    _mouseLeave(){
        window.clearInterval(this.growInterval);
        this.growInterval = undefined;
        this.shrinkInterval = window.setInterval(()=>this.shrinkBorder(),25);
    }
    render(){
        return(
            <Box style={{borderBottom:`#FFD26C ${this.state.bottomBarPx}px solid`}} className={this.props.classes.container} onMouseOver={()=>this._mouseOver()} 
                onMouseLeave={()=>this._mouseLeave()}>
                <Box className={this.props.classes.iconCell}>
                    <img width="25" height="25" src={this.props.imgSrc} 
                        className={this.state.bottomBarPx>=this.maxBarPx ?  this.props.classes.iconHover : this.props.classes.icon}/>
                </Box>
                <Box className={this.state.bottomBarPx>=this.maxBarPx ?  this.props.classes.menuTextHover : this.props.classes.menuText}>
                        {this.props.text}
                </Box>
            </Box>
        );  
    }
}
export default withStyles(styles)(ColorButton);