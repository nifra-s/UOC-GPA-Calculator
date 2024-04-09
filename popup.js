import { getActiveTabURL } from "./utils.js";


const viewBookmarks = (stuInfo, gpa, faculty) => {
  const regNum = document.getElementById("reg_num");
  const facImg = document.getElementById("fac_img");
  const fName = document.getElementById("f_name");
  const level = document.getElementById("level");
  const course = document.getElementById("course");
  const degree = document.getElementById("degree");
  const GPA = document.getElementById("gpa");

  const facImgTem = document.createElement("img");
  const regNumTem = document.createElement("a");
  const fNameTem = document.createElement("a");
  const levelTem = document.createElement("a");
  const courseTem = document.createElement("a");
  const degreeTem = document.createElement("a");
  const GPATem = document.createElement("h1");

  regNumTem.textContent = stuInfo.regNum;
  regNum.appendChild(regNumTem);

  fNameTem.textContent = stuInfo.fName;
  fName.appendChild(fNameTem);

  levelTem.textContent = stuInfo.level;
  level.appendChild(levelTem);

  courseTem.textContent = stuInfo.course;
  course.appendChild(courseTem);

  degreeTem.textContent = stuInfo.degree;
  degree.appendChild(degreeTem);

  GPATem.textContent = gpa;
  GPA.appendChild(GPATem);

  facImgTem.className = "profile-img";
  facImgTem.src = `./assets/fac/${faculty}.png`;
  facImgTem.alt = "ProfilePicture";
  facImg.appendChild(facImgTem);
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (activeTab.url.includes("results/result_sheet")) {
    const fac = activeTab.url.split("/")[3];
    const stuInfo = await chrome.storage.sync.get();
    viewBookmarks(stuInfo.info, stuInfo.gpa, fac);
  } else {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML =
      '<div class="title">This is not a youtube video page.</div>';
  }
});
