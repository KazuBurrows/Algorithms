const unsorted_numbers = [5,9,3,1,2,8,4,7,6];

// i ← 1
// while i < length(A)
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
//     i ← i + 1
// end while


function insertionSort(numbers) {
    // 'i' represents how many numbers have been sorted(first number is considered sorted by default)
    let i = 1;
    let n_size = numbers.length;
    while (i < n_size) {
        // 'j' represents the number we want to compare.
        // 'j > 0' so we don't go out of array index range
        // AND
        // 'numbers[j-1] > numbers[j]' stop if the number we are comparing is greater than number to its left
        let j = i;
        while (j > 0 && numbers[j-1] > numbers[j]) {
            let temp = numbers[j];
            numbers[j] = numbers[j-1];
            numbers[j-1] = temp;
            j--;
        }
        
        i++;
    }

    console.log("sorted", numbers);
}



console.log("unsorted", unsorted_numbers);
insertionSort(unsorted_numbers);

