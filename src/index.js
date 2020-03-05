module.exports = function towelSort (matrix) {
if(matrix== undefined){
    return [];
}else{
    matrix.map((item,index)=> index%2!=0 ? item.reverse() : item)
     var oneArray = [];
     matrix.forEach((item,index)=> oneArray = oneArray.concat(matrix[index]))
     return oneArray;
 }
}
