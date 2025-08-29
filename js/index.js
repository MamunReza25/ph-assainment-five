
                 
// call button  start
const callButtons=document.getElementsByClassName("call-button");
                 
            // coyent button add
            const coyentBtn=document.getElementById("coyent-btn");
                 coyentBtn.innerText=100;            
            
     
for (const callButton of callButtons) {
        callButton.addEventListener('click',function(){
            // console.log("button click paise..")
            
            const title=callButton.parentNode.parentNode.children[1].children[0].innerText;
            const subTitle=callButton.parentNode.parentNode.children[1].children[1].innerText;
            const callNumber=callButton.parentNode.parentNode.children[1].children[2].innerText;
            
            // coyent btn 20 kore kombe
            const lessCoyent=20;

            const abaiAbleCoyent=Number(coyentBtn.innerText) -lessCoyent;
                       // current coyent cheek
            if (abaiAbleCoyent<0) {
                alert(" ❌ Calling... unsuficent coyent....");
                return;
                
            }

                  coyentBtn.innerText=abaiAbleCoyent;
            
                  
          alert("📞 Calling... " + subTitle + " " + callNumber);


            const date=new Date().toLocaleTimeString();
            
            const sideBar=document.getElementById("side-bar");
           const div= document.createElement("div")
           div.innerHTML=`

                    <div class="side-card-container">
           <div class="flex justify-between items-center w-[270px] h-[80px] mx-auto bg-[#FAFAFA] px-2 rounded-md shadow mb-5">
             <div class="">
              <h2 class="text-[16px] font-normal">${title}</h2>
              <p>${callNumber}</p>
             </div> 
             <div>
              <p>${date}</p>
             </div>    
                          
       </div>


    </div>
           `

           sideBar.append(div);
        })
    };

    // call button end


    // clear button
       
   document.getElementById("clear-btn").addEventListener("click",function(){
       const sideBar=document.getElementById("side-bar");
        sideBar.innerHTML="";
   });
      // clear button end
           

      
      // heart count button /copy button even deligation

     document.getElementById("all-card-container").addEventListener('click',function(e){
                 
                if (e.target.className.includes("heart-btn")) {
                     
                const heartBtn=document.getElementById("heart-span-desbord").innerText;
                 const currentCount= Number(heartBtn)+1;
                  document.getElementById("heart-span-desbord").innerText=currentCount;

                }
            });

            // card-1
            document.getElementById("copy-card-1").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-1")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                   alert("Now Copied Number... " + innerValue);
                   
                    const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
                
            })
            // card-2
            document.getElementById("copy-card-2").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-2")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                  alert("Now Copied Number... " + innerValue);

                   const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
                  
            })
            // card-3
            document.getElementById("copy-card-3").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-3")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                   alert("Now Copied Number... " + innerValue);

                    const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
            })
            // card-4
            document.getElementById("copy-card-4").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-4")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                alert("Now Copied Number... " + innerValue);

                 const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
            })
          
            // card-5
            document.getElementById("copy-card-5").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-5")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                   alert("Now Copied Number... " + innerValue);

                    const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
            })
            // card-6
            document.getElementById("copy-card-6").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-6")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                  alert("Now Copied Number... " + innerValue);

                   const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;

            })
            // card-7
            document.getElementById("copy-card-7").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-7")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                   alert("Now Copied Number... " + innerValue);

                    const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;

            })
            // card-8
            document.getElementById("copy-card-8").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-8")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                   alert("Now Copied Number... " + innerValue);
                    const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
            })
            // card-9
            document.getElementById("copy-card-9").addEventListener('click',function(){
                const numCopy=document.getElementById("num-copy-9")
                   const innerValue= numCopy.innerText;
                   navigator.clipboard.writeText(innerValue);
                  alert("Now Copied Number... " + innerValue);
                   const copytBtn=document.getElementById("copy-span-desbord").innerText;
                 const currentValue= Number(copytBtn)+1;
                  document.getElementById("copy-span-desbord").innerText=currentValue;
            })



              
                