// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-10-04

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring

var tag = document.getElementById('webring');

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;
// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
    if (thisSite.startsWith(sites[i])) {
        thisIndex = i;
        break; //when we've found the site, we don't need to search any more, so stop the loop
    }
}

function randomSite() {
    otherSites = sites.slice();
    otherSites.splice(thisIndex, 1);
    randomIndex = Math.floor(Math.random() * otherSites.length);
    location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
    tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <td>This site isn't part of the ${ringName} webring yet. You should talk to the manager to have your site added to the list!</td>
  </tr>
</table>
  `);
} else {
    //find the 'next' and 'previous' sites in the ring. this code looks complex
    //because it's using a shorthand version of an if-else statement to make sure
    //the first and last sites in the ring join together correctly
    previousIndex = (thisIndex - 1 < 0) ? sites.length - 1 : thisIndex - 1;
    nextIndex = (thisIndex + 1 >= sites.length) ? 0 : thisIndex + 1;

    indexText = ""
    if (useIndex) {
        indexText = `<a href='${indexPage}'><img src="https://emreed.net/LTW.bmp"></a> `;
    }

    randomText = ""
    if (useRandom) {
        randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a> `;
    }

    //this is the code that displays the widget
    tag.insertAdjacentHTML('afterbegin', `
  <table>
    <tr>
      <td><a href='${sites[previousIndex]}'>←</a></td>
      <td style='text-align:center;' width=100px; ><a href='${sites[previousIndex]}'>${siteNames[previousIndex]}</a></td>
      <td style='text-align:center;'>
      <span style='font-size:small;'> ${randomText}${indexText}</br>Webring powered by <a href='https://garlic.garden/onionring'>Onionring</a></span></td>
      <td style='text-align:center;' width=100px;><a href='${sites[nextIndex]}'>${siteNames[nextIndex]}</a></td>
      <td><a href='${sites[nextIndex]}'>→</a></td>
    </tr>
  </table>
  `);

}