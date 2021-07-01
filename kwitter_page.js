//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA4LhEx9C9UgW4EoPmeomMn4L_Yscxcies",
    authDomain: "class-93-d950c.firebaseapp.com",
    databaseURL: "https://class-93-d950c-default-rtdb.firebaseio.com",
    projectId: "class-93-d950c",
    storageBucket: "class-93-d950c.appspot.com",
    messagingSenderId: "939950555516",
    appId: "1:939950555516:web:d64ebcca781fda703b24f9",
    measurementId: "G-L5WM45HHSF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });
}
function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location.replace("index.html"); }
