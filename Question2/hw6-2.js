function ssort(arr) {
    let k=[]
    let tree=[]
    let person=[]
     for (let i = 0; i< arr.length; i++){
        if (arr[i] == -1){
            tree.push([i])
          }else{
            person.push(arr[i])
            person.sort(function(a, b){return a - b});
             }  
    }
 for (let j = 0; j < tree.length; j++) {
    person.splice(tree[j], 0,-1)
     
 }   
    return person
 }    
console.log(ssort([-1, 150, 190, 170, -1, -1, 160, 180]))