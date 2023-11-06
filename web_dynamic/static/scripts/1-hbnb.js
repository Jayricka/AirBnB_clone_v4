$(document).ready(function () {
  let selectedAmenities = [];

  $('input[type="checkbox"]').on('change', function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      selectedAmenities.push(amenityId);
    } else {
      selectedAmenities = selectedAmenities.filter(id => id !== amenityId);
    }

    const amenitiesText = selectedAmenities.length > 0
      ? "Amenities: " + selectedAmenities.join(', ')
      : "No amenities selected";

    $('#amenities').text(amenitiesText);
  });
});
