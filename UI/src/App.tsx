import React from 'react';
import './App.css';
import {Posts,Post} from './Posts';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { createStyles, Theme, withStyles,WithStyles } from '@material-ui/core/styles';
import Nav from "./components/modules/Nav";

interface AppState{
  title:string;
  body:string;
  posts:Post[];
}
const styles = (theme:Theme)=>createStyles({
  textField: {
    width: 200
  },
  container:{
    paddingBottom:"0px"
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
    this.state = {posts:[{title:"Hello",body:"My name is Andrew"}],title:"",body:""};
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
    let classes = this.props.classes
    return (
      <Grid container spacing={3} className={this.props.classes.container}>
        <Grid item xs = {12} >
          <Nav />
        </Grid>
        <Grid item xs ={6}>
          <TextField
            id="title"
            label="Title"
            className={this.props.classes.textField}
            onChange={this.handleChange("title")}
            margin="normal"
          />
          <br/>
          <TextField
            rows="4"
            id="body"
            multiline
            label="Body"
            className={this.props.classes.textField}
            onChange={this.handleChange("body")}
            margin="normal"
            variant="outlined"
          />
          <br/>
          <Button variant="contained" color="primary" onClick={()=>this._addNewPost()}>Add New</Button>
        </Grid>
        <Grid item xs ={6}>
          <Posts posts={this.state.posts}/>
        </Grid>
        
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
