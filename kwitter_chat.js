
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwdojFGtPVz83pEoYC-putrNcH_QGI0UU",
    authDomain: "project-94-af5a9.firebaseapp.com",
    databaseURL: "https://project-94-af5a9-default-rtdb.firebaseio.com",
    projectId: "project-94-af5a9",
    storageBucket: "project-94-af5a9.appspot.com",
    messagingSenderId: "293344778149",
    appId: "1:293344778149:web:8682c7d658510c88107a4c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();
