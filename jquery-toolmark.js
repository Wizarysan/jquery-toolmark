(function ( $ ) {
    $.fn.toolMark = function(options) {
        options = $.extend({
            mode: "mark",
            mark: "?",
            xpos: 0,
            ypos: 0,
            width: "auto",
            content: ""
        }, options);

        function createDiv() {
            return document.createElement("div");
        }

        var wrapper = createDiv(),
            content = createDiv();
            $(wrapper).css({
                'position': 'absolute',
                'top': options.ypos,
                'left': options.xpos                
                })
            .addClass('tm-wrap');
        if (options.mode == 'mark') {           
            var mark = createDiv();
            $(mark).addClass('tm-wrap__mark')
            .text(options.mark); 
            $(wrapper).append(mark)
            .on("mouseenter", function() {
                $(".tm-wrap__mark", this).hide();
                $(".tm-wrap__content", this).show();
            })
            .on("mouseleave", function() {
                $(".tm-wrap__mark", this).show();
                $(".tm-wrap__content", this).hide();
            });
        } else if (options.mode == 'tooltip') {
            $(this[0]).css({'position': 'relative', 'display': 'inline-block'})
            .on("mouseenter", function() {
                $(".tm-wrap__content", this).show();
            })
            .on("mouseleave", function() {
                $(".tm-wrap__content", this).hide();
            });
        }
        $(content).html(options.content)
        .addClass("tm-wrap__content")
        .css({'display': 'none', 
            'width': options.width});
        wrapper.appendChild(content); 
        this.append(wrapper);
    };
}(jQuery));
