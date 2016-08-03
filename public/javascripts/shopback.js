$(document).ready(function() {
    $('#searchTab').autocomplete({
        source: function (request, response) {
            $.getJSON("/search?q=" + request.term, function (data) {
                response($.map(data, function (product, i) {
                    return {
                        name: product.name,
                        category: product.category,
                        value: product.name
                    };
                }));
            });
        },
        messages: {
            noResults: '',
            results: function() {}
        },
        minLength: 2,
        delay: 100
    }).data("ui-autocomplete")._renderItem = function (ul, item) {
        return $("<li />")
            .append("<a>" + item.name + "&nbsp;<sub>" + item.category + "</sub></a>")
            .appendTo(ul);
    };
});