import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import FullPost2 from '../../components/FullPost/FullPost2';
import PractiseBp from '../../components/reactbs/reactbsps';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';


import {Button } from 'react-bootstrap';
import PractiseBs from '../../components/reactbs/reactbsps';

// class Blog extends Component {
//     state = {
//         posts: [],
//         selectedPostId: null
//     }

//     componentDidMount () {
//         axios.get( 'https://jsonplaceholder.typicode.com/posts' )
//             .then( response => {
//                 const posts = response.data.slice(0, 4);
//                 const updatedPosts = posts.map(post => {
//                     return {
//                         ...post,
//                         author: 'Max'
//                     }
//                 });
//                 this.setState({posts: updatedPosts});
//                 // console.log( response );
//             } );
//     }

//     postSelectedHandler = (id) => {
//         this.setState({selectedPostId: id});
//     }

//     render () {
//         const posts = this.state.posts.map(post => {
//             return <Post 
//                 key={post.id} 
//                 title={post.title} 
//                 author={post.author}
//                 clicked={() => this.postSelectedHandler(post.id)} />;
//         });

//         return (
//             <div>
//                 <section className="Posts">
//                     {posts}
//                 </section>
//                 <section>
//                     <FullPost id={this.state.selectedPostId} />
//                 </section>
//                 <section>
//                     <NewPost />
//                 </section>
//             </div>
//         );
//     }
// }

class Blog extends Component {

// Methods and States will be defined here
// componentDidMount -- Method Name is Important.

state = {
   posts : [],
   singlePostId : null
}
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
       console.log(response.data);
      const posts = response.data.slice(0,4);
      
      const addAuthor = posts.map(post => {
          return {
              ...post,
              author : "Shyam Singh"
          }
      })
       this.setState({posts : addAuthor});
    })
}

singlePostHandler = (id) => {
    // console.log("single post is clicked" + id);
    this.setState({singlePostId: id})
//    console.log(this.state.singlePostId);
}


    render() {
        const headerCenter = {
            textAlign : "center"
        }

        const posts = this.state.posts.map(post => {
            return <Post title = {post.title}
            author = {post.author}
            key = {post.id}
            postcallId = {this.state.singlePostId}
            clicked = {()=> this.singlePostHandler(post.id)}
            />
        })
        return (
            <div>
                 <h1 style = {headerCenter}>Welcome to the React with axios</h1>
                <section className = 'Posts'>
               {posts}
                </section>
                <section>
                    {/* <FullPost id ={this.state.singlePostId} /> */}
                    <FullPost2 id ={this.state.singlePostId} />
                </section>
                <section>
                    <NewPost />
                </section>
                <PractiseBs />
            </div>
        )
    }
}

export default Blog;