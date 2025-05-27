function isEmail(email) {
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}

$("#submitbutton").click(function () {
    let errormessage = "";
    let missingfield = "";

    const email = $("#Email").val().trim();
    const phone = $("#phoneno").val().trim();
    const password = $("#password").val().trim();
    const confirmPassword = $("#confirmpassword").val().trim();

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
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
        if (!strongPasswordRegex.test(password)) {
            errormessage += "<p>Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>";
        }
    }

    // Confirm Password
    if (confirmPassword === "") {
        missingfield += "<p>Confirm password is required.</p>";
    } else if (password !== confirmPassword) {
        errormessage += "<p>Passwords do not match.</p>";
    }

    // Show messages AFTER validation
    if (errormessage === "" && missingfield === "") {
        $("#errors").hide().html("");
        $("#success").html("✅ You are successfully registered!").fadeIn();
    } else {
        $("#success").hide().html("");
        $("#errors").html(errormessage + missingfield).fadeIn();
    }
});

// Allow only digits in phone number input and max 10 digits
$("#phoneno").on("input", function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
});

// Toggle password visibility
$(".toggle-password").on("click", function () {
    const target = $(this).data("target");
    const input = $(target);
    const type = input.attr("type") === "password" ? "text" : "password";
    input.attr("type", type);
    $(this).text(type === "password" ? "Show" : "Hide");
});
