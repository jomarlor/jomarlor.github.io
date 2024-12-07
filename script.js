const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Manyakis";
    const gif = document.querySelector('img');
    gif.src="https://wp.scoopwhoop.com/wp-content/uploads/2022/03/6232d299b84043000133de3d_a447b5ef-d8ea-49a7-a2f4-cf2d8843155a.gif"
    gif.width = 300;
    gif.height = 300;
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const  randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})