(function() {
    // создаём и возвращаем заголовок пиложения
    function createAppTitle(mainTitle) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = mainTitle;
        appTitle.classList.add('main-block__title');
        return appTitle;
    }

    function createAppTitleP(title) {
        let appTitleP = document.createElement('span');
        appTitleP.innerHTML = title;
        appTitleP.classList.add('main-block__paragraph');
        return appTitleP;
    }

    function createLeftBlock() {
        let leftBlock = document.createElement('div');
        leftBlock.classList.add('main-block__left');
        return leftBlock;
    }

    function createtitleList() {
        let listTitle = document.createElement('span');
        listTitle.classList.add('main-block__title-list');
        listTitle.textContent = 'Список:';
        return listTitle;
    }

    // создаём и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let numberLabel = document.createElement('label');
        let numberInput = document.createElement('input');
        let nameLabel = document.createElement('label');
        let nameInput = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'main-block__right-form');
        numberInput.classList.add('form-control');
        numberInput.type = 'number';
        nameInput.classList.add('form-control');
        numberLabel.textContent = 'Номер записи';
        nameLabel.textContent = 'Название записи';
        buttonWrapper.classList.add('btn', 'button');
        button.textContent = 'Добавить в список';

        buttonWrapper.append(button);

        form.append(numberLabel);
        form.append(numberInput);
        form.append(nameLabel);
        form.append(nameInput);
        form.append(buttonWrapper);

        return {
            form,
            nameInput,
            numberInput,
            button
        };
    }

    // создаём и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('main-block__list');

        return list;
    }


    function createTodoItem() {
        let item = document.createElement('li');
        let nameSpan = documne.createElement('span');
        item.classList.add('main-block__list-item');
        item.textContent = `${el.value}`;
        nameSpan.classList.add('main-block__list-item__name');
        nameSpan.textContent = `${el.type}`;

        item.append(nameSpan)

        return item;
    }


    // function createTodoItemContent(data) {
    //     let nameSpan = document.createElement('span');
    //     let numberSpan = document.createElement('span');

    //     numberSpan.classList.add('main-block__list-item__number');
    //     numberSpan.textContent = data + ') ';
    //     nameSpan.classList.add('main-block__list-item__name');
    //     nameSpan.textContent = data;


    //     return {
    //         numberSpan,
    //         nameSpan
    //     }
    // }



    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');

        let todoLeftBlock = createLeftBlock();
        let todoAppTitle = createAppTitle('Приветствую!');
        let todoAppTitleP = createAppTitleP('Давай обновим список и начем обучение');
        let todoListTitle = createtitleList();
        let todoList = createTodoList();
        let todoItemForm = createTodoItemForm();
        let todoItem = createTodoItem();


        todoList.append(todoItem);
        // container.append(todoAppTitle);
        // container.append(todoAppTitleP);
        container.append(todoLeftBlock);
        container.append(todoItemForm.form);

        todoLeftBlock.append(todoAppTitle);
        todoLeftBlock.append(todoAppTitleP);
        todoLeftBlock.append(todoListTitle);
        todoLeftBlock.append(todoList);

        // todoItem.append(todoItemContent);


        // браузер создаёт событие submit на форме по нажатию на enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            // эта строчка необходима, чтобы предотвратить стандартное действие браузера 
            // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            // игнорируем создание элемента , если пользователь ничего не ввёл в поле
            if (!todoItemForm.nameInput.value) {
                return;
            }
            if (!todoItemForm.numberInput.value) {
                return;
            }

            // создаём и добавляем в список новое дело с названием из поля для ввода

            todoItem.append(createTodoItemContent(todoItemForm.numberInput.value).item);
            todoItem.append(createTodoItemContent(todoItemForm.nameInput.value).nameSpan);


            // обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.numberInput.value = '';
            todoItemForm.nameInput.value = '';
        });
    });
})();

///////////////
(function() {
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let numberLabel = document.createElement('label');
        let numberInput = document.createElement('input');
        let nameLabel = document.createElement('label');
        let nameInput = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'main-block__right-form');
        numberInput.classList.add('form-control');
        numberInput.type = 'number';
        nameInput.classList.add('form-control');
        numberLabel.textContent = 'Номер записи';
        nameLabel.textContent = 'Название записи';
        buttonWrapper.classList.add('btn', 'button');
        button.textContent = 'Добавить в список';

        buttonWrapper.append(button);

        form.append(numberLabel);
        form.append(numberInput);
        form.append(nameLabel);
        form.append(nameInput);
        form.append(buttonWrapper);

        return {
            form,
            nameInput,
            numberInput,
            button
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item');
        item.textContent = name;

        buttonGroup.classList.add('btn-group');
        doneButton.classList.add('btn');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton
        };
    }

    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle('PS');
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!todoItemForm.input.value) {
                return;
            }

            todoList.append(createTodoItem(todoItemForm.input.value).item);

            todoItemForm.input.value = '';
        })
    })
})();