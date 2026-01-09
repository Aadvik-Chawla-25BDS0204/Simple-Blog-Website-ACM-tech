// only single password authentication for admin, we cant save more than one password type
var PASSWORD = "adminlogin";

var savedTitle = localStorage.getItem("blogTitle");
var savedImage = localStorage.getItem("blogImage");
var savedContent = localStorage.getItem("blogContent");

if (savedTitle !== null) {
    document.getElementById("title").innerText = savedTitle;
}

if (savedImage !== null) {
    document.getElementById("image").src = savedImage;

}

if (savedContent !== null) {
    document.getElementById("content").innerText = savedContent;


}

function adminLogin() {
    var inputPassword = prompt("Enter admin password");

    if (inputPassword === PASSWORD) {
        document.getElementById("adminPanel").style.display = "block";
        alert("Admin login successful");
    } else {
        alert("Wrong password. Try again.");
    }

}

function saveBlog() {
    var titleInput = document.getElementById("newTitle").value;
    var imageInput = document.getElementById("newImage").value;
    var contentInput = document.getElementById("newContent").value

    if (titleInput !== "") {
        document.getElementById("title").innerText = titleInput;
        localStorage.setItem("blogTitle", titleInput);
    }

    if (imageInput !== "") {
        document.getElementById("image").src = imageInput;

        localStorage.setItem("blogImage", imageInput);
    }

    if (contentInput !== "") {
        document.getElementById("content").innerText = contentInput;
        localStorage.setItem("blogContent", contentInput);
    }

    alert("Blog saved successfully");
    document.getElementById("newTitle").value = "";
    document.getElementById("newImage").value = "";
    document.getElementById("newContent").value = "";

}
