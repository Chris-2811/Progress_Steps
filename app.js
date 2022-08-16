const steps = document.querySelectorAll('.step')
const progress = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let currentActive = 1

next.addEventListener('click', (e)=>{
currentActive++

if(currentActive > steps.length) {
    currentActive = steps.length
}

update()
})


prev.addEventListener('click', (e)=> {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})


function update() {
    steps.forEach((step,index)=>{
        if(currentActive > index) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })


    const actives = document.querySelectorAll('.active')

    
    progress.style.width = (actives.length -1) / (steps.length -1) *100 +'%'

    if(currentActive === steps.length) {
        next.disabled = true
    } else if (currentActive === 1) {
        prev.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }

}





   