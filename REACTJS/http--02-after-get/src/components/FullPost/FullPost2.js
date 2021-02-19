import React, {Component} from 'react';
import axios from 'axios';

import './FullPost.css';
import Spinner from '../UI/Spinners/Spinner';
import post from '../Post/Post';

class FullPost2 extends Component {
     state = {
          loadedPost : null
     }

     componentDidUpdate() {
          if(this.props.id){
               if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !==  this.props.id)) {
               axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
               .then(response => {
                    this.setState( { loadedPost: response.data })
               })
               .catch(error => {
                    throw new Error(error) ;
               })
          }
     }
          
     }
     deleteHandler = () => {
          console.log("Clicke is working");
          axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then(response => {
               console.log(response);   
          })
     }

     render(){
          let posts = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
          if(this.props.id){
               // posts =  <p style = {{textAlign : 'center'}}>Loading...!</p>
               // console.log('first if is working');
               posts = <Spinner style = {{textAlign : 'center'}} />
               console.log("spinner is working");
          }
          if(this.state.loadedPost) {
               console.log("second if is started");
               posts = ( <div className="FullPost">
               <h1> full post 2{this.state.loadedPost.title}</h1>
               <p>{this.state.loadedPost.body}</p>
               <div className="Edit">
                   <button className="Delete" onClick = {this.deleteHandler}>Delete</button>
               </div>
           </div>)
          }
     return(
          posts
     )
     }
}

export default FullPost2;