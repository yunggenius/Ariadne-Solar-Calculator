$(document).ready(function () {

/* Array containing wattage of appliances */
    var wattage = [0, 60, 100, 80, 30, 18, 1000, 5000, 250, 65, 400, 80, 1100, 90, 55, 500, 1200, 200, 150, 120, 70, 55, 1100, 650, 1300, 1500];

/* Store number of rows*/
    var nxt_row_num = Number(4);
    
/* Hide delete button of first row*/
    $('#first_record').find('td:last-child').hide();
    
/* Make 'watt hour per day' fields read only */
    $(".whd").prop("readonly", true);
    
/* Add new table row */
    $('#addItem').on('click', function () {
        var $tr = $('#loads tr:last');
        var $clone = $tr.clone(true);
        nxt_row_num++;
        var $list_value = 'list' + nxt_row_num.toString();
        
        $clone.find('input').val('');
        $clone.find('.appliances').attr('list', $list_value);
        $clone.find('.list').attr('id', $list_value);
        var list_n = $clone.find('.list').attr('id');
        $clone.find('td:last-child').show();
        $tr.after($clone);
    });
    
/* Erase row */
    $('.delete_row').on('click', function () {
        $(this).closest("tr").remove();
    });

/* Input stored wattage of selected appliance */
    $('.appliances').on('input keyup change', function () {
        var app_list = $('option[value = "' + $(this).val() + '"]');
        var app = app_list.length ? app_list.attr('class') : 0;
        var row = $(this).closest("tr");
        
        if (Number(app) > Number(0)) {
            var stored_wattage = wattage[app];
            row.find(".watts").val(stored_wattage);
        } else {
            row.find(".watts").val('');
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
