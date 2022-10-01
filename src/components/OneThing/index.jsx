import CustomButton from "../CustomButton";
const OneThing = ({ thing, handleCompletedThing }) => {
    return <>
        <h1 className='text-3xl sm:text-6xl font-bold'>
            {thing}
        </h1>

        <CustomButton text="完事" handleCompletedThing={handleCompletedThing} />
    </>
}
export default OneThing;