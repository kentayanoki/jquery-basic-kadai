$(function(){
    //クリックしたら色が変更
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });
    //クリックしたら色と文字が変更
    $('#change-text').on('click', function() {
        $('#target').css('color', 'blue');
        $('#target').text('Hello!');
    });
    //クリックしたら文字がフェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    //クリックしたら文字がフェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });           
});