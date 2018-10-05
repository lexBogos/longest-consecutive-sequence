module.exports = function longestConsecutiveLength(array) {

// var start = clock();
// function clock(start) {
//     if ( !start ) return process.hrtime();
//     var end = process.hrtime(start);
//     return Math.round((end[0]*1000) + (end[1]/1000000));
// }

    if (array.length == 0) {
        return 0;
    }
 
     // let set = [];
     // let set_new = [];
     let max = 1;
     let sorter = 1;


    for (let c = 0; c<array.length; c++)
        {if (array[c]>array[c+1]){
            // console.log("Не отсортированный массив");  
            sorter = 0;
            break   }}

    if( sorter == 1){
    for (let q=0; q<array.length; q++) {
        let left = array[q] - 1;
        let right = array[q] + 1;
        let count = 0;
 

    function BinarySearch(right,A)    // t - искомый элемент,
{                                    // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i+j)/2);
       if (right <= A[k]) j = k;
       else i = k+1;
    }
   
    if (A[ i ] === right) return  count++, right++, BinarySearch(right,A); 
                                                                    // На выходе индекс искомого элемента.
    else return -1;                                                 // Если искомого элемента нет в массиве, то -1.
}

     BinarySearch(array[q],array)
        
    // array.splice(0, 1)
 

        max = Math.max(count, max);
        // if (set.length<set_new.length) set = set_new;
        // set_new = [];
            
        }
    }



    if( sorter == 0){
        for (let q=0; q<array.length; q++)

            {
            let left = array[q] - 1;
            let right = array[q] + 1;
            let count = 1;

            // set_new.push(array[q])

            while (array.indexOf(left) != -1) {
                 count++;
                 // set_new.push(array[array.indexOf(left)])
                 array.splice(array.indexOf(left), 1);
                 left--;
            }

       
            while (array.indexOf(right) != -1) {
                count++;
                // set_new.push(array[array.indexOf(right)])
                array.splice(array.indexOf(right), 1);
                right++;
            }

            max = Math.max(count, max);
            // if (set.length<set_new.length) set = set_new;
            // set_new = [];

        }

    }

    // console.log(set)
    // console.log(max)
    
// var duration = clock(start);
// console.log("Took "+duration+"ms");
    return max;
}


