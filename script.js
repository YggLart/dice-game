
  var button = document.querySelector("button");
  var title = document.querySelector("h1")
  var img1 = document.getElementsByTagName("img")[0];
  var img2 = document.getElementsByTagName("img")[1];

  function randomNumberGenerator1() {
    randomNumber1 = Math.floor((Math.random() * 6) + 1);
    return randomNumber1
  }

  function randomNumberGenerator2() {
    randomNumber2 = Math.floor((Math.random() * 6) + 1);
    return randomNumber2
  }


  function changeDice() {
      img1.setAttribute("src", "images/dice" + randomNumberGenerator1() + ".svg");
      img2.setAttribute("src", "images/dice" + randomNumberGenerator2() + ".svg");

      // Player 1 Win
      if (randomNumber1 > randomNumber2) {
      title.innerText = "☜(ﾟヮﾟ☜) WIN";
      title.classList.remove("player2")
      title.classList.add("player1")
    } else if (randomNumber1 < randomNumber2) {
      title.innerText = "WIN (☞ﾟヮﾟ)☞";
      title.classList.remove("player1")
      title.classList.add("player2")
    } else {
      title.innerText = "Draw!! (>'-'<)";
      title.classList.remove("player1")
      title.classList.remove("player2")
    }

  }

  function clickButton() {
    button.addEventListener("click", changeDice, false);
  }


  document.addEventListener("DOMContentLoaded", clickButton, false);



    // // Random Numbers
    // var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    // var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    //
    // // Select HTML Elements
    // var button = document.querySelector("button");
    // var title = document.querySelector("h1");
    // var img1 = document.getElementsByTagName("img")[0];
    // var img2 = document.getElementsByTagName("img")[1];
    //
    // // Generate Random Number 1
    // function randomNumberGenerator1() {
    //   randomNumber1 = Math.floor((Math.random() * 6) + 1);
    //   return randomNumber1
    // }
    //
    // // Generate Random Number 2
    // function randomNumberGenerator2() {
    //   randomNumber2 = Math.floor((Math.random() * 6) + 1);
    //   return randomNumber2
    // }
    //
    // // Button Call
    // function changeDice() {
    //     img1.setAttribute("src", "images/dice" + randomNumberGenerator1() + ".png");
    //     img2.setAttribute("src", "images/dice" + randomNumberGenerator2() + ".png");
    //
      //   // Player 1 Win
      //   if (randomNumber1 > randomNumber2) {
      //   title.innerText("Player 1 Win! ☜(ﾟヮﾟ☜)")
      // } else if (randomNumber1 < randomNumber2) {
      //   title.innerText("Player 2 Win! (☞ﾟヮﾟ)☞")
      // ) else {
      //   title.innerText("It's a Draw!! (>'-'<)")
      // }
    //
    // }
    //
    // function clickButton() {
    //   button.addEventListener("click", changeDice, false);
    // }
    //
    //
    // document.addEventListener("DOMContentLoaded", clickButton, false);
