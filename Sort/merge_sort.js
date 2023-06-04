const unsorted_numbers = [5,9,3,1,2,8,4,7,6];

// function MERGESORT(ARRAY, START, END)			(1)
//     # base case size == 1		
//     if END - START + 1 == 1 then				(2)		
//         return						            (3)
//     end if							            (4)
//     # base case size == 2
//     if END - START + 1 == 2 then				(5)
//         # check if elements are out of order
//         if ARRAY[START] > ARRAY[END] then		(6)
//             # swap if so
//             TEMP = ARRAY[START]				    (7)
//             ARRAY[START] = ARRAY[END]			(8)
//             ARRAY[END] = TEMP				    (9)
//         end if						            (10)
//         return						            (11)
//     end if							            (12)
//     # find midpoint
//     HALF = int((START + END) / 2)			    (13)
//     # sort first half
//     MERGESORT(ARRAY, START, HALF)			    (14)
//     # sort second half
//     MERGESORT(ARRAY, HALF + 1, END)			    (15)
//     # merge halves
//     MERGE(ARRAY, START, HALF, END)			    (16)
// end function							        (17)



function mergeSort(numbers, START, END) {
    // console.log("SORT START END", START, END)
    // console.log("SORT NUMBERS", numbers)
    // Base case
    if (END-START + 1 == 1) {
        return;
    }

    // 'merge()' function doesn't handle a sub-array of 2 elements.
    //      because of line 107 condition will be provoked and continue
    //      to line 121 and 125 and they don't sort the sub-array elements.
    if (END - START + 1 == 2) {
        // console.log("START END", START, END);
        if (numbers[START] > numbers[END]) {
            let temp = numbers[START];
            numbers[START] = numbers[END];
            numbers[END] = temp;
        }
        return;
    }

    let HALF = Math.ceil((START + END)/2);
    // Sort first half. 
    mergeSort(numbers, START, HALF);
    // Sort second half. This is called only when hitting the base case. 
    mergeSort(numbers, HALF+1, END);
    //
    merge(numbers, START, HALF, END);
    // After the merge is called we would have reached the bottom of the call stack. 
    
    return numbers;
}



// function MERGE(ARRAY, START, HALF, END)			    (1)
//     TEMPARRAY = new array[END – START + 1]			(2)
//     INDEX1 = START							        (3)
//     INDEX2 = HALF + 1						        (4)
//     NEWINDEX = 0							        (5)
//     loop while INDEX1 <= HALF and INDEX2 <= END		(6)
//         if ARRAY[INDEX1] < ARRAY[INDEX2] then		(7)
//             TEMPARRAY[NEWINDEX] = ARRAY[INDEX1]		(8)
//             INDEX1 = INDEX1 + 1					    (9)
//         else								        (10)
//             TEMPARRAY[NEWINDEX] = ARRAY[INDEX2]		(11)
//             INDEX2 = INDEX2 + 1					    (12)
//         end if							            (13)
//         NEWINDEX = NEWINDEX + 1					    (14)
//     end loop								        (15)
//     loop while INDEX1 <= HALF					    (16)
//         TEMPARRAY[NEWINDEX] = ARRAY[INDEX1]			(17)
//         INDEX1 = INDEX1 + 1					        (18)
//         NEWINDEX = NEWINDEX + 1					    (19)
//     end loop								        (20)
//     loop while INDEX2 <= END					    (21)
//         TEMPARRAY[NEWINDEX] = ARRAY[INDEX2]			(22)
//         INDEX2 = INDEX2 + 1					        (23)
//         NEWINDEX = NEWINDEX + 1					    (24)
//     end loop								        (25)
//     loop INDEX from 0 to size of TEMPARRAY – 1		(26)
//         ARRAY[START + INDEX] = TEMPARRAY[INDEX]		(27)
//     end loop								        (28)
// end function								        (29)


// 'HALF' is sent through because we are combining two sub-arrays from our 'numbers' array
function merge(numbers, START, HALF, END) {
    let temp = [];
    let i = START;          // These are dynamic values for when we move to the next number after sorting the current number 
    let j = HALF+1;         // Same here dynamic value for our 2nd sub-array

    // If 'i' or 'j' reaches the end of its sub-array then both sub-arrays are sorted.
    // console.log("START HALF END", START, HALF, END);
    // console.log("NUMBERS", numbers)
    // console.log("sub-arrays", numbers.slice(START, HALF), numbers.slice(HALF+1, END))
    while (i <= HALF && j <= END) {
        // console.log(numbers[i] , "<", numbers[j]);
        // Sorting
        if (numbers[i] < numbers[j]) {
            temp.push(numbers[i]);
            i++;

        } else {
            temp.push(numbers[j]);
            j++;
        }
    }

    // Clean up for when e.g 'i' reaches the end of it's sub-array before 'j' does.
    while (i <= HALF) {
        temp.push(numbers[i]);
        i++;
    }
    while (j <= END) {
        temp.push(numbers[j]);
        j++;
    }
    // console.log("ARRAY1", numbers.slice(0, HALF))
    // console.log("ARRAY2", numbers.slice(HALF, END))
    // console.log("TEMP", temp)
    // Overwrite 
    for (let k=0; k < temp.length; k++) {
        // 'START + k' since we only want to overwrite the sub-arrays so we might be at 'START'=3 and 'END'=4.
        numbers[START + k] = temp[k];

    }
    // console.log("NUMBERS", numbers)

}



console.log("unsorted", unsorted_numbers);
console.log("sorted", mergeSort(unsorted_numbers, 0, 8));