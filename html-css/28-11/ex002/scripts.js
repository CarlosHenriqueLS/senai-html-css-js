$(document).ready(function() {
    $("#icep").on("focusout", function() {
        let cep = $(this).val().replace(/\D/g, '');

        if (cep.length === 8) {
            $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
                $("#iend").val(data.logradouro);
                $("#ibai").val(data.bairro);
                $("#icid").val(data.localidade);
                $("#iest").val(data.uf);
            });
        } else {
            alert("CEP inválido. Por favor, digite um CEP válido.");
            $("#logradouro, #bairro, #cidade, #uf").val("");
        }
    });
});
