const dog = {
    name: "Rusty",
    species: "dog",
    breed: "mutt"
}

prettyPrint(dog);

function prettyPrint(obj) {
    for(const i in obj) {
        console.log(i + ": " + obj[i])
    }
}