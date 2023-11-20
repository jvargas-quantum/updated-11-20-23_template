const options = {
	keyboard: true,
	size: 'fullscreen',
};

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});