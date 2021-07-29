// Configuration to activate "Vue" on the web inspector
Vue.config.devtools = true;

// Variable to activate "Vue"
const root = new Vue({
    el: "#root",
    data: {
        //* To-do list
        listItems: [
            "Fare la spesa",
            "Prenotare un appuntamento dal parrucchiere",
            "Stendere la lavatrice",
            "Controllare la posta",
            "Comprare nuove tende in cucina",
        ],
        //* New things to do to list
        newItem: "",
    },
    methods: {
        //* Function that deletes things done from the list
        removeItem(index) {
            this.listItems.splice(index, 1);
        },
        //* Funzione that adds to the list new things to do 
        addNewItem() {
            this.listItems.push(this.newItem);
            this.newItem = "";
        }
    }
});