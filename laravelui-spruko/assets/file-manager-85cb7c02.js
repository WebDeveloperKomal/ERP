(function() {
    var t = document.getElementById("files-main-nav");
    new SimpleBar(t, { autoHide: !0 });
    var l = document.getElementById("file-folders-container");
    new SimpleBar(l, { autoHide: !0 });
    var n = document.getElementById("filemanager-file-details");
    new SimpleBar(n, { autoHide: !0 }), document.querySelectorAll(".files-list > tr > th").forEach(e => { e.onclick = () => { window.screen.width <= 1200 && document.querySelector(".selected-file-details").classList.add("open") } }), document.querySelector("#file-close-btn").onclick = () => { document.querySelector(".selected-file-details").classList.remove("open") }, document.querySelectorAll(".files-type").forEach(e => { e.onclick = () => { window.screen.width <= 575 && (document.querySelector(".file-manager-folders").classList.add("open"), document.querySelector(".file-manager-navigation").classList.add("close")) } }), document.querySelector("#folders-close-btn").onclick = () => { document.querySelector(".file-manager-navigation").classList.remove("close"), document.querySelector(".file-manager-folders").classList.remove("open") }, window.addEventListener("resize", () => { window.screen.width > 576 && document.querySelector(".file-manager-navigation").classList.remove("close") })
})();