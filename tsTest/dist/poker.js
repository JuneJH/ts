function createPoker() {
    const pokers = [];
    for (let i = 1; i <= 13; i++) {
        pokers.push({
            color: "♠",
            num: i,
        }, {
            color: "♥",
            num: i,
        }, {
            color: "♣",
            num: i,
        }, {
            color: "♦",
            num: i,
        });
    }
    return pokers;
}
function printPokers(pokers) {
    let str = "";
    pokers.forEach((ele, index) => {
        if (ele.num <= 10) {
            str += ele.color + "==" + ele.num;
        }
        else if (ele.num == 11) {
            str += ele.color + "==" + ele.num;
        }
        else if (ele.num == 12) {
            str += ele.color + "==" + ele.num;
        }
        else if (ele.num == 13) {
            str += ele.color + "==" + ele.num;
        }
        if (index % 4 == 0) {
            str += '/n/t';
        }
    });
    console.log(str);
}
