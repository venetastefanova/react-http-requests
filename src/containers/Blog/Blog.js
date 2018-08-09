import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink,Switch,Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../hoc/asyncComponent';

// import NewPost from './NewPost/NewPost';

//dynamic import of newPost only when the const is called somewhere
const AsyncNewPost =  asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
class Blog extends Component {
    state = {
        auth:true
    }
    render () {     
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/"
                                exact
                                activeClassName="my-active">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true'
                            }} exact>New</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts/" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* redirects if the condition up is not true */}
                    {/* <Redirect from="/" to="/posts"/>  */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;