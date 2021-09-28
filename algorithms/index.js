// array of integers [2,7,11,15]
// target is 9 


const twoSum = (nums,target) {
  for(let i=0;i < nums.length; i++ ){
    const prevValues = {} 
    currentNumber = nums[i]
    const neededValue = target - currentNumber
    const index2 = prevValues[neededValue]
    if(index!=null) {
      return[index,index2]
    }else {
      prevValues[currentNumber] = i
    }
  }
}