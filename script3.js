document.getElementById ("bt_tarefa").addEventListener("click", addTarefa)





function addTarefa (){
    const inputTarefa = document.getElementById("input_tarefa").value
console.log(inputTarefa)
    if(!inputTarefa) {
        alert('o input esta vazio')
        return
    }

    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = "item_tarefa"

    const conteudoTarefa = document.createElement("p")
    conteudoTarefa.textContent = inputTarefa

    const botaoDeletar = document.createElement("button")
    botaoDeletar.textContent = "Deletar tarefa"
    botaoDeletar.addEventListener("click", () => {
        elemento_tarefa.remove()
    })
    const botaoComplementar = document.createElement("button")
    botaoComplementar.textContent = "completar Tarefa"
    botaoComplementar.addEventListener("click", () => {
    conteudoTarefa.classList.toggle("completada")

    })

    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoComplementar)
    document.getElementById("Ul_tarefa").appendChild(elemento_tarefa)


}