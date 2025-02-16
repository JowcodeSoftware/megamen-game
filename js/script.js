const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};

const loop = setInterval(() => {
    console.log(mario.Position);

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
    
        mario.style.animation = "none";
        mario.style.botton = `${marioPosition}px`;

        mario.style.animation = "none";
        mario.src = "./images/game.png";

        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);

        alert("GAME OVER !!!");

    };

}, 10);

document.addEventListener("keydown", jump);
