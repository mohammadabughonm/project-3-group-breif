const failimg = document.querySelector(".fail-img");
const passimg = document.querySelector(".pass-img");
const examresult = document.querySelector(".exam-result");
const buttonveiw = document.querySelector(".button-veiw");
const vieweverymark = document.querySelector(".view-every-mark");
const result = document.querySelector(".result");
const wordresult = document.querySelector(".word-result");
const resultcolor = document.querySelector(".result-color");



// to hide one of photo to make this need to use display none  and storge data in storge 
passimg.style.display = "none";
var numcrrut = ["a", "d", "b", "b", "c"];
localStorage.setItem("numcrrut", JSON.stringify(numcrrut));


// now have user grade and but them in sessionStorage
var numCorrect = JSON.parse(localStorage.getItem("numcrrut"));

// Initialize the counter variable to 0
let counter = 0;

// Wait for the page to load before executing the following code
window.onload = function () {
    // Log the correct mark array to the console
    console.log(numcrrut);

    // Loop through the questions and increment the counter for each correct mark
    for (i = 0; i < 5; i++) {
        // Get the user's mark for this question from session storage
        // Check if the user's mark matches the correct mark for this question
        if (numcrrut[i] === sessionStorage.getItem(`question${i + 1}`)) {
            // Increment the counter if the mark is correct
            counter++;
        }
    }
    


    
    // Display the user's score 
    if (counter > 2) {
        passimg.style.display = "block";
        failimg.style.display = "none";
        examresult.innerHTML = `you have good mark  ${counter} from 5`;
        result.innerHTML = `${counter}/5`;
        result.style.color = "green";
        resultcolor.style.border = "thick solid #1d8e0a";
    }
    else {
        failimg.style.display = "block";
        examresult.innerHTML = `you can make better than this ${counter} from 5`;
        result.innerHTML = `${counter}/5`;
        result.style.color = "red";
        resultcolor.style.border = "10px solid #f50001";
    }
};
// Show/hide answers button
// to show/hide answers ...
// https://stackoverflow.com/questions/23795141/view-concept-in-onclick-event
buttonveiw.onclick = function () {
    if (buttonveiw.innerHTML === "Show Answers") {
        buttonveiw.innerHTML = "Hide Answers";
        var qnumber = 1;
        // create mark div and change its style
        for (i = 0; i < 5; i++) {
            if (
                numCorrect[i] === sessionStorage.getItem(`question${i + 1}`)
            )  {
                var mark = document.createElement("div");
                mark.setAttribute("class", "correct-mark");
                vieweverymark.append(mark);
                mark.innerHTML = `Question ${qnumber} : ${sessionStorage.getItem(
                    `question${i + 1}`
                )} <span  class="checkmark">&#10004;</span>`;
                qnumber++;
            } else {
                var mark = document.createElement("div");
                mark.setAttribute("class", "wrong-mark");
                vieweverymark.append(mark);
                mark.style.color = "red";
                mark.innerHTML = `Question ${qnumber} : ${sessionStorage.getItem(
                    `question${i + 1}`
                )} <span style="color: red;"  class="cross">&#10006;</span>`;
                var correction = document.createElement("div");
                correction.setAttribute("class", "correction");
                correction.innerHTML = `The correct mark is: ${numcrrut[i]}`;
                correction.style.color = "green";
                mark.append(correction);
                qnumber++;
            }
        }
    } else {
        buttonveiw.innerHTML = "Show Answers";
        vieweverymark.innerHTML = "";
    }
};


// Logout
let logoutBtn = document.getElementById("logoutBtn");
function logout() {
    // Remove the token from session storage
    sessionStorage.removeItem('token');
    console.log('Logout successful');
  }





