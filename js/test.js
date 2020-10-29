const dataTransform = (a, b) => a*b;

const dataTransform2 = function(a, b) {
    return a * b;
};

const dataDisplay = (a, b, callback) => {
    console.log(callback(a, b));
};

dataDisplay(13, 2, dataTransform);