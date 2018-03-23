function solution(str){
  let splitStr = str.split("");
    let revArr = splitStr.reverse();
    let joinArr = revArr.join("");
    return joinArr;
}
