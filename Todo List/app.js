const todooForm = document.querySelector(".form-todoo");

const todooInput = document.querySelector(".form-todoo input[type='text']");

const todooList = document.querySelector(".todo-list");

// todooForm.addEventListener("submit", (notRefresh)=>{
//     // prevent default is used for stop refresh our page
//     notRefresh.preventDefault();
//     // Input[type = "text"]; iski inpuut field ki value get karne ke liye todooInput.value write kare ge
//     console.log(todooInput.value);
//     // Input[type = "text"]; kisi bhi input ki value ko clear karna ke liye todooInput.value = "";
//     todooInput.value ="";
// });

todooForm.addEventListener("submit", (e)=>{
    // prevent defaut is used for stop by default refresh your page;
    e.preventDefault();
    // input[type= "text"]; iske element ko kisi variable me store kare ge;
    const newTodooText = todooInput.value;
    //new element creat karne ke liye ;
    const newLiElement = document.createElement("li");
    // newliInnerHTML element me html ka code  copy past karna hai (new todoo text ki value ko placeholder${} store is liye kiya hai taaake jab new todoo creat h to usme ham jo input de uska hi todoo creat ho)
    const newLiInnerHtml = `<span class="text">${newTodooText}</span>
    <div class="toddoButtons">
        <button class="todoo-btn done">Done</button>
        <button class="todoo-btn remove">Remove</button>
    </div>`
    // newliElement  jo creat hoga usko liElemnt ke equal set karne ke liye 
    newLiElement.innerHTML = newLiInnerHtml;
    todooList.append(newLiElement);
    todooInput.value = "";
});


////////Done aur remove button use karne ke liye event deligation ka use kar ge

todooList.addEventListener("click", (e)=>{
    // console.log(e.target);
    // <li> ke text ko line through karne ke liye
    //ckeck if user clicked on done button
    // console.log(e.target.classList);
    // if else condittion use kare ge
    if(e.target.classList.contains("remove")){
        // console.log("You Want Remove Something?!!!");
        const targetLiElement = e.target.parentNode.parentNode;
        // console.log(targetLiElement);
        // targeted Li Element ko remove karne ke liye 
        targetLiElement.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("Great !!!");
        const liSpanElement = e.target.parentNode.previousElementSibling;
        // console.log(liSpanElement);
        liSpanElement.style.textDecoration = "line-through"
        }
})
