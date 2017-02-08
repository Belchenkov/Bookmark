//Listen for form submit

document.querySelector('#myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    //Get Form Values
    var siteName = document.querySelector('#siteName').value;
    var siteUrl = document.querySelector('#siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    /*localStorage.setItem('test', 'Hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    */

    if (localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];
        //Add to bookmarks
        bookmarks.push(bookmark);
        //Set localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        //console.log(localStorage.getItem('bookmarks'));
    } else {
        //Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //Add bookmark to array
        bookmarks.push(bookmark);

        //Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

});
//Fetch Bookmarks
function fetchBookmarks() {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //Get output id
    var bookmarksResult = document.querySelector('#bookmarksResult');

    //Build output
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResult.innerHTML += name + ' ' + url;
    }


}