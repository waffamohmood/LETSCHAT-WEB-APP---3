// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Iq7_hawwu6P9NbpHtWv-YK77XZOHuLE",
  authDomain: "kwitter-692a9.firebaseapp.com",
  databaseURL: "https://kwitter-692a9-default-rtdb.firebaseio.com",
  projectId: "kwitter-692a9",
  storageBucket: "kwitter-692a9.appspot.com",
  messagingSenderId: "381655349175",
  appId: "1:381655349175:web:58b8c5807f7b72d6265a32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }