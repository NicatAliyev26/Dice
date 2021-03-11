function myFunction() {
    var randomNumbOne = Math.ceil(Math.random() * 6);
    var randomNumbTwo = Math.ceil(Math.random() * 6);

    document.getElementById("mainDice").src = "img/0"+ randomNumbOne + ".png";
    document.getElementById("secondDice").src = "img/0"+ randomNumbTwo + ".png";

   

    
}