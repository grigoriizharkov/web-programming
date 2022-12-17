function addComment(title, body) {
    const comment = document.createElement('div');
    comment.innerHTML = title;
    comment.innerHTML = body;
    comment.classList.add("comment")
    document.querySelector('#comments').appendChild(comment);
}

function addPage(currentPage) {
    document.querySelector('.preloader').setAttribute('style', 'display: inline;');

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=8&_page=' + currentPage)

        .then(response => response.json())
        .then(data => {
                for (let item of data) {
                    addComment(item['title'], item['body'])
                }
                document.querySelector('.preloader').setAttribute('style', 'display: none;');
                document.querySelector('.exception').setAttribute('style', 'display: none;');

            }
        ).catch((error) => {
        console.log(error);
        document.querySelector('.exception').setAttribute('style', 'display: inline;')
    });
}

let currentPage = 1;
addPage(currentPage);

document.querySelector('.main__more').addEventListener("load", function () {
    currentPage++;

    addPage(currentPage);
})