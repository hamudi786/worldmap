last = null
function toggle_remove_active(countries){
    document.querySelector(".Baumer_"+countries).classList.toggle("active")
    if(last != null && countries != last){
        document.querySelector(".Baumer_"+last).classList.remove("active")
    }
    last = countries
}

Dot_Southington.document.querySelector(".Dot_Southington").sty