function checkTitle(title) {
    let arr = title.split(' ');

    function check(elem){
        return (elem.toString().chartAt() == elem.toString().chartAt().toUpperCase());
    }
    return arr.every(check);
}

console.log(checkTitle("A Mind Boggling Achievement"));