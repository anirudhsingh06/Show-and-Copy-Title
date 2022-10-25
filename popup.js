function yourlink() {

  var ldned = ['https://www.linkedin.com/in/anirudh-singh-iitmandi/', 'https://www.linkedin.com/in/deepak-khatri-620852223/', 'https://www.linkedin.com/in/om-kumar-hanote/', 'https://www.linkedin.com/in/aniruddha-prakash-b0411b1b3/', 'https://www.linkedin.com/in/aryan-garg-ba511819b/', 'https://www.linkedin.com/in/roshit-anand-46218b181/']
  for (let i = 0; i < ldned.length; i++) {
    window.open(ldned[i])
  }
};
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function change() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "It will be shown here.") {
    chrome.tabs.getSelected(null, function (tab) {
      x.innerHTML = tab.title;

    });

  } else {

    chrome.tabs.getSelected(null, function (tab) {
      x.innerHTML = tab.title;

    });
  }
}
function copyCurrentTabTitle() {
  chrome.tabs.getSelected(null, function (tab) {
    copyTextToClipboard(tab.title);
  });
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => console.log(`${text} :copied to clipboard`))
    .catch(err => console.log(err));
}

copyTitle = document.getElementById("copyTitle");


copyTitle.addEventListener("click", function () {
  copyCurrentTabTitle();
  myFunction();
  change();

});
profile = document.getElementById("profile");
profile.addEventListener("click", function () {
  yourlink();
});



