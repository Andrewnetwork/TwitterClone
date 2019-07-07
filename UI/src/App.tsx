import React from 'react';
import './App.css';
import {Posts,Post} from './Posts';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, Theme, withStyles,WithStyles } from '@material-ui/core/styles';
import Nav from "./components/modules/Nav";
import { Dialog,DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import TweetModal from './components/modules/TweetModal';

interface AppState{
  title:string;
  body:string;
  posts:Post[];
  tweetModalOpen:boolean;
}
const styles = (theme:Theme)=>createStyles({
  textField: {
    width: 200
  },
  container:{
  },
  topBar:{
    borderBottom:"black thin solid"
  }
});
interface AppProps extends WithStyles<typeof styles>{
}
class App extends React.Component<AppProps,AppState> {
  constructor(props:AppProps){
    super(props);
    this.state = {posts:[{title:"Hello",body:"My name is Andrew"}],title:"",body:"",tweetModalOpen:false};
  }
  _addNewPost(){
      this.setState({posts:[...this.state.posts,{title:this.state.title,body:this.state.body}]});
  }
  handleChange(name: keyof AppState){
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ ...this.state, [name]: event.target.value });
    }
  };
  render(){
    let classes = this.props.classes;
    return (
      <Grid container className={this.props.classes.container}>
        <Grid item xs = {12} >
          <Nav tweetButtonHandler={()=>this.setState({tweetModalOpen:true})} />
        </Grid>
        <TweetModal isOpen={this.state.tweetModalOpen} handleChange={(state:AppState)=>this.setState(state)}/>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
