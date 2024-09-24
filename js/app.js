const countOne = document.querySelector(".userone_balls_num");
const rendomNumber = document.querySelector(".userone_rendom_num");
const clickBtn = document.querySelector(".userone_btn");

const countTwo = document.querySelector(".usertwo_balls_num");
const rendomNumberTwo = document.querySelector(".usertwo_rendom_num");
const clickBtnTwo = document.querySelector(".usertwo_btn");

const tugatish = document.querySelector(".tuxtatish");
const tugatishText = document.querySelector(".tuxtatish_text");



clickBtn.addEventListener("click", (e) => {
    let res = Math.floor(Math.random() * 10)
    rendomNumber.textContent = res;
    countOne.textContent = +countOne.textContent + res;
    clickBtn.disabled = true;
    clickBtnTwo.disabled = false;
    clickBtnTwo.ariaDisabled;
    clickBtnTwo.style.backgroundColor = "dodgerblue"
    clickBtn.style.backgroundColor = "grey"

    if (parseInt(countOne.textContent) >= 30) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 1 g'olib buldi";
    } else if (parseInt(countTwo.textContent) >= 30) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 2 g'olib buldi";
    } else {
        tugatish.style.display = "none";
    }
});

clickBtnTwo.addEventListener("click", (e) => {
    let res = Math.floor(Math.random() * 10)
    rendomNumberTwo.textContent = res;
    countTwo.textContent = +countTwo.textContent + res;
    clickBtnTwo.disabled = true;
    clickBtn.disabled = false;
    clickBtn.ariaDisabled;
    clickBtnTwo.style.backgroundColor = "grey"
    clickBtn.style.backgroundColor = "dodgerblue"


    if (parseInt(countOne.textContent) >= 30) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 1 g'olib buldi";
    } else if (parseInt(countTwo.textContent) >= 30) {
        tugatish.style.display = "flex";
        tugatishText.textContent = "User 2 g'olib buldi";
    } else {
        tugatish.style.display = "none";
    }
});
