class Game {
    name:string
    genre:string
    cost?:number
    rewiews?:string[]
    constructor(name:string,genre:string,cost?:number,rewiews?:string[]){
        this.name = name
        this.genre = genre
        this.cost = cost
        if (rewiews){
            this.rewiews = rewiews
        }
        else{
            this.rewiews = Array()
        }

    }
}
// function findGame (value:number,gen:string,msearch=true):Game|Game[]{
//     const algsearch = (game)=>{
//         return game.genre == gen && value >= game.cost;
//     }
//     if (msearch){
//         return games.filter(algsearch)
//     }
//     else if (msearch==false){
//         return games.find(algsearch)
//     }
// }
// const games = [
//     new Game ("Genshin", "MMO",0),
//     new Game ("Far cry", "Shooter",2000),
//     new Game ("Watch dogs", "Action",2000),
//     new Game ("GTA","Action",1100)
// ]
// // console.log(findGame(2000,"Action"))
// // console.log(findGame("2000","Action"))
// // console.log(typeof(null))


const rewiews:string[] = ["Lorem","Loremm","Loremmm"]
let game = new Game ("Fallout","Shooter",1500, rewiews);
// game.cost = undefined;
console.log(game)
// if (game.cost == null){
//     console.log("This game couldn't be bought");
    
// }
// else{
//     console.log("You can buy this game");
// }
// console.log(game.name.toFixed(2),game.cost.toUpperCase(2));
const magicBox:any = {}
const blackBox:unknown = {}
function test(value:unknown){
    if (value == null){
        return value + ""
    }
    if (value instanceof Game){
        return `${value.name} ${value.genre} ${value.cost}`
    }
}
// const rewiews:string[] = []
// const rewiews:[string,number,string][] = [["Andrew",5,"Lorem"]]
