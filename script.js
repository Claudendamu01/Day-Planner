$(document).ready(function () {

    var currentDate = $("#currentDate");
 
    var date = new Date();
  
    var dateM = moment(date).format("dddd, MMMM Do YYYY")
    currentDate.text(dateM)


    var area = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  
    var hourIndex = parseInt(moment(date).format("H"));
    console.log(hourIndex)

    for (i = 0; i < area.length; i++) {

        var areaNumber = parseInt(area[i]);
        console.log("#" + areaNumber)

        if (hourIndex >= 18 && hourIndex <= 23) {
            $("#" + areaNumber).css("background-color", "rgb(192,192,192)");

        }

        else if (areaNumber < hourIndex && areaNumber >= 9 && areaNumber <= 17) {
            $("#" + areaNumber).css("background-color", "rgb(192,192,192)");

        }
    }

    for (i = 0; i < area.length; i++) {

        var areaNumber = parseInt(area[i]);

        if (areaNumber == hourIndex) {
            $("#" + areaNumber).css("background-color", "rgb(80, 255, 255)");
            $("#" + areaNumber).text("Start writing your ToDo's in the light green spots...");

        }
    }

   
    $("#save9, #save10, #save11, #save12, #save13, #save14, #save15, #save16, #save17").click(function (event) {
        var tempo = event.target.id.slice(4);
        var comment = $.trim($("#" + tempo).val());
        if (comment != "") {

            localStorage.setItem("ToDoAt" + tempo, JSON.stringify(comment));
            alert("Saved!")

       }
    })

  
    $("#9").val(localStorage.getItem("ToDoAt9"))
    $("#10").val(localStorage.getItem("ToDoAt10"))
    $("#11").val(localStorage.getItem("ToDoAt11"))
    $("#12").val(localStorage.getItem("ToDoAt12"))
    $("#13").val(localStorage.getItem("ToDoAt13"))
    $("#14").val(localStorage.getItem("ToDoAt14"))
    $("#15").val(localStorage.getItem("ToDoAt15"))
    $("#16").val(localStorage.getItem("ToDoAt16"))
    $("#17").val(localStorage.getItem("ToDoAt17"))

    $(".btn1").click(function () {
        var confirmV = confirm("Are you sure you want to delete your Todos?")

        switch (confirmV) {
            case true:
                localStorage.clear();
                location.reload(true);

        }

    })


})
