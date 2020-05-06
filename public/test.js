// GET Value

function subForm() {
  if (typeof localStorage != "undefined") {
    var e = document.getElementById("lokacija");
    localStorage.checkIn2 = document.getElementById("checkIn2").value;
    localStorage.lokacija = e.options[e.selectedIndex].value;
    localStorage.checkOutDate = document.getElementById("checkOutDate").value;
  }
  document.getElementById("form").submit();
}

// INPUT Value

function setForm() {
  var a = document.getElementById("lokacija");
  $(a).val(localStorage.lokacija);
  var check = document.getElementById("checkIn2");
  $(check).val(localStorage.checkIn2);
  var b = document.getElementById("checkOutDate");
  $(b).val(localStorage.checkOutDate);
}

// Validation return location

$(function () {
  $(".btn").click(function () {
    var location = $("#returnLocation");

    if (location.val() == "") {
      $("#myAlert").show();
      $(window).scrollTop(0);
      return false;
    } else if (location.val() > "") {
      $("#myAlert").hide();
      return true;
    }
  });
});

$("#returnLocation").on("change", function () {
  var value = $(this).val();
  if (value > "") {
    $("#myAlert").hide("fade");
    return true;
  }
});

// Filing out LIST

$(function () {
  var $src = $("#one"),
    $dst = $("#two");
  $src.on("input", function () {
    $dst.text($src.val());
  });
});

$(function () {
  var $src = $("#three"),
    $dst = $("#four");
  $src.on("input", function () {
    $dst.text($src.val());
  });
});

$(function () {
  var $src = $("#five"),
    $dst = $("#six");
  $src.on("input", function () {
    $dst.text($src.val());
  });
});

$(function () {
  var $src = $("#checkIn2"),
    $dst = $("#datum_preuzimanja");
  $src.on("input", function () {
    $dst.val($src.val());
  });
});

function copyValue() {
  var dropboxvalue = document.getElementById("lokacija").value;
  document.getElementById("check").innerHTML = dropboxvalue;

  var out = document.getElementById("returnLocation").value;
  document.getElementById("out").innerHTML = out;

  var date = document.getElementById("checkIn2").value;
  document.getElementById("datum_preuzimanja").innerHTML = date;

  var date = document.getElementById("checkOutDate").value;
  document.getElementById("datum_vracanja").innerHTML = date;
}

function testFun(name) {
  document.getElementById("vozilo").innerHTML = name;
}

// $(".test").on("click", (evt) => {
//   evt.preventDefault();
//   console.log("asdasd", $(this).innerHtml);
//   // $(this).closest(".media-body"); // does not run a DOM query
//   // $('.class-name').hide() // runs a DOM query
// });
// $(function () {
//   $("#sendMaill").click(function () {
//   });
// });

// $("#formSub2").on("submit", function (e) {
//   e.preventDefault();

//   if ($("#formSub2").valid()) {
//     $.ajax({
//       url: "/send",
//       method: "post",
//       data: $("#formSub2").serialize(),
//     }).done((d) => {
//       swal({
//         title: "Uspesna Rezervacija!",
//         icon: "success",
//         buttons: false,
//         timer: 3000,
//       }).then(function () {
//         window.location.href = "index.html";
//       });
//     });
//     return false;
//   } else {
//     return false;
//   }
// });

// (function () {
//   $("#sendMailll").click(function () {
//     if ($("#formSub").valid()) {
//     }
//   });
// });

// ROUT to WIZARD Step Three

$("#formSub").on("submit", function (e) {
  e.preventDefault();
  if ($("#formSub").valid()) {
    $("#sada").click();
  }
});

// POST on Server
$("#rtr").on("click", function (e) {
  e.preventDefault();

  var result = {};
  $("span").each(function (k, v) {
    result[v.id] = v.innerHTML;
  });

  $.ajax({
    url: "/send",
    method: "post",
    data: result,
  }).done((d) => {
    swal({
      title: "Uspesna Rezervacija!",
      icon: "success",
      buttons: false,
      timer: 3000,
    }).then(function () {
      window.location.href = "index.html";
    });
  });
  return false;
});
