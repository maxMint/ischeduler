$(function () {
//profile
$('a#btnSave').click(function (e) {
    e.preventDefault();
    var status = $('#status').data("kendoDropDownList").text();
    var oldStatus = $('#oldStatus').val();
    if (status == 'Active' || status == oldStatus) {
        $(editProfileForm).submit();
    } else {
        showConfirmationForStatusChange(status);
    }
});
$('div#editProfile').find('input[data-val-length-max]').each(function () { $(this).attr('maxlength', $(this).attr('data-val-length-
    max')); });

// Preferences
var preferences = new CleaningPreference({
    container: 'table.settings td#prefs',
    template: 'script#cleaningPreferenceTemplate',
    namePrefix: 'Preferences',
});
$('table.settings #addPref').click(function (e) {
    e.preventDefault();
    preferences.addSlot();
});
// Contract section
$('#newContract').click(function (e) {
    e.preventDefault();
    contract.openContract();
});
$('.k-listview').removeClass('k-widget').removeClass('k-listview');
    //Notes
    initializeNotes('a#newNote');
    //Documents
    initializeDocuments('a#newDocument');
    showTab('li.n1', '#profile');
    registerTabClick('li.n1', '#profile');
    registerTabClick('li.n2', '#notes');
    registerTabClick('li.n3', '#documents');
    registerTabClick('li.n5', '#contracts');
    registerTabClick('li.n6', '#payments');
});