import { getActiveTabURL } from "./utils.js";


const viewBookmarks = (currentBookmarks) => {
  const bookmarksElement = document.getElementById("bookmarks");
  bookmarksElement.innerHTML = "";
  const bookmarkTitleElement = document.createElement("div");

  if (currentBookmarks.length > 0) {
    bookmarkTitleElement.textContent = currentBookmarks;
    bookmarkTitleElement.className = "bookmark-title";
    bookmarks.appendChild(bookmarkTitleElement);
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }

  return;
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (activeTab.url.includes("results/result_sheet")) {
    viewBookmarks("2018t1-ee-5-001");
  } else {
    const container = document.getElementsByClassName("container")[0];

    container.innerHTML =
      '<div class="title">This is not a youtube video page.</div>';
  }
});
