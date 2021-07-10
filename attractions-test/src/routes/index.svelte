<script>
    import {
        Button,
        TextField,
        RadioGroup,
        RadioButton,
        DropdownShell } from 'attractions';


    const items = [
        { value: '1', label: 'one' },
        { value: '2', label: 'two' },
    ];

    const colors = [
        { value: '#000000' },
        { value: '#ff0000' },
        { value: '#00ff00' },
        { value: '#ffffff' },
    ];
</script>

<Button>I am a button!</Button>
<TextField>What a nice text field!</TextField>
<RadioGroup {items} name="numbers" />
<RadioGroup color items={colors} name="colors" />