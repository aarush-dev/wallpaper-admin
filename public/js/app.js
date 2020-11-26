   
var firebaseConfig = {
    apiKey: "AIzaSyD1JngDva9oDA72i9EpEW-uXTqzlAipQaw",
    authDomain: "wallpaper-admin-d8f81.firebaseapp.com",
    databaseURL: "https://wallpaper-admin-d8f81.firebaseio.com",
    projectId: "wallpaper-admin-d8f81",
    storageBucket: "wallpaper-admin-d8f81.appspot.com",
    messagingSenderId: "463585061356",
    appId: "1:463585061356:web:3bebdf771e7868200438c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }