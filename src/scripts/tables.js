const out = document.querySelector(".main__out");

function fillPattern(title = "table", index, desc = "free places", from, to) {
  return `
        <div class="table">
            <span class="title">${title}</span>
            <div class="table__num">№ ${index}</div>
            <div class="table__places">
                ${desc}
                <span>${from}/${to}</span>
            </div>
        </div>
    `;
}
function generateTable(amount) {
  // тут должен быть запрос
  let res = "";
  for (let i = 0; i <= amount; i++) {
    res += fillPattern("table", i, "free places", 9, 10);
  }
  return res;
}

out.innerHTML += generateTable(30);
