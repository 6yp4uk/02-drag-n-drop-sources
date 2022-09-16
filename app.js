const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const colheader = document.querySelectorAll('.col-header')

item.addEventListener('dragstart', dstart)
item.addEventListener('dragend', dstop)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dstart(event){
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    console.log("Начал тащить")
}
function dstop(event){
    event.target.classList.remove('hold', 'hide')
    console.log("Закончил тащить")
}



function dragover(event){
    event.preventDefault()
}
function dragenter(event){
    event.target.classList.add('hovered')
}
function dragleave(event){
    event.target.classList.remove('hovered')
}
function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}