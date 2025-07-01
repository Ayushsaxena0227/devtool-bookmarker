# DevTool Bookmarker — Chrome Extension

A minimalist Chrome extension to **bookmark useful developer links** instantly while you work.

> Save the current tab with a tag (like `docs`, `frontend`, `bugfix`) — open the popup anytime to recall!
> 
# Features

- Save current tab’s URL + title
- Add a custom tag (e.g. "docs", "react", "tool")
- View all saved bookmarks inside the popup
- Stored using Chrome Extension `local storage`
- Clean, fast, no-login UI built using Bootstrap

## How to Use

1. Clone this repo  
 git clone https://github.com/Ayushsaxena0227/devtool-bookmarker.git

 Open Chrome and go to:
chrome://extensions/

 Enable “Developer Mode” (top right)

 Click “Load Unpacked” → Select the extension folder

 The extension is now live! Open any dev website → click extension → type a tag → click “Save Current Tab”

Folder Structure
devtool-bookmarker/
├── icons/              → Extension icons (16, 48, 128)
├── popup.html          → Popup UI
├── popup.js            → Logic (save, load bookmarks)
├── style.css           → Basic styling
├── manifest.json       → Chrome extension config
└── README.md           → This file

 Tech Used
HTML / CSS / JS
Chrome Extensions API

 Coming Soon
 Delete saved bookmarks
 Filter/search by keyword
 Export bookmarks
 Sync between devices
 License
MIT — Feel free to use, remix, or contribute 


