let settingsIcon = document.getElementById("settings-icon");
let settingsMenu = document.getElementById("settings-menu");
let darkBtn = document.getElementById("dark-btn");

settingsIcon.addEventListener("click", function(){
    settingsMenu.classList.toggle('display-menu');
});

darkBtn.addEventListener("click", () => {
    darkBtn.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
})

function changeTheme(){
    if(localStorage.getItem("theme") == "light"){
        darkBtn.classList.remove("dark-mode");
        document.body.classList.remove("dark-theme");   
    }else if(localStorage.getItem("theme") == "dark"){
        darkBtn.classList.add("dark-mode");
        document.body.classList.add("dark-theme");
    }else{
        localStorage.setItem("theme", "light");
    }
}

changeTheme();