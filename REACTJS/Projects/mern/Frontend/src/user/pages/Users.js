import React from 'react'

import UserList from '../components/UsersList';

const USERS = [{
     id : "u1",
     name : "Shyam Singh",
     image : "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
     places : 3
     }]


const Users = () => {
     return <UserList items = {USERS} />
}

export default Users;