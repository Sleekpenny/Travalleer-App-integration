
let preloader = document.querySelector(".preloader")
let btn = document.querySelectorAll("button")
let sideBar = document.querySelector(".sidebar")
let hamburgerBtn = document.querySelector(".hamburger-btn")
let header = document.querySelector("header")
let list = document.querySelectorAll("li")


window.addEventListener("load",()=>{
    preloader.classList.add("preloader-remove")
})

btn.forEach((btns)=>{
    btns.addEventListener("click",(e)=>{
        let btnTarget = e.currentTarget.classList
        if(btnTarget.contains("hamburger-btn")){
            sideBar.classList.add("disapparence-active");
            
        } else if (btnTarget.contains("close-btn")){
            sideBar.classList.remove("disapparence-active");
            
        }
    })
})

window.addEventListener("scroll",()=>{
    let headerHeight = header.getBoundingClientRect().height
    let windowHeight = window.pageYOffset
    
    if (windowHeight > headerHeight) {
        header.classList.add("bg-add")
    } else {
        header.classList.remove("bg-add")
    }
})

list.forEach((lists)=>{
    lists.addEventListener("click",(li)=>{
        let removeList =  li.currentTarget
        sideBar.classList.remove("disapparence-active");
        
    })
    })


    let date =  document.querySelector(".date")
    let getYeardate =  new Date()
    getYeardate = getYeardate.getFullYear()
    date.textContent = getYeardate
