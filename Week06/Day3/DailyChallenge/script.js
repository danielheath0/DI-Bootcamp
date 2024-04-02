class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}!` ;
  }
}

let montyJava = new Video('Monty Java', 'James Brown', 1000)
let danseMacabre = new Video('Danse Macabre', 'Gothy Glenn', 666)

const videoArray = [
    { title: "The Epic Fail Compilation", uploader: "John", time: 573 },
    { title: "Cat vs. Balloons: A Battle of Wits", uploader: "Emily", time: 8246 },
    { title: "Cooking Disaster: When Pancakes Attack", uploader: "Bob", time: 3157 },
    { title: "Dancing Grandma: Breakdancing Bonanza", uploader: "Alice", time: 912 },
    { title: "Alien Invasion Prank Gone Wrong", uploader: "Kevin", time: 6378 }
];

let arr = [];

videoArray.forEach((item) => {
    const {title, uploader, time} = item;
    arr.push(new Video(title, uploader, time))
});
console.log(arr)

arr.forEach((item) => {
    console.log(item.watch())
})