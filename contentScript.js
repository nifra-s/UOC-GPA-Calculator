(() => {
  stuInfo = document.getElementsByClassName("data-table")[0].rows;

  regNum = stuInfo.item(1).cells[1].innerText;
  fName = stuInfo.item(3).cells[1].innerText;
  level = stuInfo.item(7).cells[1].innerText;
  course = stuInfo.item(9).cells[1].innerText;
  degree = stuInfo.item(11).cells[1].innerText;
  chrome.storage.sync.set({ regNum, fName, level, course, degree });
})();
