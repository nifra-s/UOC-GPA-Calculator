import { getActiveTabURL } from "./utils.js";


const viewBookmarks = (stuInfo) => {
  const bookmarks = document.getElementById("bookmarks");
  const bookmarkTitleElement = document.createElement("div");
  bookmarkTitleElement.textContent = stuInfo;
  bookmarkTitleElement.className = "bookmark-title";
  bookmarks.appendChild(bookmarkTitleElement);
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (activeTab.url.includes("results/result_sheet")) {
    const stuInfo = await chrome.storage.sync.get();
    viewBookmarks(stuInfo.regNum);
  } else {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML =
      '<div class="title">This is not a youtube video page.</div>';
  }
});
