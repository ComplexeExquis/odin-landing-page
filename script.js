let state = 0;

document.getElementsByClassName("menu-icon")[0].addEventListener('click' ,function() {
    const dropDownMenu = document.getElementById("drop-down-menu");

    if (state === 0) {
        dropDownMenu.style.display = "block";
        state = 1;
    }
    else {
        dropDownMenu.style.display = "none";
        state = 0;
    }
});

