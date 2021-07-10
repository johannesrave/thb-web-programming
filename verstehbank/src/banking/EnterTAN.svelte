<!--suppress JSUndeclaredVariable, JSUndeclaredVariable -->
<script lang="ts">
    import { next } from '$banking/bankingState';
    import { transactionForm } from '$banking/bankingForm';
    import Input from '$lib/Input.svelte';
    import ButtonGroup from '$lib/ButtonGroup.svelte';
    import { back } from '$banking/bankingState';
    import Button from '$lib/Button.svelte';
    import { accountDB } from '$banking/accounts';
    import { user } from '$login/auth';


    let generatedTAN: number = null;

    let validate = () => {
        if ($transactionForm.tan.toString() === generatedTAN.toString()) {
            console.log('TANs match, proceeding.')
            accountDB.update(accountDB => {
                    const newTrans = {
                        amount : -$transactionForm.amount,
                        comment : '',
                        contact : {
                            name : $transactionForm.recipient,
                            iban : $transactionForm.iban,
                            bank : 'olle bank'
                        }
                    }
                    accountDB[$user.username].transactions.push(newTrans);
                    return accountDB;
                }
            )
            next();
        }
    }

    let generateTAN = () => {
        let randomNumber = new Uint32Array(1);
        window.crypto.getRandomValues(randomNumber);
        generatedTAN = Number(randomNumber[0].toString().slice(0, 6));

        alert(generatedTAN);
    }
</script>

<h2>Freigabe</h2>
<form on:submit|preventDefault={validate}>
    <div class="explanation">
        Info:
        Eine TAN ist ein Einmal-Passwort, das nur aus Zahlen besteht.
    </div>
    <ButtonGroup>
        <Button label="TAN anfordern" on:click={generateTAN}/>
    </ButtonGroup>
    <Input bind:value={$transactionForm.tan} id="tan" type="text" label="TAN" rightJust="true"/>
</form>
<ButtonGroup>
    <Button label="Zurück" on:click={back}/>
    <Button label="Absenden" on:click={validate}/>
</ButtonGroup>
