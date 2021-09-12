async function getCurrentTabUrl() {
  return new Promise((resolve, reject) => {
    browser.tabs
      .query({ currentWindow: true, active: true })
      .then((tabs) => {
        const currentUrl = tabs[0].url;
        return resolve(currentUrl);
      })
      .catch(reject);
  });
}

const urlMatches = browser.runtime.getManifest().content_scripts[0].matches;

browser.menus.create({
  id: "open-in-steam",
  title: "Open in Steam",
  contexts: ["all"],
  documentUrlPatterns: urlMatches,
});

browser.menus.onClicked.addListener(function (info) {
  if (info.menuItemId == "open-in-steam") {
    getCurrentTabUrl()
      .then((url) => {
        window.location.href = `steam://openurl/${url}`;
      })
      .catch(() => {
        console.log("Failed to retrieve URL of current tab!");
      });
  }
});
