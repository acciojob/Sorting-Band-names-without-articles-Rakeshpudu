//your code here
// let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
// let updatedList = arr.map((element) => {
// 	// ["a", "some", "one"]
// 	let words = element.split(" ") ;
// 	let updatedString = words.reduce((prev, current, index) => {
// 		if(current != "The" && current != "an" && current != "a"){
// 			return prev + " " + current ;
// 		}
// 		return prev ;
// 	}, "")

// 	return updatedString ;
// }) ;
// let mp = {} ; // {"some one" : "a some one"}
// updatedList.forEach( (element, index) => {
// 	mp[element] = arr[index] ;
// });
// // ["some one" , "mno abc" , "abc kh"]

// updatedList.sort(); 

// let finalAns = updatedList.map((element) => {
//     return mp[element] ;
let bandNames=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
let articles = ['A', 'AN', 'THE']
 
	bandNames.sort((a,b) => (strip(a)> strip(b))? 1: -1)
	const ref= document.getElementsByTagName("ul")[0] 
	for (let i=0;i<bandNames.length; i++){
		const li = document.createElement("li")
		li.innerText= bandNames [i]
		ref.append(li)
	}
function strip(word){
	let arr = word.split(" ")
	let s=""
	for(let i=0;i<arr.length;i++){
if(articles.indexOf(arr[i].toUpperCase()) === -1){
	s=s+arr[i]
}
}
return s.trim()
}