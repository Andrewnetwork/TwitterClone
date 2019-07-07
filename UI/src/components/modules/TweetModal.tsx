import { withStyles, Theme, createStyles, Dialog, TextField, WithStyles, Button } from "@material-ui/core";
import React from "react";

const styles = (theme:Theme)=>createStyles({
    textField: {
      width: "500px",
      "&:hover":{
          backgroundColor:"white"
      },
      "&:not(:focus)":{
        backgroundColor:"white"
      }
    },
    paperStyle:{
        margin: 48,
        position: 'absolute',
        overflowY: 'auto', // Fix IE 11 issue, to remove at some point.
        '@media print': {
          overflowY: 'visible',
          boxShadow: 'none',
        },
        top:"0px"
    },
    title:{
        fontSize:"20px",
        fontWeight:"bold",
        textAlign:"center",
        padding:"10px"
    },
    bottomContainer:{
        backgroundColor:"rgb(255,210,108)",
        borderTop:"rgb(255,197,62) solid thick",
        padding:"10px"
    },
    buttonContainer:{
        textAlign:"center"
    }
});
interface TweetModalProps extends WithStyles<typeof styles>{
    isOpen:boolean;
    handleChange:Function;
}

class TweetModal extends React.Component<TweetModalProps,{}> {
    render(){
        return(
            <Dialog open={this.props.isOpen} PaperProps={{className:this.props.classes.paperStyle}} onClose={()=>this.props.handleChange({tweetModalOpen:false})} aria-labelledby="form-dialog-title">
                <div className={this.props.classes.title}>
                    Compose new Tweet
                </div>
                <div className={this.props.classes.bottomContainer}>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows="4"
                        placeholder="What's happening?"
                        margin="normal"
                        variant="filled" 
                        InputProps={{
                            className: this.props.classes.textField
                        }}
                    />
                    <div className={this.props.classes.buttonContainer}>
                        <Button variant="contained" color="primary" onClick={()=>this.props.handleChange({tweetModalOpen:false})}>
                            Tweet
                        </Button>
                    </div>
                </div>
                
            </Dialog>
        );
    }
}

export default withStyles(styles)(TweetModal);
