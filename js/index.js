
                 
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

      // heart count button even deligation

     document.getElementById("all-card-container").addEventListener('click',function(e){
                 
                if (e.target.className.includes("heart-btn")) {
                     
                const heartBtn=document.getElementById("heart-span-desbord").innerText;
                 const currentCount= Number(heartBtn)+1;
                  document.getElementById("heart-span-desbord").innerText=currentCount;

                }
                 
            })



            