// A button that contains an icon.

export default function IconButton(
    {icon, click}: {click: () => void, icon: string}
){
    return(
        <div onClick={click} className="icon-button">
            <img
                className="button-icon"
                src={`/icons/${icon}.svg`}
            />
        </div>
    )
}