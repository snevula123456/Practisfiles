import React from 'react'

import UserItem from './UserItem';
import Card from '../../shared/components/UIelements/Card'
import './UsersList.css';


const UserList = (props) => {
     if(props.items.length === 0){
          return (
               <div className = "center">
                    <Card>
                         <h2>No Users Found.</h2>
                    </Card>
               </div>
          );
     }

     return (
               <ul className = "users-list">
               {props.items.map(user => 
                    <UserItem 
                    key = {user.id}
                    id = {user.id}
                    name = {user.name}
                    image = {user.image}
                    placeCount = {user.places} 
                    />
               )}
               </ul>
           );     
     
};

export default UserList;