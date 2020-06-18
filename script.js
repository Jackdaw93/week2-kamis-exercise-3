let buttonValue = document.getElementById("btn-input");

buttonValue.addEventListener("click", function () {
  let regexName = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
  let inputValue = document.getElementById("input").value;

  if (inputValue.match(regexName)) {
    document.querySelector(
      ".container .row .col-12 #result"
    ).innerHTML = `Anda menemukan <span style="background-color:yellow">${inputValue}</span> dalam sistem kami`;
  } else {
    document.querySelector(
      ".container .row .col-12 #result"
    ).innerHTML = `Maaf kata <span style="background-color:red">${inputValue}</span> belum ada dalam sistem kami`;
  }
});
