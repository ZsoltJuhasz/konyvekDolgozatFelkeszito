const url = 'http://localhost:3000/books';

fetch(url)
    .then(res => res.json())
    .then(result => {
        //console.log(result);
        let list = document.querySelector('#list');
        result.forEach(book => {
            let li = document.createElement('li');
            li.innerHTML = book.title;
            li.setAttribute('class', 'list-group-item');
            list.append(li);
            //console.log(book.title);
        });

    });