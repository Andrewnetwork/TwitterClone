import React from 'react';
export interface Post{
    title:string;
    body:string;
}
interface PostProps{
    posts:Post[];
}
export class Posts extends React.Component<PostProps,{}>{
    render(){
        let postsJSX = this.props.posts.map((pos)=>{
            return (
                <div>
                    <div>{pos.title}</div>
                    <div>{pos.body}</div>
                </div>
            );
        })
        return postsJSX;
    }
}