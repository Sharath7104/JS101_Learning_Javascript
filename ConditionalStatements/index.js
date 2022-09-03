let L=12;
let W=14
let length=8;
let width=19;

function profilePic(L, W, length, width) {
 if((length > L) || (width > W)) {
   console.log("Upload");
 } else if(length < L) {
   console.log("Increase Length");
 } else if(width < W) {
   console.log("Increase Width");
 }
}
