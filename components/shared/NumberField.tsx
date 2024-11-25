// A numberfield.

export default function NumberField({ label, value, onChange, textfield_id, }: {
    label?: string,
    value?: string,
    onChange?: (value: string) => void,
    textfield_id?: string
}) {
    return(
        <input
            type="number"
            id={textfield_id}
            label={label}
            value={value}
            onChange={
                (e) => {onChange?.((e.target as HTMLSelectElement).value)}
            } 
        />
    )
}