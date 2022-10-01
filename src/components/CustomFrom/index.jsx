import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
const Form = ({ thing, handleInput, handleSubmit }) => {
    return <>
        <h1 className='text-3xl sm:text-6xl font-bold'>
            现在最想做的一件事?
        </h1>

        <form
            className='flex ring-4 rounded-md 
          ring-slate-200 dark:ring-slate-800
          focus-within:ring-teal-600 focus-within:ring-offset-4
          bg-slate-200 
          ring-offset-slate-200 dark:ring-offset-slate-800
         '
            onSubmit={handleSubmit}
        >
            <input type="text" className='bg-inherit rounded-md 
          font-sans text-slate-800 py-2 px-6 focus:outline-none
          text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600
          appearance-none w-full
          '
                placeholder='输入一件最想做的事'
                autoFocus
                maxLength={64}
                value={thing}
                onInput={handleInput}
            />
            <button className='bg-inherit rounded-md 
          font-sans text-slate-800 py-2 pr-6 
          focus:text-teal-600 hover:text-teal-600
          pointer-event-none
          '>
                <ArrowRightCircleIcon className="h-12 w-12" />
            </button>
        </form>
    </>

}
export default Form;