let btn = document.querySelector("button");

function moveTheButton() {
  return new Promise(function (res) {
    let left = 0;
    setInterval(function () {
      if (left < 200) {
        left += 1;
        btn.style.marginLeft = left + "px";
      } else {
        res();
      }
    }, 1000 / 60);
  });
}
function moveTheButtonDwn() {
  return new Promise(function (res) {
    let dwn = 0;
    setInterval(function () {
      if (dwn < 100) {
        dwn += 1;
        btn.style.marginTop = dwn + "px";
      } else {
        res();
      }
    }, 1000 / 60);
  });
}

async function buttonAnimation() {
  await moveTheButton();
  btn.style.backgroundColor = "red";
  document.body.style.backgroundColor = "blue";
  await moveTheButtonDwn();
  btn.style.backgroundColor = "green";
  document.body.style.backgroundColor = "pink";
}

buttonAnimation();
