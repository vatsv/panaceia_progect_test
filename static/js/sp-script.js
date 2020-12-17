$(document).ready(function(){

    'use strict';

    let countSpecElement = 0;
    let countElement = 0;
    let countEdElement = 0;
    let countQuElement = 0;

    let profile = {

        action: function(){
            $('.remove-avatar').on('click', profile.removeAvatar);
            $('.avatar').on('change', profile.changeAvatar);
            $('.doctor_chk').on('change', profile.typeSpecialty);
            $('body').on('click', '.spec-remove', profile.removeSpec);
            $('.spec-add').on('click', profile.addSpec);
            $('body').on('click', '.as-remove', profile.removeAs);
            $('.as-add').on('click', profile.addAs);
            $('body').on('click', '.ed-remove', profile.removeEd);
            $('.ed-add').on('click', profile.addEd);

            $('body').on('click', '.qu-remove', profile.removeQu);
            $('.qu-add').on('click', profile.addQu);
        },

        readURL: function(input, img){
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $(img).attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        },

        removeAvatar: function(){
            let userNoneImg = '/static/img/user.png'
            $('.avatar_image').attr('src', userNoneImg);
            $('.avatar_none').val('y');

            return false;
        },

        changeAvatar: function(){
            let file = this.files;

            if(typeof(file)!=='undefined'){
                let size = file[0].size;
                let type = file[0].type;

                if(type == 'image/jpeg' || type == 'image/jpg' || type == 'image/png'){

                    if(size <= 1500000){
                        profile.readURL(this, '.avatar_image');
                    } else {
                        alert('Error size!');
                    }

                } else {
                    alert('Error format!');
                }
            }
        },

        dob: function(){
           $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );
           $('.dob' ).datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: "1950:2005",
           });
        },

        typeSpecialty: function(){
            if ($(this).is(':checked')){
                $(this).val('True');
            } else {
                $(this).val('False');
            }
        },

        addSpec: function(){
            let element = '';

            countSpecElement = countSpecElement + 1;

            element += '<div class="row spec-block spec-block-'+countSpecElement+'">';
                element += '<div class="col-8">';
                    element += '<input type="text" name="spec['+countSpecElement+']" value="" placeholder="специальность">';
                element += '</div>';
                element += '<div class="col-4">';
                    element += '<a href="#" class="spec-remove" data-id="'+countSpecElement+'">Удалить</a>';
                element += '</div>';
            element += '</div>';

            $(this).before(element);

            return false
        },

        addAs: function(){
            let element = '';

            countElement = countElement + 1;

            element += '<div class="row as-block as-block-'+countElement+'">';
                element += '<div class="col-8">';
                    element += '<input type="text" name="as['+countElement+']" value="" placeholder="Название ассоциации">';
                element += '</div>';
                element += '<div class="col-4">';
                    element += '<a href="#" class="as-remove" data-id="'+countElement+'">Удалить</a>';
                element += '</div>';
            element += '</div>';

            $(this).before(element);

            return false
        },

        addEd: function(){
            let element = '';

            countEdElement = countEdElement + 1;

            element += '<div class="row ed-block ed-block-'+countEdElement+'">';
                element += '<div class="col-3">';
                    element += '<input type="text" name="edy['+countEdElement+']" value="" placeholder="Года">';
                element += '</div>';
                element += '<div class="col-5">';
                    element += '<input type="text" name="ed['+countEdElement+']" value="" placeholder="Название организации">';
                element += '</div>';
                element += '<div class="col-4">';
                    element += '<a href="#" class="ed-remove" data-id="'+countEdElement+'">Удалить</a>';
                element += '</div>';
            element += '</div>';

            $(this).before(element);

            return false
        },

        addQu: function(){
            let element = '';

            countQuElement = countQuElement + 1;

            element += '<div class="row qu-block qu-block-'+countQuElement+'">';
                element += '<div class="col-3">';
                    element += '<input type="text" name="quy['+countQuElement+']" value="" placeholder="Года">';
                element += '</div>';
                element += '<div class="col-5">';
                    element += '<input type="text" name="qu['+countQuElement+']" value="" placeholder="Название организации">';
                element += '</div>';
                element += '<div class="col-4">';
                    element += '<a href="#" class="qu-remove" data-id="'+countQuElement+'">Удалить</a>';
                element += '</div>';
            element += '</div>';

            $(this).before(element);

            return false
        },

        removeSpec: function(){
            let itemID = $(this).attr('data-id');
            $('.spec-block-'+itemID).remove();
            return false
        },

        removeAs: function(){
            let itemID = $(this).attr('data-id');
            $('.as-block-'+itemID).remove();
            return false
        },

        removeEd: function(){
            let itemID = $(this).attr('data-id');
            $('.ed-block-'+itemID).remove();
            return false
        },

        removeQu: function(){
            let itemID = $(this).attr('data-id');
            $('.qu-block-'+itemID).remove();
            return false
        },

        cityAutocomplete: function(){
            let city = document.getElementById('user-city');
            if(city){
                let autoCity = new google.maps.places.Autocomplete(city);
            }
        },

        init: function(){
           profile.action();
           profile.dob();
           profile.cityAutocomplete();
        }

    }

    profile.init();

});