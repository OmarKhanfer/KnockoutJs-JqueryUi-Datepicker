function viewModel() {
    var _datepicker = {
        init: function (element, valueAccessor, allBinding, viewModel, context) {
            debugger;
            var options = {
                showOtherMonths: true,
                selectOtherMonths: true
            };
            if (typeof valueAccessor() === 'object') {
                $.extend(options, valueAccessor());
            }
            $(element).datepicker(options);
        }
    }

    ko.bindingHandlers.datepicker = _datepicker;
}

