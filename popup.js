import { getActiveTabURL } from "./utils.js";

const addNewBookmark = (bookmarks, bookmark) => {
  const newBookmarkElement = document.createElement("div");

  newBookmarkElement.setAttribute("timestamp", bookmark.time);
  bookmarks.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentIndex) => {
  const bookmarksElement = document.getElementById("bookmarks");
  bookmarksElement.innerHTML = "";

  if (currentIndex.length > 0) {
    const newBookmarkElement = document.createElement("div");
    newBookmarkElement.className = "bookmark";
    newBookmarkElement.textContent = currentIndex;

    bookmarksElement.appendChild(newBookmarkElement);
  } else {
    bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
  }

  return;
};

document.addEventListener("DOMContentLoaded", async () => {
  const activeTab = await getActiveTabURL();

  if (activeTab.url.includes("results/result_sheet")) {
  } else {
    const container = document.getElementsByClassName("container")[0];

    container.innerHTML = '<div class="title">Go to the Results Page</div>';
  }
});
