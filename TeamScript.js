$(document).ready(function () {
    $("#PositionFilter").change(function () {
        $("#PlayerTable td:eq(0)").html("Abe Beetah <p id = 'Prof1' class = 'ProfileButton'>Profile</p>");
        $("#PlayerTable td:eq(1)").html("Andy Beater <p id = 'Prof2' class = 'ProfileButton'>Profile</p>");
        
        var str = $("#NameFilter").val();
        if (str.toLowerCase().indexOf("ab") >= 0) {
            $("#PlayerTable td:eq(0)").html("Abe Beetah <p id = 'Prof1' class = 'ProfileButton'>Profile</p>");
            $("#PlayerTable tr:eq(2)").remove();
        }
    });
    
    $("#NameFilter").keyup(function () {
        var str = $("#NameFilter").val();
        var combo = $("#PositionFilter").val();
        if (str.toLowerCase().indexOf("ab") >= 0 && combo === "Beater") {
            $("#PlayerTable td:eq(0)").html("Abe Beetah <p id = 'Prof1' class = 'ProfileButton'>Profile</p>");
            $("#PlayerTable tr:eq(2)").remove();
            $("#Instructions").css("top", "110px");
        }
    });
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    $("#DragTo").css("border", "rgba(37, 116, 255, 0.6) 1px solid");
}

function drop(ev) {
    ev.preventDefault();
    $("#DragTo").html("Abe Beetah <button id = 'InvButton'>Invite</button>");
    $("#DragTo").css("border", "white 1px solid");
    $("#InvButton").css("visibility", "visible");
    
    $("#InvButton").on("click", function () {
        $("#DragTo").html("Abe Beetah - Pending <button class = 'InvCancButton'>Cancel</button>");
    });
}