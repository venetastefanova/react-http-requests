import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    //changing to component DidMount because now we are not updating it, but adding or removing it from the DOM
    componentDidMount(){
        console.log(this.props); // checking what props it passes so we can pass the id
        if(this.props.match.params.id){ // avoids creating infinity loop
            //we make the request if we dont have the loaded post OR if we do have it, but the IDs is different
            if(!this.state.loadedPost || (this.state.loadedPost.id !== this.props.id)){
                axios.get("/posts/" + this.props.match.params.id)
                .then(response=>{
                    this.setState({loadedPost:response.data});
                });
            }
            
        }
        
    }

    // deleting the selected  post, by passing id as props
    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.id)
            .then(response=> {
                console.log(response);
            });
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            let post = <p style={{textAlign: 'center'}}>Loading...</p>;
            
        }
        if(this.state.loadedPost){
            if(this.props.id !== this.state.loadedPost.id){// without this check, it flashes the loading only once in the beginning
                let post = <p style={{textAlign: 'center'}}>Loading...</p>;              
            }
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
      
        return post;
    }
}

export default FullPost;