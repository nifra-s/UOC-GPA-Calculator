import { getActiveTabURL } from "./utils.js";

const viewBookmarks = (stuInfo, gpa, c_class) => {
  const regNum = document.getElementById("reg_num");
  const fname = document.getElementById("fname");
  const level = document.getElementById("level");
  const degree = document.getElementById("degree");
  const GPA = document.getElementById("gpa");
  const currentClass = document.getElementById("c_class");

  const regNumTem = document.createElement("div");
  const nameTem = document.createElement("div");
  const levelTem = document.createElement("div");
  const degreeTem = document.createElement("div");
  const c_classTem = document.createElement("div");
  const gpaTem = document.createElement("h2");

  regNumTem.textContent = stuInfo.regNum;
  regNumTem.className = "col-7";
  regNum.appendChild(regNumTem);

  nameTem.textContent = stuInfo.fname;
  nameTem.className = "col-7";
  fname.appendChild(nameTem);

  levelTem.textContent = stuInfo.level;
  levelTem.className = "col-7 details";
  level.appendChild(levelTem);

  c_classTem.textContent = c_class;
  c_classTem.className = "col-7 details";
  currentClass.appendChild(c_classTem);

  degreeTem.textContent = stuInfo.degree;
  degreeTem.className = "col-7 details";
  degree.appendChild(degreeTem);

  gpaTem.textContent = gpa;
  GPA.appendChild(gpaTem);
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (activeTab.url.includes("results/result_sheet")) {
    const stuInfo = await chrome.storage.sync.get();
    viewBookmarks(stuInfo.info, stuInfo.gpa, stuInfo.currentClass);
  } else {
    const container = document.getElementById("calculator");
    container.innerHTML =
      '<div class="label red">Go to your Results Page</div>';
  }
});
