module.exports = function longestConsecutiveLength(array) {

    if (array.length == 0) {
        return 0;
    }
 
     let max = 1;
     let sorter = 1;

    for (let c = 0; c<array.length; c++)
        {if (array[c]>array[c+1]){
            sorter = 0;
            break   }}

    if( sorter == 1){
         for (let q=0; q<array.length; q++) {
            let left = array[q] - 1;
            let right = array[q] + 1;
            let count = 0;
 

        function BinSearch(right,arr){                                    
            let i = 0, j = arr.length, r;                     
            while (i < j)                
                {r = Math.floor((i+j)/2);
                if (right <= arr[r]) j = r;
                else i = r+1;
                }
            if (arr[ i ] === right) return  count++, right++, BinSearch(right,arr);                                                                  
            else return -1;                                                
            }

        BinSearch(array[q],array)
        max = Math.max(count, max);
   
            }
        }



    if(sorter == 0){
        for (let q=0; q<array.length; q++){
            let left = array[q] - 1;
            let right = array[q] + 1;
            let count = 1;

            while (array.indexOf(left) != -1) {
                 count++;
                 array.splice(array.indexOf(left), 1);
                 left--;
                 }

       
            while (array.indexOf(right) != -1) {
                count++;
                array.splice(array.indexOf(right), 1);
                right++;
                }

            max = Math.max(count, max);

            }
        }

    return max;
}


