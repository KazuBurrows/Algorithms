const unsorted_numbers = [5,9,3,1,2,8,4,7,6];

// function BUBBLESORT(ARRAY)							            (1)
//     # loop through the array multiple times
//     loop INDEX from 0 to size of ARRAY – 1					    (2)
//         # consider every pair of elements except the sorted ones
//         loop INDEX2 from 0 to size of ARRAY – 2 – INDEX			(3)
//             if ARRAY[INDEX2] > ARRAY[INDEX2 + 1] then			(4)
//                 # swap elements if they are out of order
//                 TEMP = ARRAY[INDEX2]						    (5)
//                 ARRAY[INDEX2] = ARRAY[INDEX2 + 1]				(6)
//                 ARRAY[INDEX2 + 1] = TEMP					    (7)
//             end if
//         end loop
//     end loop
// end function


function bubbleSort(numbers) {
    let n_size = numbers.length;
    // 'i' represents how many numbers have been sorted
    for (let i=0; i<n_size; i++) {
        // 'j' represents the number we want comparing.
        // 'n_size-2-i' without '-1' comparing the last 'j' and 'j+1', 'j+1' will be out of array index range 
        // without '-i' we will be making redundent comparisons with sorted numbers.
        for (let j=0; j<n_size-1-i; j++) {
            if (numbers[j] > numbers[j+1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;

            }
        }
    }

    console.log("sorted", numbers)

}

console.log("unsorted", unsorted_numbers);
bubbleSort(unsorted_numbers);