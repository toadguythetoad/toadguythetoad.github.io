function show(id) {

    var check = document.getElementById(id);
    if (check.style.display == "none" || check.style.display == "") {
        check.style.display = "inline-block";
        eraseCookie(id)
        createCookie(id, 'inline-block', 1)
    } else {
        check.style.display = "none";
        eraseCookie(id)
        createCookie(id, 'none', 1)
    }
}

function load(page) {
    parent.parent.location.hash = page;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var mainpage = parent.frames["main"];
        mainpage.location.href = page;
        return;
    } else {
        parent.document.getElementById('frameSet1').cols = "20%,*,20%";
        parent.document.getElementById('frameSet3').rows = "65%,*";
        var mainpage = parent.frames["related"];
        mainpage.location.href = "related.html";
        var mainpage = parent.frames["main"];
        mainpage.location.href = page;
    }
}

function infoLoad(page) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    } else {
        var relatedpage = parent.frames["related"];
        relatedpage.location.href = page;
    }
}


function inLoad(address) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var mainpage = parent.frames["main"];
        mainpage.src = address;
    } else {
        parent.document.getElementById('frameSet1').cols = "20%,*,35%";
        parent.document.getElementById('frameSet3').rows = '2.5%,*';
        var mainpage = parent.frames["related"];
        mainpage.location.href = address;
    }
}

function popUp(URL) {
    return window.open(URL);
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}