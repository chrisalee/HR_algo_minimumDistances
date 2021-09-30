const minDistances = (arr) => {
  let distance = 0;
  let minDistance = Number.MAX_VALUE;
  
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        distance = Math.abs(i - j);
        minDistance = Math.min(distance, minDistance);
        console.log(arr[i], "Distance:", distance, "minDistance:", minDistance);
        break;
      }
    }
  }
  if(minDistance === Number.MAX_VALUE) {
    return -1
  }
  return minDistance;
}

minDistances([7, 7, 1, 7, 4, 1, 4]);
