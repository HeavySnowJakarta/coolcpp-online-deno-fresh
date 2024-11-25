// A switch (checkbox).

export default function Switch({value, onChange, switch_id}: {
    value?: boolean,
    onChange?: (value: boolean) => void,
    switch_id?: string
}){
    return (
        <label className="switch">
            <input
                id={switch_id ? switch_id : undefined}
                type="checkbox"
                checked={value}
                onChange={
                    (e) => {onChange?.((e.target as HTMLInputElement).checked)}
                }
            />
            <span class="switch-slider"></span>
        </label>
    )
}