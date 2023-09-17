let inp = document.querySelector("input");
let equal = document.querySelector(".equal");
let cl = document.querySelector(".cl");
let del = document.querySelector(".del");
let butns = document.querySelectorAll(".num");

butns.forEach((ele) => {
  ele.addEventListener("click", () => {
    inp.value += ele.innerHTML;
  });
});

cl.addEventListener("click", () => {
  inp.value = "";
});

del.addEventListener("click", () => {
  inp.value = inp.value.slice(0, -1);
  console.log(typeof inp.value);
});

equal.addEventListener("click", () => {
  if (inp.value === "") {
    return alert("Enter Any Value");
  } else {
    try {
      inp.value = eval(inp.value);
    } catch (error) {
      inp.value = "Error";
    }
  }
});
