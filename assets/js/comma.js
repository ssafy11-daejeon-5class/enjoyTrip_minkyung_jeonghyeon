window.onload = function () {
    // loadJSON('../resources/menu.json',
    //     function (data) { console.log(data); },
    //     function (xhr) { console.error(xhr); }
    // );

    initMenu();
}

function initMenu() {
    let menuCard = document.getElementById("menuCard").innerHTML;
    
}

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
