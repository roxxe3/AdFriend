# AdFriend

## Project Overview
AdFriend is a Chrome extension designed to enhance your browsing experience by providing useful features directly in your browser.

## Project Structure
The project follows a specific directory structure:

```
chrome-extension-workspace
├── manifest.json
├── background.js
├── popup
│   ├── popup.html
│   └── popup.js
├── content
│   └── contentScript.js
├── icons
├── styles
│   └── popup.css
└── README.md
```

## File Descriptions

- **manifest.json**: Contains metadata about the Chrome extension, including its name, version, permissions, and background scripts.
  
- **background.js**: Runs in the background and handles events for the extension, such as responding to browser actions or managing state.
  
- **popup/popup.html**: Defines the HTML structure for the popup interface of the extension that appears when the extension icon is clicked.
  
- **popup/popup.js**: Contains the JavaScript code that controls the behavior of the popup, including event listeners and DOM manipulation.
  
- **content/contentScript.js**: A content script that runs in the context of web pages and can interact with the DOM of the pages the extension is active on.
  
- **icons/**: Directory intended to hold icon files for the extension, typically in various sizes (e.g., 16x16, 48x48, 128x128).
  
- **styles/popup.css**: Contains the CSS styles for the popup interface, defining its appearance.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the `chrome-extension-workspace` directory.
5. The extension should now be loaded and ready for use.

## Usage
Once the extension is loaded, click on the extension icon in the Chrome toolbar to open the popup interface and access its features.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.