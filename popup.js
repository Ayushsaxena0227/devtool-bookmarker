document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const tagInput = document.getElementById("tagInput");
  const bookmarkList = document.getElementById("bookmarkList");

  function loadBookmarks() {
    chrome.storage.local.get("bookmarks", (data) => {
      const bookmarks = data.bookmarks || [];
      bookmarkList.innerHTML = "";
      bookmarks.reverse().forEach(({ url, title, tag }) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `
          <a href="${url}" target="_blank">${title}</a>
          <small>${tag}</small>
        `;
        bookmarkList.appendChild(li);
      });
    });
  }

  saveBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const tagText = tagInput.value.trim() || "general";

      const newEntry = {
        url: activeTab.url,
        title: activeTab.title,
        tag: tagText,
      };

      chrome.storage.local.get("bookmarks", (data) => {
        const bookmarks = data.bookmarks || [];
        bookmarks.push(newEntry);
        chrome.storage.local.set({ bookmarks }, () => {
          tagInput.value = "";
          loadBookmarks();
        });
      });
    });
  });

  loadBookmarks();
});
