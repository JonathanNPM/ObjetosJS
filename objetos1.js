const movies = [
    { nome: "In Bruges", hasWatched: true, score: 5 },
    { nome: "Frozen", hasWatched: false, score: 4.5 },
    { nome: "Mad Max", hasWatched: false, score: 5 },
    { nome: "Os Miseráveis", hasWatched: true, score: 3.5 }
]

movies.forEach(o => {
    if(o.hasWatched) {
        console.log("Assistiu \"" + o.nome + "\" - " + (o.score).toFixed(1).replace('.', ',') + " estrelas");
    } else {
        console.log("Não viu \"" + o.nome + "\" - " + (o.score).toFixed(1).replace('.', ',') + " estrelas");
    }
});