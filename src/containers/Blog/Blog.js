import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state= {
        posts: []
    }
    //this method is the right place to do AJAX call
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            //gets the first 4 posts
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post, // distributes the properties of the post
                    author: 'Veneta' // and adding a new one
                }
            })
            this.setState({posts:updatedPosts}); // changing the state after the return of the promise
            return console.log(response);
        });
    }
    render () {

        const posts = this.state.posts.map(post=>{
            return <Post key={post.id} title={post.title} author={post.author}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;