const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
const myButton = document.querySelector("button");

function setName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setName();
    } else {
        localStorage.setItem("site-name", myName)
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/tree-1.jpeg') {
        myImage.setAttribute("src", "images/tree-2.jpeg")
    } else {
        myImage.setAttribute("src", "images/tree-1.jpeg")
    }
}

myButton.onclick = () => {
    setName();
}

if (!localStorage.getItem("site-name")) {
    setName();
} else {
    const myName = localStorage.getItem("site-name")
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}