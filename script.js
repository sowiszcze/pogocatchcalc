$(function onLoad() {
    
    const cpm = 0.597400;

    function calculate() {
        var bcr = parseFloat($('#pokemon').val());
        var berry = parseFloat($('#berry').val());
        var medals = parseFloat($('#medals').val());
        var curve = parseFloat($('#curve').val());
        var throwBonus = parseFloat($('#throw').val());

        var bonus = berry * medals * curve * throwBonus;

        var probability = 1 - Math.pow(1 - bcr / (2 * cpm), bonus);

        $('#probability').val((Math.round(probability * 100000) / 1000).toString() + '%');
    }

    $('select').on('change', calculate);

    calculate();

});