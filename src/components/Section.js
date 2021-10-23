export class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items
        this._renderer = renderer
        this._container = containerSelector

    }


    addItem(someItem){
        this._container.prepend(someItem)
    }

    renderer() {
        this._items.forEach(item => {
            this._renderer(item)
        })
    }
}