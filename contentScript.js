(() => {
  stuInfo = document.getElementsByClassName("data-table")[0].rows;
  regNum = stuInfo.item(1).cells[1].innerText;
  fName = stuInfo.item(3).cells[1].innerText;
  level = stuInfo.item(7).cells[1].innerText;
  course = stuInfo.item(9).cells[1].innerText;
  degree = stuInfo.item(11).cells[1].innerText;

  info = { regNum, fName, level, course, degree };
  totalGPV = 0.0;
  totalCredit = 0.0;

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
      }
    }
  }
  gpa = (totalGPV / totalCredit).toFixed(2);
  chrome.storage.sync.set({ info, gpa });
})();