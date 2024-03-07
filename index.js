const editorTextArea = document.querySelector('.text__editor')

function adjustHeight(textarea) {
    textarea.style.height = 'auto'; // Сначала устанавливаем высоту на авто, чтобы сбросить ранее заданную высоту
    textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем высоту текстового поля в соответствии с его содержимым
}

editorTextArea.addEventListener('input', function() {
    adjustHeight(this)
})

window.onload = function() {
    adjustHeight(editorTextArea)
}