"use strict";


let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let play = prompt("Do you want to play a game with Grant the Mighty Chicken?");

if (play === "yes") {
    let userName = prompt("What is your character's name?");
    while (play) {
        userHealth -= Math.floor(Math.random() * 2) + 1;
        grantHealth -= Math.floor(Math.random() * 2) + 1;
        console.log(`${userName} has ${userHealth} health left.`)
        console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`)
        if (grantHealth <= 0) {
            userWins += 1;
            grantHealth = 10;
        }
        if (userHealth <= 0) {
            console.log(`You lose!`);
            break;
        }
        if (userWins === 3) {
            console.log(`You win!`);
            break;
        }
    }
}

