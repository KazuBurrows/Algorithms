const unsorted_numbers = [5,9,3,1,2,8,4,7,6];
// var items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }



// console.log("unsorted", unsorted_numbers);
// console.log("sorted", quickSort(unsorted_numbers, 0, 8));








// 'START' and 'END' represent the first and last index of a sub-array
function quickSort(numbers, START, END) {
    
    // Sub-array consisting of 1 element is considered fully sorted.
    if (END-START <= 1) {
        // console.log(START, END)
        // console.log("TESTING");
        return;
    }

    let newPivot = partition(numbers, START, END);
    // console.log(newPivot)
    quickSort(numbers, START, newPivot-1);
    quickSort(numbers, newPivot, END);

    return numbers;
}


// [5,9,3,1,2,8,4,7,6];

// 'START' and 'END' represent the first and last index of a sub-array
function partition(numbers, START, END) {
    // console.log(END)
    let pivotElement = numbers[END];
    let LEFTMARKER = START;
    let RIGHTMARKER = END-1;

    while (LEFTMARKER < END) {
        // console.log("FIRST CONDITION", LEFTMARKER, END);
        // First try find an element in sub-array greater than or equal to the 'pivotElement'.
        // Loop finishes when it reaches element is found. The outer loop will make sure 
        // the 'LEFTMARKER' won't exceed index range.
        while (numbers[LEFTMARKER] < pivotElement) {
            // console.log(numbers[LEFTMARKER])
            LEFTMARKER++;
        }
        // console.log(LEFTMARKER, RIGHTMARKER)
        // Now try find an element in sub-array less than 'pivotElement' or stop when
        // 'RIGHTMARKER' is equal to LEFTMARKER.
        while (RIGHTMARKER >= LEFTMARKER) {
            if (numbers[RIGHTMARKER] < pivotElement) {
                break;
            }
            RIGHTMARKER--;
        }


        // if leftmarker == rightmarker then swap leftmarker with pivot. loop is over.
        // else
        if (LEFTMARKER >= RIGHTMARKER) {
            // console.log("TEST", numbers[END], numbers[LEFTMARKER])
            numbers[END] = numbers[LEFTMARKER];
            numbers[LEFTMARKER] = pivotElement;

            // LEFTMARKER++;
            break;
        } else {
            let temp = numbers[LEFTMARKER];
            numbers[LEFTMARKER] = numbers[RIGHTMARKER];
            numbers[RIGHTMARKER] = temp;

            LEFTMARKER++;
            RIGHTMARKER--;
        }
        // console.log(numbers)
    }

    return LEFTMARKER;
}




console.log("unsorted", unsorted_numbers);
console.log("sorted", quickSort(unsorted_numbers, 0, 8));