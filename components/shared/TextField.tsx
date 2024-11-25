// A textfield.

export default function TextField({ label, value, onChange, textfield_id, }: {
    label?: string,
    value?: string,
    onChange?: (value: string) => void,
    textfield_id?: string
}) {
    return(
        <input
            type="text"
            id={textfield_id}
            label={label}
            value={value}
            onChange={
                (e) => {onChange?.((e.target as HTMLSelectElement).value)}
            } 
        />
    )
}