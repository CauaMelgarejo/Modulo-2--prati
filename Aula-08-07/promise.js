const minhaPromise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        const sucesso = true
        if(sucesso){
            resolve("Dados carregados com sucesso!")
        }else{
            reject(new Error("Falha ao carregar dados!"))
        }
    }, 3000)
})

minhaPromise.then(resultado => {
    console.log(resultado)
})