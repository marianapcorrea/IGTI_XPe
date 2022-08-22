export default function Button({
    children: description = "Descrição",
    onButtonClick = null,
}) {
    function handleButtonClick() {
        if (onButtonClick) {
            onButtonClick();
        }
    }
    return (
        <button
            className="bg-green-200 p-2 m-2 rounded-md"
            onClick={handleButtonClick}
        >
            {description}
        </button>
    );
}
