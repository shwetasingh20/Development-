let str='The morning is upon us.'
//T h e   m o r n i n g     i   s    u   p  o  n    u  s  .     
/*0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
23 22 212019181716151413-12 -11-10-9 -8 -7 -6 -5 -4 -3 -2 -1  
//-ve*/
console.log(str.slice(10,16))//g is u
console.log(str.slice(10,16))//g is u
console.log(str.substr(10,3))//(starst,length)
//substring dosent deal with the -ve so treat it as 0
//while the  slice take -ve as the indexing from the last
console.log(str.slice(-8))//upon us.
console.log(str.substring(-8))//The morning is upon us.

console.log(str.slice(23))//""
console.log(str.substring(23))//"" empty

console.log(str.slice(13,16))//s u (strat,end-1 )
console.log(str.substring(13,16))//s u (strat,end-1 )

console.log(str.slice(16,13))//"" empty because no backward
console.log(str.substring(16,13))//s u  because if sart is greater thn  end then it will ***swap*** the number

console.log(str.slice(-8,-4))//upon
console.log(str.substring(-8,-4))//"" empty because if starting is -ve then it will be zero  and substring dosent deal with the negative so nothing is selected here

console.log(str.slice(-8,4))//"" because it cant  move in the backward direction 
console.log(str.substring(-8,4))//"The " because  -8 will be treated as the zero so (0,4)

console.log(str.slice(8,-4))//"ing is upon"  frome +ve 8 start to -ve 4 it ends
console.log(str.substring(8,-4))//"The morn" because -4 will be treated a s0 for substring and since 8 is greater than 0 so it will swap it

console.log(str.slice())
console.log(str.substr())

console.log(str.slice())
console.log(str.substring())