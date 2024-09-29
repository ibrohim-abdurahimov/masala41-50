{
    // masala-42
    // function obj(...str){
    //     let result = {}
    //     for(let i = 0 ; i<str.length; i++){
    //         result[str[i]]=str[i].length
    //     }
    //     return result
    // }
    // console.log(obj("text" , "hello"))
}
{
    // masala-43
    // function obj (n,obj){
    //     let result = {}
    //     for(i in obj){
    //         result[i]= obj[i]*n
    //     }
    //     return result
    // }
    // console.log(obj(3,{a:2 , b:4 ,c:5}))
}
{
    // masala-44
    // function getLevel(n){
    //     let result = []
    //     for(i=1; i<=n; i++){
    //         result.push(Math.pow(2,i))
    //     }
    //     return result
    // }
    // console.log(getLevel(4))
}
{
    // masala-46
    // let arr = [1,2,3,4,5]
    // for(i=0 ; i<arr.length ; i++){
    //     console.log(arr[i] * arr[i])
    // }
}
{
    // masala-47
    // function numbers (num){
    //     let positiveSum = 0
    //     for (let i = 0; i<num.length; i++){
    //         if(num[i]>0){
    //             positiveSum +=num[i]
    //         }
    //     }
    //     return positiveSum
    // }
    // console.log(numbers([1,-5,7,-8,8,-74,4]))
}
{
    // masala-48
    // let fullName = 'George Raymond Richard Martin';
    // let firstLetter = fullName.split(' ').map(word => word[0])  .join('');             
    // console.log(firstLetter)
}
{
    // masala-49
    // const people = [
    //     {name: 'John', age: 13},
    //     {name: 'Mark', age: 56},
    //     {name: 'Rachel', age: 45},
    //     {name: 'Nate', age: 67},
    //     {name: 'Jeniffer', age: 65}
    // ]
    // let sortedPeople = people.sort((a, b) => a.age - b.age);
    // let youngest = sortedPeople[0].age;
    // let oldest = sortedPeople[sortedPeople.length - 1].age;
    // let result = oldest - youngest
    // console.log(result)
}
{
    // masala-50
    var singleNumber2 = function(nums) {
        return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
    }
    console.log(singleNumber2([4, 1, 2, 1, 2, 9, true]));  
      
}