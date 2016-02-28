Template.footer.events({
    'keypress input': function(e) {
        let inputVal = $('.input-box_text').val();
        if (!!inputVal) {
            let charCode = (typeof e.which == 'number') ? e.which : e.keyCode;
            if (charCode == 13) {
                e.stopPropagation();
                Messages.insert({text: inputVal});
                $('.input-box_text').val('');
                return false;
            }
        }
    }
});

