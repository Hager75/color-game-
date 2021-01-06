var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
var arr = new Array(3);
var count = 0;
var score = 0;
var randomcolor;
var randomtext;
// let randomcolor = colors[Math.floor(Math.random() * colors.length)];
// let randomtext = colors[Math.floor(Math.random() * colors.length)];
// $(".text").html(`${randomtext}`).css("color", `${randomcolor}`);

function myfun() {
    arr.length = 0;
    randomcolor = colors[Math.floor(Math.random() * colors.length)];
    randomtext = colors[Math.floor(Math.random() * colors.length)];
    $(".text").html(`${randomtext}`).css("color", `${randomcolor}`);
    while (!arr.includes(randomcolor) || arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]) {
        arr[0] = colors[Math.floor(Math.random() * colors.length)];
        arr[1] = colors[Math.floor(Math.random() * colors.length)];
        arr[2] = colors[Math.floor(Math.random() * colors.length)];
    }

    console.log(`${arr}`);
    $("h3").each(function() {
        $("h3:eq(0)").html(`${arr[0]}`);
        $("h3:eq(1)").html(`${arr[1]}`);
        $("h3:eq(2)").html(`${arr[2]}`);
    });
};

myfun();

var sec = 4;
var countdown = setInterval(function() {
    secondpass();
}, 1000);

function secondpass() {
    var min = Math.floor(sec / 60);
    var remsec = sec % 60;
    if (sec < 10) {
        remsec = "0" + remsec;
    }
    $(".sec").html(min + ":" + remsec);
    if (sec > 0) {
        sec -= 1;
    } else {
        clearInterval(countdown);
        $(".sec").html("game over");

    }
}


// $(function() {


//     // myfun();


// });

// var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
// var arr = new Array(3);
// var count = 0;

// function myfun() {
//     let randomcolor = colors[Math.floor(Math.random() * colors.length)];
//     let randomtext = colors[Math.floor(Math.random() * colors.length)];
//     $(".text").html(`${randomtext}`).css("color", `${randomcolor}`);
//     arr[0] = colors[Math.floor(Math.random() * colors.length)];
//     arr[1] = colors[Math.floor(Math.random() * colors.length)];
//     arr[2] = colors[Math.floor(Math.random() * colors.length)];
//     if (!arr.includes(randomcolor) || arr[0] == arr[1] || arr[0] == arr[2] || arr[1] == arr[2]) {
//         console.log("hello2");
//         myfun();
//     } else {
//         $("h3:eq(0)").html(`${arr[0]}`);
//         $("h3:eq(1)").html(`${arr[1]}`);
//         $("h3:eq(2)").html(`${arr[2]}`);
//     }
// };
// myfun();
$(".one").click(function() {
    let gg = $(".one").text();
    if (gg == randomcolor) {
        alert("right");
        count++;
        score = score + 50;
        myfun();

    } else {
        alert("wrong");
        myfun();
    }

    if (count == 5) {
        alert("winnnnnnner");
        $('.text').hide();

    }
});

$(".two").click(function() {
    let ggg = $(".two").text();
    if (ggg == randomcolor) {
        alert("right");
        count++;
        score = score + 50;
        myfun();
    } else {
        alert("wrong");
        myfun();
    }

    if (count == 5) {
        alert("winnnnnnner");
        $('.text').hide();

    }
});
$(".three").click(function() {
    let gggg = $(".three").text();
    if (gggg == randomcolor) {
        alert("right");
        count++;
        score = score + 50;
        myfun();
    } else {
        alert("wrong");
        myfun();
    }

    if (count == 5) {
        alert("winnnnnnner");
        $('.text').hide();

    }
    if (score == 150) {
        alert("your scor is 150");
        $('.text').hide();

    }

});