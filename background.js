// This file handles background events for the Chrome extension.

chrome.runtime.onInstalled.addListener(() => {
    console.log('AdFriend extension installed');
});

// Use chrome.action instead of chrome.browserAction for Manifest V3
chrome.action.onClicked.addListener((tab) => {
    // Perform actions when the extension action is clicked
    console.log('Extension icon clicked on tab', tab);
});

// Additional background event listeners can be added here.