
const firebaseConfig = {
      apiKey: "AIzaSyDSJhAP1qqQ7o4R3zZ2X45sicq6gCbLgWo",
      authDomain: "kwitter-d84ad.firebaseapp.com",
      databaseURL: "https://kwitter-d84ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-d84ad",
      storageBucket: "kwitter-d84ad.appspot.com",
      messagingSenderId: "941717890224",
      appId: "1:941717890224:web:ce0757a0bec8c2a6598775"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

  function addroom(){
    uget_room_name=document.getElementById("get_room_name").value;
    localStorage.setItem("get_room_name",user_name);
    window.location="kwitter_page.html";
    firebase.database().ref("/").child("get_room_name").update({purpose :"adding room name"});
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
