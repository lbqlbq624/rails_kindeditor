KindEditor.plugin('editor135', function (K) {
    var editor = this, name = 'editor135';
    // 点击图标时执行
    editor.clickToolbar(name, function () {
        editor.sync();
        var kindContent = $(".kindeditor").val(); //当前kindeditor文档编辑器中的内容

        var editor135 = window.open('https://www.135editor.com/simple_editor.html?callback=true&appkey=')
        window.addEventListener('message', function (event) {
            if (event.data.ready) {
                editor135.postMessage(kindContent, '*');
            }

            var content = event.data;
            editor.html(content);
        }, false);
    });
});