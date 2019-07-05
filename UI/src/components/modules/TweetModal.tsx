import { withStyles, Theme, createStyles, Dialog, TextField, WithStyles } from "@material-ui/core";
import React from "react";
import {TopModal} from "../elements"

const styles = (theme:Theme)=>createStyles({
    textField: {
      width: 200
    },
    container:{
    },
    topBar:{
      borderBottom:"black thin solid"
    },
    dialog:{
        position: "absolute",
        top: "0px",
    },
    root:{
        display:"none"
    }
});
interface TweetModalProps extends WithStyles<typeof styles>{
    isOpen:boolean;
}

class TweetModal extends React.Component<TweetModalProps,{}> {
    render(){
        return(
            <TopModal open={this.props.isOpen} aria-labelledby="form-dialog-title">
                <div>
                    Compose new Tweet
                </div>
                <TextField
                id="outlined-multiline-static"
                label=""
                multiline
                rows="4"
                placeholder="What's happening?"
                margin="normal"
                variant="outlined" />
            </TopModal>
        );
    }
}

export default withStyles(styles)(TweetModal);
