let input=document.querySelector(".form-conatiner .input-box");
let button=document.querySelector(".form-conatiner .btn");
let formDiv=document.querySelector(".container .form-conatiner");


// button click funtion
button.addEventListener("click",function check(){
    // deleting old result para
    try{
        let oldPara=document.querySelector(".result-para");
        oldPara.remove();
    }catch{};
    // calling palindromChecker function
    palindromChecker(input.value);
});

// palindrom checker function
function palindromChecker(value){
  if(value.length!=0)
  {
    let l=value.length-1;
    let i=0
    let flag=true;
    while(i<l){
        if(value.charAt(i)==value.charAt(l))
        {
            i++;
            l--;
        }
        else{
            flag=false;
            break;
        }
    }
    let result=document.createElement('p');
    result.classList.add("result-para");
    if(flag)
    {
        result.innerText=value+" is Palindrom";
        result.style.color="Green";
        formDiv.append(result);
    }
    else
    {
        result.innerText=value+ " is not a Palindrom";
        result.style.color="Red";
        formDiv.append(result);
    }
  }
}