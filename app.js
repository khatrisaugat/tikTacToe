window.addEventListener('load', () => {
    const grid = document.querySelector('.grid');
    const noOfBoxes = 9;
    const row = Math.sqrt(noOfBoxes);
    const checkedData = [];
    let bool = false;
    let iconClass = 'fa-circle-thin';
    //creating boxes
    for (let index = 0; index < noOfBoxes; index++) {
        const box = document.createElement('div');
        box.classList.add('box' + index);
        box.setAttribute('data-box', index);
        grid.appendChild(box);
    }

    //adding click event listeners
    for (let index = 0; index < noOfBoxes; index++) {
        const boxSelected = document.querySelector('.' + 'box' + index);
        boxSelected.addEventListener('click', () => {
            const icon = document.createElement('i');
            icon.classList.add('fa', iconClass);
            boxSelected.appendChild(icon);
            if (iconClass === 'fa-circle-thin') {
                boxSelected.setAttribute("data", "0");
                iconClass = 'fa-times';
            } else if (iconClass === 'fa-times') {
                boxSelected.setAttribute("data", "1");
                iconClass = 'fa-circle-thin';
            }
            // checkInGame();
        });
    }

    //check for success
    // const checkInGame = () => {
    // for (let index = 0; index < noOfBoxes; index++) {
    //     if (index === 1 || index === 4 || index === 7) {
    //         const rowOfThree = ['box' + (index - 1), 'box' + index, 'box' + (index + 1)];
    //         if (rowOfThree.every(boxClass => {
    //             document.querySelector('.' + boxClass).getAttribute('data') === 0;
    //         })) {
    //             alert("Congratulations you win");
    //         } else if ((rowOfThree.every(boxClass => {
    //             document.querySelector('.' + boxClass).getAttribute('data') === 1;
    //         }))) {
    //             alert("Congratulations you win");
    //         }
    //     }

    // };


    // }
    // });




    setInterval(() => {

        const boxes = document.querySelectorAll("div[data]");

        // console.log(row);
        // console.log(boxes);
        // boxes.forEach((cur) => {
        boxes.forEach(el => {
            checkedData.push(parseInt(el.getAttribute('data-box')));
        });
        // console.log(cur.getAttribute('data-box'));
        for (let index = 0; index < noOfBoxes; index + row) {
            if (index < row) {
                for (let i = index; i < row; i++) {
                    bool = checkedData.includes(i);
                }
                //checkedData.includes(index, row - 1,)
            }
            if (index < row * 2 && index >= row) {
                for (let i = index; i < row * 2; i++) {
                    bool = checkedData.includes(i);
                }
                //checkedData.includes(index, row - 1,)
            }
            if (index < row * 3 && index >= row * 2) {
                for (let i = index; i < row * 3; i++) {
                    bool = checkedData.includes(i);
                }
                //checkedData.includes(index, row - 1,)
            }
        }
        if (bool) {
            alert("congrats!! You have won the game");
        }
    }, 100);
});