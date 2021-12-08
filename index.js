score = 0;
cross = true;




document.onkeydown = function (e) {
    console.log("key code is : ", e.keycode)
    if (e.keyCode == 38) {
        player = document.querySelector('.player');
        player.classList.add('animateplayer');
        setTimeout(() => {
            player.classList.remove('animateplayer')
        }, 700);
    }
    if (e.keyCode == 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 112 + 'px';
    }
    if (e.keyCode == 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 112) + 'px';
    }
}
setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    enemy = document.querySelector('.enemy');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ex);
    offsetY = Math.abs(py - ey);
    console.log(offsetX, offsetY);
    if (offsetX < 113 && offsetY < 52) {
        // gameOver.style.visibility = 'visible';
        gameOver.innerHTML = '-----GAME OVER <BR> TRI AGAIN----';
        enemy.classList.remove('animateenemy');
        player.style.filter= 'invert(1)';
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {

            aniDur = parseFloat(window.getComputedStyle(enemy, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            enemy.style.animatioDuration = newDur + 's'
        }, 500);
    }
}, 100);
function updatescore(score) {
    scorecont.innerHTML = "Your score:" + score
}











// function on(){
//     document.getElementsByClassName("pic")[0].src="./img/pic_bulbon.gif"
//     alert("some thing is WRONG------ pakistan ma light aha gi ha")
// }
// function off(){
//     document.getElementsByClassName("pic")[0].src="./img/pic_bulboff.gif"
//     alert("ni gulthi say wapda na light on ki thi-----ya pakistan hi ha")

// }

// function on(){
//     document.getElementsByClassName("pic")[1].src="./img/pic_bulbon.gif"
//     alert("some thing is WRONG------ pakistan ma light aha gi ha")
// }
// function off(){
//     document.getElementsByClassName("pic")[1].src="./img/pic_bulboff.gif"
//     alert("ni gulthi say wapda na light on ki thi-----ya pakistan hi ha")

// }

