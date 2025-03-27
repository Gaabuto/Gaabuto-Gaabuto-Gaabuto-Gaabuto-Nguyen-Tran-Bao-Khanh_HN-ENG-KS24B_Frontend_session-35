let webs = JSON.parse(localStorage.getItem("webs")) || [];
let deleteId;
function renderWebs() {
  let container = document.getElementById("webs-container");
  container.innerHTML = "";
  webs.forEach((item) => {
    container.innerHTML += `<div class="col-5 border border-1 d-flex justify-content-between m-3">
                ${item.webName}
                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onclick="startDelete(${item.id})">Xoá</button>
                        </div>
    `;
  });
}

function addWeb(e) {
  e.preventDefault();
  let newWebName = document.getElementById("web-name").value;
  let newWebUrl = document.getElementById("web-url").value;
  let newWeb = {
    id: webs[webs.length - 1].id + 1,
    webName: newWebName,
    webUrl: newWebUrl,
  };
  webs.push(newWeb);
  document.getElementById("web-name").value = "";
  document.getElementById("web-url").value = "";
  renderWebs();
  localStorage.setItem("webs", JSON.stringify(webs));
}

function startDelete(id) {
  deleteId = id;
}

function deleteWeb() {
  let deleteIndex = webs.findIndex((item) => item.id === deleteId);
  webs.splice(deleteIndex, 1);
  renderWebs();
  localStorage.setItem("webs", JSON.stringify(webs));
}
renderWebs();
