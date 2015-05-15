Template.FreeLayout.onRendered(function () {
    this.$('.navbar-brand').click(function(e) {
        $('.menu-items li.active').removeClass('active');
    });
});

Template.FreeLayoutMainMenu.onRendered(function () {
    this.$('.menu-items li').click(function(e) {
        $('.menu-items li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});

Template._loginButtonsLoggedInDropdown.onRendered(function () {
	this.$('.dropdown-toggle').prepend('<i class="glyphicon glyphicon-user"></i> ');
});