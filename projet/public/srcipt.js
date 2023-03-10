"use strict";
class FormInput {
    //Listners:
    submitFormListner() {
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
    handleSubmit(e) {
        e.preventDefault();
        const inputs = this.inputData();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, adresse, country, town, zip, product, price, quantity, tva] = inputs;
            console.log(type, firstName, lastName, adresse, country, town, zip, product, price, quantity, tva);
        }
    }
    inputData() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [
                type,
                firstName,
                lastName,
                address,
                country,
                town,
                zip,
                product,
                price,
                quantity,
                tva
            ];
        }
        else {
            alert("les valuers numériques doivent être > 0");
            return;
        }
    }
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        //Listners: 
        this.submitFormListner();
    }
}
new FormInput();
