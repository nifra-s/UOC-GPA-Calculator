(() => {
  regNum = document.getElementsByClassName("data-table")[0].rows.item(1)
    .cells[1].innerText;
  document.body.style.backgroundColor = "#ff00ff";
  chrome.storage.sync.set({ regNum: regNum });

})();
