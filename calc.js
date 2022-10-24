function display(num){
    result.value+=num     //result.value=result.value+num  (to print no.s continously ow they will replace when second number clicks)
}
function allclear(){   //to clear all
    result.value=""  
}
function evaluateexp(){
    exp=result.value
    res=eval(exp)
    result.value=res
}
function removeElement(){
    curr_exp=result.value
    result.value=curr_exp.slice(0,-1)

}