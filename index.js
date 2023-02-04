let homeScore = 0
let guestScore = 0
// Score for Home +1. +2, +3----
let homeScoreBtnOne = document.getElementById("home-btn+1")
let homeStoreEl1 =document.getElementById("home-score")
let homeScoreBtnTwo = document.getElementById("home-btn+2")
let homeStoreEl2 =document.getElementById("home-score")
let homeScoreBtnThree = document.getElementById("home-btn+3")
let homeStoreEl3 =document.getElementById("home-score")
// Score for Guest +1. +2, +3------
let guestScoreBtnOne = document.getElementById("guest-score-btn+1")
let guestStoreEl1 =document.getElementById("guest-score")
let guestScoreBtnTwo = document.getElementById("guest-score-btn+2")
let guestStoreEl2 =document.getElementById("guest-score")
let guestScoreBtnThree = document.getElementById("guest-score-btn+3")
let guestStoreEl3 =document.getElementById("guest-score")
// Functions Home -----
function increaseHomeOne(){
    homeScore += 1 
    homeStoreEl1.textContent = homeScore 
    }
function increaseHomeTwo(){ 
    homeScore += 2 
    homeStoreEl2.textContent = homeScore 
    }
function increaseHomeThree(){ 
    homeScore += 3 
    homeStoreEl3.textContent = homeScore
}
// Functions Guest ------
function increaseGuestOne(){ 
    guestScore += 1 
    guestStoreEl1.textContent = guestScore 
}
function increaseGuestTwo(){ 
    guestScore += 2 
    guestStoreEl2.textContent = guestScore
}
function increaseGuestThree(){ 
    guestScore += 3 
    guestStoreEl3.textContent = guestScore 
}