// A dropdown list.

export default function Dropdown(
    {options, onChange, dropdown_id, defaultValue}: {
        options: Record<string, string>,
        onChange?: (value: string) => void,
        dropdown_id?: string
        defaultValue?: string
    }
) {
    return(
        <select
            id={dropdown_id ? dropdown_id: undefined}
            onChange={
                (e) => {onChange?.((e.target as HTMLSelectElement).value)}
            }
        >

            {Object.entries(options).map(([key, value]) => (
                <option
                    key={key}
                    value={key}
                    selected={key === defaultValue}
                >
                    {value}
                </option>
            ))}
        </select>
    )
}