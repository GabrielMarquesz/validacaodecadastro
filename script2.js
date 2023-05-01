




    //pegando o formulario
    const form   = document.getElementById('form');

    //pegando todos os campos onde tem uma classe chamada required
    const campos = document.querySelectorAll('.required');

    //pegar os spans com nome span-required
    const spans  = document.querySelectorAll('.span-required');


    //adicionado um evento no botao para verificar
    // se os campos foram preenchidos.

    form.addEventListener('submit', (event) => {
        event.preventDefault();
       
        nameValidate();
        mainPasswordValidate();
        comparePassword();
        comparecpf();
        isEmpty();
    });
    


    //vai pegar o indice 0 e adicionar a borda em todos os campos

    function setError(index){
        campos[index].style.border = '2px solid #e63636';
        spans[index].style.display = 'block';
    }
    
    //tirando o erro e a borda
    function removeError(index){
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }





    //validação do nome.
    function nameValidate(){

        if(campos[0].value.length > 60)
        {
            setError(0);

        }
        if(campos[0].value.length < 15)
        {
            setError(0);
        }
        
        else
        {
            removeError(0);
        }
    }


    //validacao da senha
    function mainPasswordValidate(){
        if(campos[1].value.length > 8)
        {
            setError(1);
        }
        if(campos[1].value.length < 8){
            setError(1);
        }
        else
        {
            removeError(1);
            comparePassword();
        }
    }

    //comparando a senha
    function comparePassword(){
        if(campos[1].value == campos[2].value && campos[2].value.length >= 8)
        {
            removeError(2);
        }
        else
        {
            setError(2);
        }
    }
 
    //validar cpf

    function comparecpf(){
        if(campos[3].value.length == 11)
        {
            removeError(3);
        }
        else
        {
            setError(3);
        }


    }

