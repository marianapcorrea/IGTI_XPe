import {useEffect, useState} from 'react'

export default function FlashCard ({
    title = "Título", 
    description = "Verso do Card",
    showFlashCardTitle = true,
})  {
    const [showTitle, setShowTitle] = useState(showFlashCardTitle);
    useEffect(() => {
        setShowTitle(showFlashCardTitle);
    }, [showFlashCardTitle])

    const fontSizeClassName = showTitle ? 'text-xl font-semibold ' : 'text-sm'; 

    function handleCardClick() {
        setShowTitle(currentShowTitle=> !currentShowTitle)
    }

    return (
        <div 
        className={`shadow-lg p-4 m-2 w-80 h-48 flex flex-row items-center justify-center   bg-green-50  cursor-pointer ${fontSizeClassName}`} 
        style={{fontFamily:" 'JetBrains Mono', monospace"}}
        onClick={handleCardClick}
        >
            {showTitle ? title : description}
        </div>
    )
}
