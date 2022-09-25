const getText = ( id ) => document.getElementById( id ).value;

const validations = () => {
    const text = getText('new-item');
    if( text.length <= 0 ) {
        alert('The new item on the list has to contain some text...');
        return false;
    }
    return true;
}

const createNewElements = ( descrip = 'description item' ) => {

    const body = document.getElementsByTagName('body')[0];
    const main = document.getElementsByTagName('main')[0];
    const completedItems = document.getElementsByClassName('completed-item')[0];
    const div = document.createElement('div');
    const paragraph = document.createElement('p');
    const checkButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    
    paragraph.innerText = descrip;

    div.setAttribute('class', 'item-div');
    checkButton.setAttribute('type', 'submit');
    checkButton.setAttribute('class', 'checkButton');
    checkButton.setAttribute('onClick', 'checkItem(this)');
    checkButton.innerText = 'Check';
    paragraph.setAttribute('class', 'item-descrip');
    deleteButton.setAttribute('type', 'submit');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('onClick', 'deleteItem(this)');
    deleteButton.innerText = 'Delete';

    
    div.appendChild(paragraph);
    div.appendChild(deleteButton);
    div.appendChild(checkButton);
    main.insertBefore(div, completedItems);
    body.appendChild(main);
}

const addNewItem = () => {
    if( !validations() ) {
        return;
    } 
    createNewElements( getText('new-item') );
}

const deleteItem = ( element ) => {
    const divToRemove = element.parentNode;
    const main = document.getElementsByTagName('main')[0];
    const isSure = confirm('Are you sure you want to delete this item?');
    if( isSure )
        main.removeChild(divToRemove);
    else
        return;
}

const checkItem = ( element ) => {
    const div = element.parentNode;
    const isSure = confirm('Are you sure you want to mark this item as completed?');
    if( isSure ) {
        const completedItems = document.getElementsByClassName('completed-item')[0];
        const textParagraph = div.firstChild.textContent;
        const delTag = document.createElement('del');
        delTag.innerText = textParagraph;
        div.removeChild(div.lastElementChild);
        div.removeChild(div.lastElementChild);
        div.removeChild(div.lastElementChild);
        div.appendChild(delTag);
        completedItems.appendChild(div);
    }
    else
        return;
}