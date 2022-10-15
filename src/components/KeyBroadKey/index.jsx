import { useRef, useEffect, useState } from "react";
const KeyBroadKey = ({ children }) => {

    const [currentKey, setCurrentKey] = useState('');

    const ref = useRef(null);

    const handleKeyDown = (e) => {
        setCurrentKey(e.key);
    }

    useEffect(() => {
        if (currentKey == children) {
            ref.current.click();
        }
    })

    // const clickDOMButton = (e) => {
    //     console.log(e.target);
    // }
    useEffect(() => {
        // ref.current.addEventListener('click', clickDOMButton, false)
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            // ref.current.removeEventListener('click', clickDOMButton, false)
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])
    return <div ref={ref} onClick={(e)=>{
        console.log(e);
    }}>
        <label className="btn btn-ghost" >{children}</label>
    </div>


}
export default KeyBroadKey;