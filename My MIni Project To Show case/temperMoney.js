// Create a button in amazon dp page using JavaScript in tampermonkey. When the button is clicked, 
// the individual author pages of that title should be 
// opened in multiple tabs.



// var btn  =document.createElement('button');
// btn.innerText = "Fecth related Dp";



// document.querySelector("#tmmSwatches").append(btn);
// btn.addEventListener("click", fecthOtherBook);
// var arr = ['1338846620'];
function fecthOtherBook(){
    
    // var data = document.getElementsByClassName('a-carousel-card');
    var data = document.getElementsByTagName('a');
    for(var i=0; i<1; i++){
        var urldata = data[i];
        var url = urldata.baseURI;

        // var substring = url.substring(26,36);
        var substring = "";
        for(var j =0; j<url.length-1; j++){
            if(url[j]=='d' && url[j+1]=='p'){
                for(var k=j+3;k<url.length; k++){
                    substring+=url[k];
                }
                break;
            }
        }
        if(arr.includes(substring)==false){
            window.open(urldata.baseURI, "_blank");
            arr.push(substring);
        }
        
       
    }
   
}

// var url = 'https://www.amazon.com/dp/1338846620/ref=sspa_dk_detail_2?psc=1&pd_rd_i=1338846620&pd_rd_w=9EFRn&content-id=amzn1.sym.9ba7ad0c-ad0a-40bb-be06-94f2b4aefa3c&pf_rd_p=9ba7ad0c-ad0a-40bb-be06-94f2b4aefa3c&pf_rd_r=D9C8GZ931STENK4C22VG&pd_rd_wg=ywitU&pd_rd_r=b8fd46d2-4f2b-4648-bd6b-452f4fe03525'
// var substring = "";
// for(var j =0; j<url.length-1; j++){
//     if(url[j]=='d' && url[j+1]=='p'){
//         for(var k=j+3;k<url.length; k++){
//             if(url[k]=='/'){
//                 break;
//             }
//             substring+=url[k];
//         }
//         break;
//     }
// }
// console.log(arr.includes('13388466200'));
// console.log(name.substring(26,36))
console.log(substring)