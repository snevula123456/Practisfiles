document.getElementById('button').addEventListener('click', loadText)

function loadText(){
     console.log("button clicked");
     let xhr = new XMLHttpRequest();

     xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

     xhr.onload  = function(){
          if(this.status === 200){
               console.log(this.responseText);
               let users = JSON.parse(this.responseText);
               console.log(users);
               let output1 = " ";
               for (var i in users) {
                    output1 += 
               `<li>${users[i].title}</li>`+
               `<li>${users[i].body}</li>`
               }
               document.getElementById('jsonplaceholder').innerHTML = output1;
               
          }
     }

     xhr.send()
}

// Axios Coding for Javascript
// Get
document.getElementById("Axios").addEventListener('click', getUsers);

function getUsers(){
//    axios.get('https://jsonplaceholder.typicode.com/posts')
axios({
     method : "get",
     url :  "https://jsonplaceholder.typicode.com/posts",
     // params : {
     //      _limit : 5
     // }
})
   .then((response) => {
      console.log(response);
     //    console.log(response.data);

     // let axiosjsonresponse = (this.responseText);
     // console.log(axiosjsonresponse);
     // document.getElementById('axiosresponse').innerHTML = axiosjsonresponse;
     let user = response.data
     console.log(user);
     let output ;
    for(var i in user)
      output += 
     `<li>Body : ${user[i].body}</li>`+
     `<li>${user[i].title}</li>`+
     `<li>${user[i].userId}</li>`

     document.getElementById('Showresponse').innerHTML = output;
   })
   .catch(err => console.log(err));
}

//  Post Axios
axios({
     method : "post",
     url : "https://jsonplaceholder.typicode.com/posts",
     data : {
          body: "New post from Axios 2",
          title: "New post title2" ,
          Completed: false
     }
})
.then((res) => {
     console.log(res);
})

  
