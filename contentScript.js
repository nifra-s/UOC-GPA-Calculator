(() => {
  stuInfo = document.getElementsByClassName("data-table")[0].rows;
  regNum = stuInfo.item(1).cells[1].innerText;
  fname = stuInfo.item(4).cells[1].innerText;
  level = stuInfo.item(7).cells[1].innerText;
  degree = stuInfo.item(11).cells[1].innerText;

  info = { regNum, fname, level, degree };
  totalGPV = 0.0;
  totalCredit = 0.0;
  repeatCourse = 0;
  currentClass = "";

  for (let i = 1; i < parseInt(level) + 1; i++) {
    currentLevel = document.getElementsByClassName("data-table")[i].rows;
    for (let j = 2; j < currentLevel.length - 1; j++) {
      currentCourse = currentLevel.item(j);

      if (currentCourse.cells[5].innerText === "Standard") {
        gpv = parseFloat(currentCourse.cells[10].innerText);
        credit = parseFloat(currentCourse.cells[4].innerText);
        if (isNaN(gpv)) {
          gpv = 0;
          credit = 0;
        }
        totalGPV += gpv * credit;
        totalCredit += credit;
        if (gpv < 2) {
          repeatCourse = j;
        }
      }

      if (currentCourse.cells[5].innerText === "Repeat") {
        repgpv = parseFloat(
          currentLevel.item(repeatCourse).cells[10].innerText
        );
        gpv = parseFloat(currentCourse.cells[10].innerText);
        credit = parseFloat(currentCourse.cells[4].innerText);
        if (isNaN(gpv)) {
          gpv = 0;
          credit = 0;
          repgpv = 0;
        }
        if (repgpv > gpv) {
          gpv = 0;
          credit = 0;
          repgpv = 0;
        }
        if (gpv > 2) {
          gpv = 2;
        }
        totalGPV += gpv * credit - repgpv * credit;
      }
    }
  }
  gpa = Math.ceil((totalGPV / totalCredit).toFixed(4) * 100) / 100;

  if (gpa >= 3.7) {
    currentClass = "First Class";
  } else if (gpa < 3.7 && gpa >= 3.3) {
    currentClass = "Second Class - Upper Division";
  } else if (gpa < 3.3 && gpa >= 3.0) {
    currentClass = "Second Class - Lover Division";
  } else {
    currentClass = "General Degree";
  }
  chrome.storage.sync.set({ info, gpa, currentClass });
})();