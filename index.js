async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    fun: () => {
      alert("index");
    },
  });
}

document.getElementById("myButton").addEventListener("click", sayHello);
