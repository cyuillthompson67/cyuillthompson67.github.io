const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    { filename: "pic1.jpg", alt: "Closeup picture of a human eye"},
    { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
    { filename: "pic3.jpg", alt: "Purple and white flowers" },
    { filename: "pic4.jpg", alt: "Tomb photo" },
    { filename: "pic5.jpg", alt: "Butterfly on a leaf" }
]

const baseURL = "https://raw.github.com/cyuillthompson67/cyuillthompson67.github.io/main/lab4/part2/Images/";

for (const picture of images) {
    const thumbnail = document.createElement("img");

    thumbnail.src = `${baseURL}${picture.filename}`;
    thumbnail.alt = picture.alt;

    thumbnail.tabIndex = "0";

    thumbBar.appendChild(thumbnail);

    thumbnail.addEventListener("click", updateDisplayedImage);

    thumbnail.addEventListener("keydown", (event) => {
        if (event.code === "Enter") {
            updatedisplayedImage(event);
        }
    });
}

function updateDisplayedImage(event) {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
}

btn.addEventListener("click", () => {
    if (btn.classList.contains("dark")) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }

    btn.classList.toggle("dark");
});