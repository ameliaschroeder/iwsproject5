//     Amelia Schroeder 
//     Project 3 (js portion)
//     Due Date: Feb 12
//     Submission date: Feb 11

function drawBalls() {
    var lottoObject = new Lotto(30, 5);
    lottoObject.selectBalls();
    for (let i = 1; i <= 5; i++) {
        let imgLocation = i.valueOf();
        let imgNum = lottoObject.getBall(i);
        let image = document.getElementById(imgLocation);
        let pathName = "lottoballs/" + imgNum + ".gif";
        image.src = pathName;
    }
}

function init() {
    let btn = document.getElementById("lotto_btn");
    btn.addEventListener("click", drawBalls);

    for (let i = 1; i <= 5; i++) {
        let imageId = i.valueOf();
        let image = document.getElementById(imageId);
        image.addEventListener("click", event => {
            var clickedImage = event.target;
            var imgNum = (Math.floor(Math.random() * +
                6) + 1).valueOf();
            clickedImage.src = "lottoballs/" + imgNum + ".gif";
        });
    }
}

window.addEventListener("load", init);
