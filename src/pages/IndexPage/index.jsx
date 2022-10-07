export default () => {
    const keyBroad = {
        first: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        second: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        third: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    }
    return (
        <div >
            <div className="select-none ">
                {Object.keys(keyBroad).map((item) => {
                    return (
                        <div className="flex justify-center gap-2 my-2 w-full" key={item}>
                            {
                                keyBroad[item].map(kbd => <kbd className="kbd" key={kbd}>{kbd}</kbd>)
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}