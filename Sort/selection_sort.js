const unsorted_numbers = [5,9,3,1,2,8,4,7,6];

// function SELECTIONSORT(ARRAY)					        (1)
//     loop INDEX from 0 to size of ARRAY – 2			    (2)
// 	  MININDEX = 0						                (3)
//         # find minimum index					
//         loop INDEX2 from INDEX to size of ARRAY – 1		(4)
//             if ARRAY[INDEX2] < ARRAY[MININDEX] then		(5)
//                 MININDEX = INDEX					    (6)
//             end if							            (7)
//         end loop							            (8)
//         # swap elements
//         TEMP = ARRAY[MININDEX]					        (9)
//         ARRAY[MININDEX] = ARRAY[INDEX]				    (10)
//         ARRAY[INDEX] = TEMP					            (11)
//     end loop								            (12)
// end function


function selectionSort(numbers) {
    let n_size = numbers.length;
    // 'i' represents how many numbers have been sorted
    // AND
    // 'n_size-1' because we can assume that if every number before the last is sorted then the last element is too. 
    for (let i=0; i<n_size-1; i++) {
        // 'min_index' represents the position where the lowest number is in the unsorted array.
        let min_index = i;
        // 'j' used for linear search.
        // 'j=i' everything before 'i' has been sorted.
        for (let j=i; j<n_size; j++) {
            // if 'numbers[j]' is less than the current lowest seen number in the array.
            if (numbers[j] < numbers[min_index]) {
                min_index = j;
            }
        }
        // break;
        let temp = numbers[min_index];
        numbers[min_index] = numbers[i];    // Swap unsorted number with lowest number in unsorted array.
        numbers[i] = temp;                  // Swap lowest number with unsorted number in unsorted array.

    }

    
    console.log("sorted", numbers);
}



console.log("unsorted", unsorted_numbers);
selectionSort(unsorted_numbers);