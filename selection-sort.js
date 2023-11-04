

function selectionSort(arr) {

  // Copy the original array
  let copy =[...arr];
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while(copy.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = Math.min(...copy);
    // Save and remove the value at the min index
    let idx = copy.indexOf(min);
    copy.splice(idx, 1);
    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while(divider < arr.length-1) {
  
    // Find the index of the minimum value in the unsorted half
    let sub = [...arr];
    let newSub = sub.splice(divider);
    let min = Math.min(...newSub);
  
    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat
    divider++;
  }
}
  console.log(selectionSortInPlace([1,5,2,7,3]));

module.exports = [selectionSort, selectionSortInPlace];
