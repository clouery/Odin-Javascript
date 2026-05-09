// let firstName = "John";
// let lastName = "Doe";

// console.log(firstName);
// console.log(lastName);
// console.log(firstName + " " + lastName);

// const pi = 3.14;
// // pi = 10;
// console.log(pi);

// let a = pi * 5;
// console.log(a);

// let max = 57;
// let actual = max - 13;
// let percentage = actual/max
// console.log(percentage);

function createParagraph() {
    const para = document.createElement("p");
    para.textContent= "You clicked the button!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for(const button of buttons) {
    button.addEventListener("click", createParagraph);
}