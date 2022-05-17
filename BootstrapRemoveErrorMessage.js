class BoostrapRemoveErrorMessage {

    arr_id_elements;

    constructor(arr_id_elements) {
        this.arr_id_elements = arr_id_elements;
    }

    removeErrorMessage() {
        this.arr_id_elements.forEach((id_element) => {

            if( typeof id_element == 'object' ) {
                id_element.action(id_element.key);
            } else {
                let inputElement = document.getElementById(id_element);

                if( ['INPUT', 'TEXTAREA'].includes(inputElement.tagName) ) {
                    inputElement.classList.contains('is-invalid') ? inputElement.classList.remove('is-invalid') : '';
    
                    if( inputElement.nextElementSibling ) {
                        if( inputElement.nextElementSibling.classList.contains('invalid-feedback') ) {
                            inputElement.nextElementSibling.remove();
                        }
                    }
                }
            }
        });
    }

}
