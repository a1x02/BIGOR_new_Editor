const editorTextArea = document.querySelector('.text__editor')
const buttonAddFormula = document.querySelector('.popup__add-formula')
const eq = document.querySelector('main')
const keyboard = document.querySelector('.detached')

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

var modal = document.querySelector('.popup__add-tools')
var textArea = document.querySelector('.text__editor')

// Показываем модальное окно при нажатии ПКМ в текстовом поле
textArea.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    modal.style.display = "block";
    console.log(event.clientY)
    modal.style.top = event.clientY + 10 + "px";
    modal.style.left = event.clientX + 10 + "px";

});

document.addEventListener("click", () => {
    modal.style.display = "none"
})

buttonAddFormula.addEventListener('click', () => {
    eq.style.display = 'block'
    keyboard.style.display = 'block'
})

        // Закрываем модальное окно при нажатии на крестик
        // var closeButton = document.getElementsByClassName("close")[0];
        // closeButton.onclick = function() {
        //     modal.style.display = "none";
        // };

        // Закрываем модальное окно при клике вне его области
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // };

        // Добавляем обработчик события для кнопки "Добавить формулу"
        // var addFormulaButton = document.getElementById("addFormulaButton");
        // addFormulaButton.onclick = function() {
        //     // Действия, которые нужно выполнить при нажатии на кнопку "Добавить формулу"
        //     // Например, вставка формулы в текстовое поле или выполнение других действий
        //     console.log("Формула добавлена!");
        //     modal.style.display = "none"; // Закрываем модальное окно после добавления формулы
        // };