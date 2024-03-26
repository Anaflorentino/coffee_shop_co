    $(document).ready(function () {
        $('#registration_form').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            // Error Messages
            messages: {
                name: '*Por favor, digite seu nome',
                email: '*Por favor, digite um email válido'
            },
            // Submit Handler
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(event, validator) {
                let incorrectFields = validator.numberOfInvalids();
                if (incorrectFields) {
                    alert("Ops! Preencha todos os campos corretamente")
                } 
            }
        });

        // JQuery Mask
        $('#phone').mask('(00) 00000-0000', {
            placeholder: '(00) 00000-0000'
        });
    });