class Game {
    constructor(name, genre, cost) {
        this.name = name;
        this.genre = genre;
        this.cost = cost;
    }
}
const games = [
    new Game("Genshin", "MMO", 0),
    new Game("Far cry", "Shooter", 2000),
    new Game("Watch dogs", "Action", 2000),
    new Game("GTA", "Action", 1100)
];
function findGame(value, gen,msearch=false) {
    //     return games.find((game) => {
    //         return game.genre == gen && value >= game.cost;
    //     });
    const algsearch = (game)=>{
        return game.genre == gen && value >= game.cost;
    }
    if (msearch){
        return games.filter(algsearch)
    }
    else if (msearch==false){
        return games.find(algsearch)
    }
}
console.log(findGame(2000, "Action"));
// console.log(findGame("2000","Action"))
console.log(typeof(12+""));
