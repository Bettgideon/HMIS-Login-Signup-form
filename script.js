document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission
    
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check username and password (dummy authentication)
    if(username === "admin" && password === "admin123") {
        alert("Login successful! Redirecting to dashboard...");
        // Redirect to dashboard page (you can replace this with your actual dashboard URL)
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
