var allTask = {
    writeTextAtInputOne: $('#writeTextAtInputOne'),
    multiplication: $('#multiplication'),
    division: $('#division'),
    subtraction: $('#subtraction'),
    added: $('#added'),
    writeTextAtInputToo: $('#writeTextAtInputToo'),
    answer: $('#answer'),
    pressButton: $('#pressButton')
};

allTask.pressButton.on('click', function () {
    var writeTextAtInputOne = allTask.writeTextAtInputOne.val().length;
    var writeTextAtInputToo = allTask.writeTextAtInputToo.val().length;
    var regularExpression = /[IVXLCDMivxlcdm]/g;                        //Регулярное выражение

    if (!writeTextAtInputOne || !writeTextAtInputToo) {
        alert('Вы не ввели в обе формы ЛАТИНСКИЕ ЦИФРЫ');
        return false;
    }
    if (!regularExpression) {
        alert('Таких ЛАТИНСКИХ ЦИФР не существует.\n Пример:  I V X L C D M  или  i v x l c d m');
        return false;
    }
    if (writeTextAtInputOne >= 16 || writeTextAtInputOne >= 16) {
        alert('Нельзя использовать В ОДНОЙ ФОРМЕ больше 15 символов, у Вас их - ' + writeTextAtInputOne);
        return false;
    }
    if (allTask.multiplication === false && allTask.division === false && allTask.subtraction === false && allTask.added === false) {
        alert('Вы не выбрали операцию над объектом');
        return false;
    }
    allTask.writeTextAtInputOne.val('');
    allTask.writeTextAtInputToo.val('');
});

allTask.multiplication.on('click', function () {
   allTask.writeTextAtInputOne * allTask.writeTextAtInputToo;
});
