
         // Import the functions you need from the SDKs you need
            import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
            import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              apiKey: "AIzaSyCN4P0iiNwPiseDdyvRCn1xYlv0lK04MIU",
              authDomain: "capstone-project-555d8.firebaseapp.com",
              projectId: "capstone-project-555d8",
              storageBucket: "capstone-project-555d8.appspot.com",
              messagingSenderId: "744931988718",
              appId: "1:744931988718:web:f5ec69cc02501ae9cccfff",
              measurementId: "G-DQBV3XBRZ7"
            };
          
          

  // Initialize Firebase
            const app = initializeApp(firebaseConfig);

   //get ref to database services
             const db = getDatabase(app);

             document.getElementById("submit").addEventListener('click', function(e){
              e.preventDefault();
              set(ref(db, 'user/' + document.getElementById("username").value),
              {
   
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                PhoneNumber: document.getElementById("phone").value

              });
            })
                let loginSuccessful = false;

                document.getElementById("submit").addEventListener('click', function(e){
                e.preventDefault();
                set(ref(db, 'user/' + document.getElementById("username").value),
                {
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    PhoneNumber: document.getElementById("phone").value
                });

                // Assume login is successful if data is set successfully
                loginSuccessful = true;

                if (loginSuccessful) {
                    window.location.href = "file:///C:/Users/LENOVO/Desktop/cap/cap.html";
                }
                });
       