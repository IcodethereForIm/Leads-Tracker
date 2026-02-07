let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBn = document.getElementById("input-bn")
const delBn = document.getElementById("delete-bn") 
const ulEl = document.getElementById("ul-el")
const svTb = document.getElementById("save-tb")



const localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))



svTb.addEventListener("click",function(){
    chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
        
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
    
})


if(localStorageLeads){
    myLeads=localStorageLeads
    render(myLeads)
}
    

delBn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    
    render(myLeads)

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    inputEl.value = ""

    //localStorage.setItem("myLeads", JSON.stringify(myLeads))

    
})

function render(leads){
    
    let listItems =""
    for(let i=0;i<leads.length;i++){
        listItems+= `<li>
             <a target = '_blank' href = '${leads[i]}'>
                     ${leads[i]}
             </a>
                     </li>
        `
    }
    

    ulEl.innerHTML = listItems

}


