import { writable } from "svelte/store";

export type Contact = {
    name: string,
    iban: string,
    bank: string
}

export const contacts = writable<Contact[]>(
    [
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
        {
            name: "Alexandra Mehlich",
            iban: "DE26500105173512514931",
            bank: "BLT Bank Nauen"
        },
        {
            name: "Lidl Düsseldorf",
            iban: "DE16500105177715898373",
            bank: "Sparkasse Düsseldorf"
        },
        {
            name: "BrownBag Inc.",
            iban: "DE57500105176332758534",
            bank: "Tom Hemp's Bank"
        },
    ]
)