$(document).ready(function () {
    $(".sidebarCollapse").click(function () {
        $(".side-nav-wrapper").toggleClass("isactive");
        $(".dashboard-content").toggleClass("isactive");
        $("header").toggleClass("isactive");
    });
});