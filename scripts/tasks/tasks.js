let prev_letter = ' '
let last_date = Infinity


const update_task = (words) => {
    console.log(words)

    const task_div = document.querySelector('#task')
    task_div.innerHTML = ''
    prev_letter = ' '

    for (let {word} of words) {
        for (let letter of word) {
            task_div.insertAdjacentHTML('beforeend', `
                <span class="task_letter order">${letter}</span>
            `)
        }

        task_div.insertAdjacentHTML('beforeend', `
                <span class="task_letter order">_</span>
            `)
    }

    task_div.children[0].classList.add('current')
    task_div.children[0].classList.remove('order')

    task_div.removeChild(task_div.lastElementChild)
}


const next_letter = () => {
    const current = document.querySelector('.current')
    current.classList.remove('current')
    current.classList.add('past')

    if(document.querySelectorAll('.order').length === 0) return update_task(gen.generate(10))

    const order = document.querySelectorAll('.order')[0]
    order.classList.remove('order')
    order.classList.add('current')
}


const wrong = () => {
    const current = document.querySelector('.current')
    current.classList.add('wrong')
}