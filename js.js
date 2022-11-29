$(function () {

    var suggestions = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: '/search/hints?q=%QUERY',
            wildcard: '%QUERY'
        }
    }),
        inputDropClass = 'tt-dropped';


    $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'states',
            display: 'header',
            source: suggestions,
            templates: {
                suggestion: function (data) {
                    return '<a href="' + data.url + '">' +
                                '<div class="typeahead_link_img">' + data.img + '</div>' + data.header +
                            '</a>';
                }
            }
        }
    );
    $('.typeahead')
        .bind('typeahead:change', function (ev, suggestion) {
            //$(this).parents('form').submit();
        })
        .bind('typeahead:select', function (ev, suggestion) {
            //$(this).parents('form').submit();
        })
        .bind('typeahead:close', function () {
            $(this).removeClass(inputDropClass);
        })
        .bind('typeahead:open', function () {
            $(this).addClass(inputDropClass);
        });
});