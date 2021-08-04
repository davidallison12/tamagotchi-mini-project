//Things that need to happen

// Input name to start the game
// Luffy needs to bounce around the screen
// As he bounces, his hunger, sleep, and boredom increase
    //These all should increase at different levels (knowing Luffy, hunger will increase quickly)
    //WHEN ANY OF THEM REACH 10 LUFFY DIES/IS DEFEATED (LETS FIGURE OUT SOME COOL WAY TO DO THIS)
    //THEY CAN'T GO BELOW ZERO
//After a certain period of time the age will increment as well
    //When he ages the sprite will change to teen luffy -> gear 4 luffy or balloon luffy

//When buttons are clicked, they should decrease their respective section
let playButton = document.querySelector('#play-button')
let lightsButton = document.querySelector('#lights-button')
let feedButton = document.querySelector('#feed-button')

playButton.addEventListener('click',()=>{ console.log(playButton)})


console.log(playButton)
console.log(lightsButton)
console.log(feedButton)


const tamagotchi = {
    //Lets start with the buttons and getting them to work 
    hunger: 1,
    sleepiness: 1,
    boredom: 1,
    age: 1,
}

const decrementHunger = feedButton.addEventListener('click', (event) => {
    tamagotchi.hunger--
    document.querySelector('#hunger-points').innerText = tamagotchi.hunger
})




// const buttonBegin
