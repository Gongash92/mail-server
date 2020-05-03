function subForm() {
  if (typeof localStorage != "undefined") {
    var e = document.getElementById("lokacija");
    localStorage.checkIn2 = document.getElementById("checkIn2").value;
    localStorage.lokacija = e.options[e.selectedIndex].value;
    localStorage.checkOutDate = document.getElementById("checkOutDate").value;
  }
  document.getElementById("form").submit();
}

function setForm() {
  var a = document.getElementById("lokacija");
  $(a).val(localStorage.lokacija);
  var check = document.getElementById("checkIn2");
  $(check).val(localStorage.checkIn2);
  var b = document.getElementById("checkOutDate");
  $(b).val(localStorage.checkOutDate);
}

$(function () {
  $(".btn").click(function () {
    var location = $("#returnLocation");

    if (location.val() == "0") {
      $("#myAlert").show("fade");
      return false;
    } else if (location.val() > "0") {
      $("#myAlert").hide();
      return true;
    }
  });
});

$("#returnLocation").on("change", function () {
  var value = $(this).val();
  if (value > "0") {
    $("#myAlert").hide("fade");
    return true;
  }
});

$(function () {
  var $src = $("#one"),
    $dst = $("#two");
  $src.on("input", function () {
    $dst.val($src.val());
  });
});

$(function () {
  var $src = $("#three"),
    $dst = $("#four");
  $src.on("input", function () {
    $dst.val($src.val());
  });
});

$(function () {
  var $src = $("#five"),
    $dst = $("#six");
  $src.on("input", function () {
    $dst.val($src.val());
  });
});

// $(function () {
//   var $src = $("#checkIn2"),
//     $dst = $("#datum_preuzimanja");
//   $src.on("input", function () {
//     $dst.val($src.val());
//   });
// });

function copyValue() {
  var dropboxvalue = document.getElementById("lokacija").value;
  document.getElementById("check").value = dropboxvalue;

  var out = document.getElementById("returnLocation").value;
  document.getElementById("out").value = out;

  var date = document.getElementById("checkIn2").value;
  document.getElementById("datum_preuzimanja").value = date;

  var date = document.getElementById("checkOutDate").value;
  document.getElementById("datum_vracanja").value = date;
}

function testFun() {
  document.getElementById("vozilo").value = document.getElementById(
    "polo"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "upp"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "208"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "panda"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "corsa"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "punto"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "golf"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "astra"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "308"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "passat"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "opel"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "master"
  ).textContent;
  document.getElementById("vozilo").value = document.getElementById(
    "polo"
  ).textContent;
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

$("#formSub2").on("submit", function (e) {
  e.preventDefault();

  if ($("#formSub2").valid()) {
    $.ajax({
      url: "/send",
      method: "post",
      data: $("#formSub2").serialize(),
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
  } else {
    return false;
  }
});

// (function () {
//   $("#sendMailll").click(function () {
//     if ($("#formSub").valid()) {
//     }
//   });
// });

$("#formSub").on("submit", function (e) {
  e.preventDefault();
  if ($("#formSub").valid()) {
    $("#sada").click();
  }
});
