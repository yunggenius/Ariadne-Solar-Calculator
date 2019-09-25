$(document).ready(function () {

/* Array containing wattage of appliances */
    var wattage = [0, 65, 250, 1000, 1200, 1100, 500];

/* Hide delete button of first row*/
    $('#first_record').find('td:last-child').hide();
/* Make 'watt hour per day' fields read only */
    $(".whd").prop("readonly", true);
    
/* Add new table row */
    $('#addItem').on('click', function () {
        var $tr = $('#loads tr:last');
        var $clone = $tr.clone(true);
        
        $clone.find('input').val('');
        $clone.find('td:last-child').show();
        $tr.after($clone);
        
    });
    
/* Erase row */
    $('.delete_row').on('click', function () {
       $(this).closest("tr").remove(); 
    });

/* Input stored wattage of selected appliance */
    $('.appliance').on('change', function () {
        var app_val = $(this).val();
        var row = $(this).closest("tr");
        if( Number(app_val) != Number(0)) {
            var stored_wattage = wattage[app_val];
            row.find(".watts").val(stored_wattage);
            row.find(".watts").prop("readonly", true);
        }
        else {
            row.find(".watts").val('');
            row.find(".watts").prop("readonly", false);            
        }
            
    });
    
/* Update 'watt hour per day' field after every insertion or deletion */
    $('.userInput').on('keyup change click', function () {
        var cell = $(this);
        var record = cell.closest("tr");
        
        var quantity = record.find(".quantity").val();
        var AC_watts = record.find(".watts").val();
        var hrsOn = record.find(".hrsOn").val();
                
        var whd = Number(quantity) * Number(AC_watts) * Number(hrsOn);
        
        record.find(".whd").val(whd);

        //Update 'total watt hours per day' and 'kilowatt hour month' fields after every insertion or deletion 
        var total_whd = Number(0);
        var kwh = Number(0);
        
        $('.whd').each(function () {
            var new_whd = Number($(this).val());
            total_whd = Number(total_whd) + Number(new_whd);
            kwh = (Number(total_whd) / Number(1000)) * Number(30);
            kwh = kwh.toFixed(2);
            
            $('#total_WH').val(total_whd);
            $('#total_KWM').val(kwh);
            
        });
    });
    
});

