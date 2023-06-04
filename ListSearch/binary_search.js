sorted_array = [0,1,2,3,4,5,6,7,8,9];



function binarySearch(numbers, targetValue, START, END) {

    if (START <= END) {
        // console.log(START, END);
        let center = START + Math.ceil((END-START)/2);

        console.log(numbers[center])
        if (numbers[center] == targetValue) {
            return center;

        } else if (numbers[center] > targetValue) {     // if target is on left side
            // console.log("test1", center);
            // 'center-1' because 'numbers[center] == targetValue' has already been checked
            return binarySearch(numbers, targetValue, START, center-1);


        } else if (numbers[center] < targetValue) {     // if targer is on right side
            // console.log("test2", center);
            // 'center+1' because 'numbers[center] == targetValue' has already been checked
            return binarySearch(numbers, targetValue, center+1, END);

        }
    } else {

        return -1;
    }
    
    


    
}



console.log("FOUND", binarySearch(sorted_array, 20, 0, 9))
