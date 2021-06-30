import { writable } from "svelte/store";
export const contacts = writable([
    {
        name: "Neuen Empfänger anlegen",
        iban: "",
        bank: "",
        createNewContact: true
    },
    {
        name: "Thomas Friedrich",
        iban: "DE26500105173512514936",
        bank: "BLT Bank Nauen"
    },
    {
        name: "REWE Rosenheim",
        iban: "DE16500105177715898372",
        bank: "Sparkasse Rosenheim"
    },
    {
        name: "BetterLife GmbH",
        iban: "DE57500105176332758532",
        bank: "Int. Ltd. WorldWide"
    },
]);
export const activeContact = writable({
    name: "Neuen Empfänger anlegen",
    iban: "",
    bank: "",
    createNewContact: true
});
//# sourceMappingURL=contacts.js.map