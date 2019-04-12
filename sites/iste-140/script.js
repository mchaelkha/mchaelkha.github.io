var elements = document.getElementsByClassName("toc");
var toc = elements[0];
var list_items = toc.getElementsByTagName("ul");
var menu_img = document.getElementById("menu-icon");
var count = 0;

function hideTableOfContents() {
    //toc.style.display = "none";
    console.log("hiding");
    for (var a of list_items) {
        a.style.display = "none";
    }
}

function showTableOfContents() {
    //toc.style.display = "flex";
    for (var a of list_items) {
        a.style.display = "block";
    }
}

menu_img.addEventListener('click', function() {
    if (count % 2 == 1) {
        showTableOfContents();
    }
    else {
        hideTableOfContents();
    }
    count++;
});
