export class Section {
    constructor({renderer}, containerSelector) {
        // this._items = items
        this._renderer = renderer
        this._container = containerSelector

    }
    
    // addItemPrepend(element) {
    //     this._container.prepend(element);
    // }
    
    _clear() {
        this._container.innerHTML = '';
      }
    

    addItem(someItem){
        this._container.prepend(someItem)
    }

    renderer(data) {
        this._clear();

        data.reverse().forEach(item => {
            this._renderer(item);
        });
    }
}