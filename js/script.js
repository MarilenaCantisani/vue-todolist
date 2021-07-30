// Configuration to activate "Vue" on the web inspector
Vue.config.devtools = true;



// Variable to activate "Vue"
const root = new Vue({
    el: "#root",
    data: {
        //* To-do list
        listItems: [
            {
                text: "Fare la spesa",
                done: false
            },
            {
                text: "Prenotare un appuntamento dal parrucchiere",
                done: false
            },
            {
                text: "Stendere la lavatrice",
                done: false
            },
            {
                text: "Controllare la posta",
                done: false
            },
            {
                text: "Comprare nuove tende in cucina",
                done: false
            },
        ],
        searchText: "",
        //* New things to do to list
        newItem: "",
        isInputVisible: false,

    },
    methods: {
        //* Function that deletes things done from the list
        removeItem(index) {
            this.listItems.splice(index, 1);
        },
        //* Funzione that adds to the list new things to do 
        addNewItem() {
            if (this.newItem.trim() !== "") {
                this.listItems.push({ text: this.newItem, done: false });
                this.toggleAddInput()
            } else {
                this.newItem = "";
            }
        },
        toggleAddInput() {
            this.isInputVisible = !this.isInputVisible;
            this.newItem = "";
        },
        toggleDone(index) {
            const updateItem = this.listItems.map((item, i) => {
                if (i === index) {
                    item.done = !item.done
                }
                return item;
            })
        },
        isDone(index) {
            return this.listItems[index].done;
        },
    },
});