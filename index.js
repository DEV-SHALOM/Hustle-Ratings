let warningMessage = document.createElement("h2");
warningMessage.textContent = "☠Wake Up Brr!!! Life ain't fair.☠";

document.querySelector("#merehumanRad").addEventListener("change", function () {
  document.querySelector(".time-range").style.width = "100%";
  document.querySelector(".time-range").style.backgroundColor = "#300101";
  document.querySelector(".time-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #3c00009f";

  document.querySelector(".money-range").style.width = "10%";
  document.querySelector(".money-range").style.backgroundColor = "#300101";
  document.querySelector(".money-range").style.boxShadow =
    "inset 0rem 0rem 5px #071202b3, 0rem 0rem 3rem #3c00009f";

  document.querySelector(".difficulty-range").style.width = "99%";
  document.querySelector(".difficulty-range").style.backgroundColor = "#300101";
  document.querySelector(".difficulty-range").style.boxShadow =
    "inset 0rem 0rem 5px #030a009f, 0rem 0rem 3rem #3c00009f";

  document.querySelector(".scope-range").style.width = "10%";
  document.querySelector(".scope-range").style.backgroundColor = "#300101";
  document.querySelector(".scope-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #3c00009f";

  document.querySelector(".warning").appendChild(warningMessage);
});

document.querySelector("#frontendRad").addEventListener("change", function () {
  document.querySelector(".time-range").style.width = "35%";
  document.querySelector(".time-range").style.backgroundColor = "#2d2402";
  document.querySelector(".time-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #a3ac009f";

  document.querySelector(".money-range").style.width = "55%";
  document.querySelector(".money-range").style.backgroundColor = "#173600";
  document.querySelector(".money-range").style.boxShadow =
    "inset 0rem 0rem 5px #071202b3, 0rem 0rem 3rem #0f2c019f";

  document.querySelector(".difficulty-range").style.width = "35%";
  document.querySelector(".difficulty-range").style.backgroundColor = "#173600";
  document.querySelector(".difficulty-range").style.boxShadow =
    "inset 0rem 0rem 5px #030a009f, 0rem 0rem 3rem #0c2202ba";

  document.querySelector(".scope-range").style.width = "15%";
  document.querySelector(".scope-range").style.backgroundColor = "#300101";
  document.querySelector(".scope-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #3c00009f";

  document.querySelector(".warning").removeChild(warningMessage);
});

document.querySelector("#backendRad").addEventListener("change", function () {
  document.querySelector(".time-range").style.width = "50%";
  document.querySelector(".time-range").style.backgroundColor = "#112601";
  document.querySelector(".time-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #102d009f";

  document.querySelector(".money-range").style.width = "75%";
  document.querySelector(".money-range").style.backgroundColor = "#033600";
  document.querySelector(".money-range").style.boxShadow =
    "inset 0rem 0rem 5px #071202b3, 0rem 0rem 3rem #0a1b029f";

  document.querySelector(".difficulty-range").style.width = "50%";
  document.querySelector(".difficulty-range").style.backgroundColor = "#033600";
  document.querySelector(".difficulty-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #0e2902ba";

  document.querySelector(".scope-range").style.width = "40%";
  document.querySelector(".scope-range").style.backgroundColor = "#192e06";
  document.querySelector(".scope-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #0b2003c2";

  document.querySelector(".warning").removeChild(warningMessage);
});

document.querySelector("#fullstackRad").addEventListener("change", function () {
  document.querySelector(".time-range").style.width = "90%";
  document.querySelector(".time-range").style.backgroundColor = "#300101";
  document.querySelector(".time-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #3c00009f";

  document.querySelector(".money-range").style.width = "100%";
  document.querySelector(".money-range").style.backgroundColor = "#043c01";
  document.querySelector(".money-range").style.boxShadow =
    "inset 0rem 0rem 5px #071202b3, 0rem 0rem 3rem #0c2401ba";

  document.querySelector(".difficulty-range").style.width = "96%";
  document.querySelector(".difficulty-range").style.backgroundColor = "#043c01";
  document.querySelector(".difficulty-range").style.boxShadow =
    "inset 0rem 0rem 5px #0000009f, 0rem 0rem 3rem #0c2403c2";

  document.querySelector(".scope-range").style.width = "92%";
  document.querySelector(".scope-range").style.backgroundColor = "#033600";
  document.querySelector(".scope-range").style.boxShadow =
    "inset 0rem 0rem 5px #071202b3, 0rem 0rem 3rem #0a1b029f";

  document.querySelector(".warning").removeChild(warningMessage);
});
