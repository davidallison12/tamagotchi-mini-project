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

// playButton.addEventListener('click',()=>{ console.log(playButton)})


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

//Create All of the decrementers for the buttons
//Do them all separately 
//Then we can work on trying to combine them together. 

const decrementHunger = feedButton.addEventListener('click', (event) => {
    tamagotchi.hunger--
    document.querySelector('#hunger-points').innerText = tamagotchi.hunger
})

const decrementBoredom = playButton.addEventListener('click', (event) => {
    tamagotchi.boredom--
    document.querySelector('#boredom-points').innerText = tamagotchi.boredom
})

//Lets do sleep last since we will need to toggle this one with night. 

//First time it is clicked, it will make it night time.
//Second time it is clicked it goes back to day and sleep increments down 
let sleepIncrementer = 0 
const decrementSleep = lightsButton.addEventListener('click',(event) => {
    
    if ((sleepIncrementer%2) === 0 || sleepIncrementer === 0) {
        document.querySelector('.screen').classList.toggle('night-time')
    }else {
        // document.querySelector('#screen').classList.toggle('night-time')
        tamagotchi.sleepiness--
        document.querySelector('#sleep-points').innerText = tamagotchi.sleepiness
    }
    console.log(sleepIncrementer)
    sleepIncrementer++
} )




// const buttonBegin
