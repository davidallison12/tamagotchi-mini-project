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
const playButton = document.querySelector('#play-button')
const lightsButton = document.querySelector('#lights-button')
const feedButton = document.querySelector('#feed-button')
const boredomDisplay = document.querySelector('#boredom-points')
const hungerDisplay = document.querySelector('#hunger-points')
const sleepDisplay = document.querySelector('#sleep-points')
const ageDisplay = document.querySelector('#age-level')
const nameInput = document.querySelector('#name-input')
const nameButton = document.querySelector('#name-button')
const screen = document.querySelector('.screen')
// playButton.addEventListener('click',()=>{ console.log(playButton)})


console.log(playButton)
console.log(lightsButton)
console.log(feedButton)


// const tamagotchi = {
//     //Lets start with the buttons and getting them to work 
//     hunger: 1,
//     sleepiness: 1,
//     boredom: 1,
//     age: 0,
// }
//Creating class for Tamagotchi and will instantiate in game
class Tamagotchi {
    constructor(name) {
        this.name = name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
        this.currentAge = 0
        this.movementInterval = 0
        this.evolutions = ['../image/normal-luffy.png', '../image/bounce-luffy.png']//Array of different sprite urls

    }
    //Need a movement function
    moveAround() {
        //Manipulate Flex inside of the screen div
        //How?
        
        //Have a set attribute for both justify content and align items 
        //Have them selected at random through a loop 
        //I could make an array with flex start, flex end, and center 
        const positions = ['flex-start', 'center', 'flex-end']
        

        const movementSpeed = setInterval(() => {
            this.movementInterval ++

            if((this.movementInterval%2) === 0) {
                screen.style.justifyContent = positions[ Math.floor(Math.random() * positions.length)]
                screen.style.alignItems = positions[ Math.floor(Math.random() * positions.length)] 
            }

            if (this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10){
                clearInterval(movementSpeed)
            }
        }, 200)
        
        
    }
    //Need a evolve function 
    evolve() {
        console.log(document.querySelector('.sprite'))
        document.querySelector('.sprite').src = this.evolutions[this.age-1]
        
    }
        //This should include a death look.
}

//Create All of the decrementers for the buttons
//Do them all separately 
//Then we can work on trying to combine them together. 

// const decrementHunger = feedButton.addEventListener('click', (event) => {
//     game.tamaLuffy.hunger--
//     hungerDisplay.innerText = game.tamaLuffy.hunger
// })

// const decrementBoredom = playButton.addEventListener('click', (event) => {
//     game.tamaLuffy.boredom--
//     boredomDisplay.innerText = game.tamaLuffy.boredom
// })

// //Lets do sleep last since we will need to toggle this one with night. 

// //First time it is clicked, it will make it night time.
// //Second time it is clicked it goes back to day and sleep increments down 
// let sleepIncrementer = game.sleepIncrementer
// const decrementSleep = lightsButton.addEventListener('click',(event) => {
    
//     if ((sleepIncrementer%2) === 0 || sleepIncrementer === 0) {
//         document.querySelector('.screen').classList.toggle('night-time')
//     }else {
//         // document.querySelector('#screen').classList.toggle('night-time')
//         game.tamaLuffy.sleepiness--
//         sleepDisplay.innerText = game.tamaLuffy.sleepiness
//     }
//     console.log(sleepIncrementer)
//     sleepIncrementer++
// } )

const game = {
    tamaLuffy: null,
    timer: 0,
    sleepIncrementer:0,
    setTime() {
        const gameTimer = setInterval(() => {
            // Create timer that increase time every second 
            
            // Sleep - Will increase every 4 seconds 
            // Boredom  - Will increase every 3 seconds 
    
            this.timer++
            //Adding TamaLuffy Movement in Set Interval to change every second
            
            
            // Hunger - It will increase every second 
            if ((this.timer % 1) === 0) {
                this.tamaLuffy.hunger++
                hungerDisplay.innerText = this.tamaLuffy.hunger
            } 
            // Boredom  - Will increase every 3 seconds
            if ((this.timer % 3) === 0) {
                this.tamaLuffy.boredom++
                boredomDisplay.innerText = this.tamaLuffy.boredom
            }
            // Sleep - Will increase every 4 seconds 
            if((this.timer % 4) === 0) {
                this.tamaLuffy.sleepiness++
                sleepDisplay.innerText = this.tamaLuffy.sleepiness
            }
            // Age - Will increase every 10 seconds 
            if ((this.timer % 10) === 0) {
                this.tamaLuffy.age++
                ageDisplay.innerText = this.tamaLuffy.age

                //Added evolution functionality here 
                if (this.tamaLuffy.age == 1 || this.tamaLuffy.age == 2) { //If used anywhere else the if statement will be read at the beginning and only then
                    // console.log(document.querySelector('.sprite'))
                    this.tamaLuffy.evolve() //Calls classes evolution function 
                }
                
            }
            //Clearing interval if player loses
            if(this.tamaLuffy.hunger >= 10 || this.tamaLuffy.boredom >= 10 || this.tamaLuffy.sleepiness >= 10) {
                clearInterval(gameTimer)
                // document.querySelectorAll('.buttons').disabled = true [ CAN NOT GET TO WORK RIGHT NOW]
                // playButton.setAttribute('disabled','true')
                // lightsButton.disabled = true
                // feedButton.disabled = true
                document.querySelector('.buttons-container').disabled = true
    
                
               
            }
    
        }, 1000)
    },
    startGame() {
        let newTamaLuffy = new Tamagotchi(nameInput.value)
        this.tamaLuffy = newTamaLuffy 
        console.log(this.tamaLuffy)
        document.querySelector('#tamagotchi-name').innerText = nameInput.value
        this.setTime()
        this.tamaLuffy.moveAround()
        console.log(document.querySelector('.sprite'))
        
    },
    // evolve() {
    //     if (this.tamaLuffy.age === 1 || this.tamaLuffy.age === 2) {
    //         this.tamaLuffy.evolve()
    //     }
    // }
    
}


//start game 
    // What needs to happen 
    //Once name has been place in the prompt 
    //  start the timer
    // instantiate tamagotchi(AKA Luffy) with value in the input
    //run game

    nameButton.addEventListener('click', (event) => {
        // console.log(nameInput.value)
        // console.log(event.target)
        // document.querySelector('#tamagotchi-name').innerText = nameInput.value
        game.startGame()
    })
//Create All of the decrementers for the buttons
//Do them all separately 
//Then we can work on trying to combine them together. 

const decrementHunger = feedButton.addEventListener('click', (event) => {
    game.tamaLuffy.hunger--
    hungerDisplay.innerText = game.tamaLuffy.hunger
})

const decrementBoredom = playButton.addEventListener('click', (event) => {
    game.tamaLuffy.boredom--
    boredomDisplay.innerText = game.tamaLuffy.boredom
})

//Lets do sleep last since we will need to toggle this one with night. 

//First time it is clicked, it will make it night time.
//Second time it is clicked it goes back to day and sleep increments down 
let sleepIncrementer = game.sleepIncrementer
const decrementSleep = lightsButton.addEventListener('click',(event) => {
    
    if ((sleepIncrementer%2) === 0 || sleepIncrementer === 0) {
        document.querySelector('.screen').classList.toggle('night-time')
    }else {
        // document.querySelector('#screen').classList.toggle('night-time')
        game.tamaLuffy.sleepiness--
        sleepDisplay.innerText = game.tamaLuffy.sleepiness
    }
    console.log(sleepIncrementer)
    sleepIncrementer++
} )










// const startGame = () => {
   
// }




// game.setTime()
// const buttonBegin



// Things that still need to happen 
// Creating night scene for sleep
// Creating the death scene/ Whatever that is going to look like
// Toggle Formatting and improving css
    //Buttons 
    //Font size and 
    //Name adjustments 
    //Adding Jolly rogers 
    //Look into altering background some 
//Clean up code in here 
//Adjust everything so it feels more seamless!
