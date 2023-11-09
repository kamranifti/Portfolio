const addBtn = document.querySelector('button')
const input = document.querySelector('input')
const worksCon = document.querySelector('.works')

let DOMarray = []
let storageArray = []

function createDOM() {
    worksCon.textContent = ''
    storageArray.forEach(function(taskName, i) {
    if (taskName == null) {
        
    }else {
            let div = document.createElement('div')
            div.classList.add('work1', 'todo', 'p-4', 'mx-auto')
            let h4 = document.createElement('h4')
            h4.classList.add('p1')
            h4.textContent = taskName
            let deleteIcon = document.createElement('i')
            deleteIcon.classList.add("fa-solid", "fa-trash")
            deleteIcon.addEventListener("click", function(){
             this.parentNode.remove()
             delete storageArray[i]
             sterializedArray1 = JSON.stringify(storageArray)
             localStorage.setItem('listArray', sterializedArray1)
             getLocalStorage()
            })
            div.append(h4, deleteIcon)
            worksCon.append(div)
        }


    })
}

function addTask() {
    let inputVal = input.value
    if (inputVal == '') {
        alert('YOU HAVE TO ADD A TASK')
    } else{

    DOMarray.push(inputVal)
    let sterializedArray = JSON.stringify(DOMarray)
        localStorage.setItem('listArray', sterializedArray)
    getLocalStorage()
}
    input.value = ''
}

function getLocalStorage() {
    if (localStorage.getItem('listArray')) {
        storageArray = JSON.parse(localStorage.getItem('listArray'))
        DOMarray = JSON.parse(localStorage.getItem('listArray'))
    }
    createDOM()
}

addBtn.addEventListener("click", addTask)
getLocalStorage()