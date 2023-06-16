// Initialize the note with a default value.
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({ 'note': '' });
});
