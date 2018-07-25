import React, { Component } from 'react';
import axios from '../../../axios'; // import our own instance
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state= {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
   }
    
    //this method is the right place to do AJAX call
    componentDidMount(){
        axios.get("/posts")
        .then(response=>{
            //gets the first 4 posts
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post, // distributes the properties of the post
                    author: 'Veneta' // and adding a new one
                }
            });
            this.setState({posts:updatedPosts}); // changing the state after the return of the promise
           // return console.log(response);
        })
        .catch(error=>{
            console.log(error);
          //this.setState({error:true});//changing the state and setting sthe error to true
        });
    }
    render(){
        let posts = <p style={{textAlign:'center'}}>Woops, something went wrong!</p>;
        
        if(!this.state.error){
        
            posts = this.state.posts.map(post=>{
                return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={()=>this.postSelectedHandler(post.id)}/>;
        });
    }
        return(
            <section className="Posts">
                    {posts}
             </section>

        );
    }
}

export default Posts;