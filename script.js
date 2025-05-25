          var errormessage="";
           var missingfield="";
         function isEmail(email) {
          var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          return regex.test(email);
           }
           $("#submitbutton").click(function () {
               missingfield = "";
               errormessage = "";
               
               $("#errors").html("");
               $("#success").html("");
           
               const email = $("#Email").val();
               const phone = $("#phoneno").val();
               const password = $("#password").val();
               const confirmPassword = $("#confirmpassword").val();
           
               // Email
               if (email === "") {
                   missingfield += "<p>Email is required.</p>";
               } else if (!isEmail(email)) {
                   errormessage += "<p>Email ID is not valid.</p>";
               }
           
               // Phone number
               if (phone === "") {
                   missingfield += "<p>Phone number is required.</p>";
               } else if (!/^\d{10}$/.test(phone)) {
                   errormessage += "<p>Phone number must be exactly 10 digits.</p>";
               }
           
               // Password
               if (password === "") {
                   missingfield += "<p>Password is required. Please choose a strong password.</p>";
               } else {
                   // Check password strength
                   const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
                   if (!strongPasswordRegex.test(password)) {
                       errormessage += "<p>Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>";
                   }
               }
           
               // Confirm Password
               if (password !== confirmPassword) {
                   errormessage += "<p>Passwords do not match.</p>";
               }
           
               // Final result
               if (errormessage === "" && missingfield === "") {
                   $("#success").html("You are registered");
               } else {
                   $("#errors").html(errormessage + missingfield);
               }
           });