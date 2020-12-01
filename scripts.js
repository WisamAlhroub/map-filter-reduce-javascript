let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];

let insturctions = (arr) => {
    return arr.map((e) => {
        return e.toUpperCase();
    }).filter((e) => {
        return e != 'XML' && e != 'JSON';
    }).reduce((count, current) => {
        if(typeof count[current] == 'undefined') {
            count[current] = 1;
        } else {
            count[current] += 1;
        }

        return count;
    }, {});
}

const newTags = insturctions(tags);

let container = document.getElementById("container");

console.log(newTags)

container.innerHTML = `<div class="flex-item">result is: ${JSON.stringify(newTags)}</div>`;
