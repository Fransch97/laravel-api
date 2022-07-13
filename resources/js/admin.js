

require('./bootstrap');




$('document').ready(function(){
    // console.log("funziona")


    // CREATE
    $('#creade-sub').click(function(e){
        event.preventDefault(e);
        // console.log($('#create-title').val())

        // title
        let title = false;
        const value = $('#create-title').val().trim();
        if( value === ""){
            $('#p-c-t-error').show().text("Campo obbligatorio")
            $('#create-title').addClass("is-invalid")
        }else if(value.length < 3){
            $('#p-c-t-error').show().text("Almeno 3 caratteri")
            $('#create-title').addClass("is-invalid")
        }else if(value.length > 255){
            $('#p-c-t-error').show().text("Massimo 255 caratteri")
            $('#create-title').addClass("is-invalid")
        }else{
            $('#p-c-t-error').hide()
            $('#create-title').removeClass("is-invalid")
            title = true
        }

        // content
        let content = false;
        const valueContent = $('#create-content').val().trim();
        if( valueContent === ""){
            $('#p-c-c-error').show().text("Campo obbligatorio")
            $('#create-content').addClass("is-invalid")
        }else if(valueContent.length < 3){
            $('#p-c-c-error').show().text("Almeno 3 caratteri")
            $('#create-content').addClass("is-invalid")
        }else if(valueContent.length > 255){
            $('#p-c-c-error').show().text("Massimo 255 caratteri")
            $('#create-content').addClass("is-invalid")
        }else{
            $('#p-c-c-error').hide()
            $('#create-content').removeClass("is-invalid")
            content = true
        }

        // submit controll
        if(content && title){
            $('#create-form').submit()
        }
    })
    // END CREATE


    // EDIT
    $('#edit-sub').click(function(e){
        event.preventDefault(e);
        // console.log($('#create-title').val())

        // title
        let title = false;
        const value = $('#edit-title').val().trim();
        if( value === ""){
            $('#p-e-t-error').show().text("Campo obbligatorio")
            $('#edit-title').addClass("is-invalid")
        }else if(value.length < 3){
            $('#p-e-t-error').show().text("Almeno 3 caratteri")
            $('#edit-title').addClass("is-invalid")
        }else if(value.length > 255){
            $('#p-e-t-error').show().text("Massimo 255 caratteri")
            $('#edit-title').addClass("is-invalid")
        }else{
            $('#p-e-t-error').hide()
            $('#edit-title').removeClass("is-invalid")
            title = true
        }



        // content
        let content = false;
        const valueContent = $('#edit-content').val().trim();
        if( valueContent === ""){
            $('#p-e-c-error').show().text("Campo obbligatorio")
            $('#edit-content').addClass("is-invalid")
        }else if(valueContent.length < 3){
            $('#p-e-c-error').show().text("Almeno 3 caratteri")
            $('#edit-content').addClass("is-invalid")
        }else if(valueContent.length > 255){
            $('#p-e-c-error').show().text("Massimo 255 caratteri")
            $('#edit-content').addClass("is-invalid")
        }else{
            $('#p-e-c-error').hide()
            $('#edit-content').removeClass("is-invalid")
            content = true
        }


        // submit controll
        if(content && title){
            $('#edit-form').submit()
        }
    })
    // END EDIT





})
