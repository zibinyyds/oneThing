import { useEffect, useRef } from "react"
import KeyBroadKey from "../../components/KeyBroadKey";
export default () => {
    const ref = useRef(null);
    const handleKeyDown = (e) => {
        ref.current.click();
        // console.log(ref.current.click());
        // console.log(e.key);qq
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    const keyBroad = {
        first: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        second: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        third: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    }

    return (
        <div className="grid place-items-center min-h-screen " >
            {/* <div className="select-none" ref={ref}>
                {Object.keys(keyBroad).map((item) => {
                    return (
                        <div className="flex justify-center gap-2 my-2 w-full" key={item}>
                            {
                                keyBroad[item].map(kbd => <kbd className={`btn`} key={kbd} onClick={(e) => {
                                    console.log(e);
                                }} >{kbd}</kbd>)
                            }
                        </div>
                    )
                })}
            </div> */}
            <KeyBroadKey>y</KeyBroadKey>
        </div >
    )
}