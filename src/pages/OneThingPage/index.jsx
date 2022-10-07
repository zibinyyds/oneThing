import { useState } from 'react'

import Form from '../../components/CustomFrom';
import OneThing from '../../components/OneThing';
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()



const getSuccessMessage = () => {
  const message = ['兄弟👬，牛逼呀！', "继续加油⛽️", '这么快啊🚀，厉害了兄弟'];
  return message[Math.floor(Math.random() * message.length)]
}

function OneThingPage() {
  const [thing, setThing] = useState('')
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false)
  }

  const handleInput = (e) => {
    setThing(e.target.value)
  }

  const handleCompletedThing = async (e) => {
    e.target.setAttribute('disabled', true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ['⚡️', '💥', '✨', '🚀'],
      emojiSize: 100,
      confettiNumber: 100,
    })
    e.target.removeAttribute('disabled');
    setThing('');
    setIsCompleted(true);
  }
  return (
    <main className="grid place-items-center min-h-screen 
    bg-gradient-to-b from-slate-100 to-slate-200
     dark:from-slate-800 dark:to-slate-900 text-slate-900
     dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && <Form
          thing={thing}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />}

        {
          !isCompleted && <OneThing
            thing={thing}
            handleCompletedThing={handleCompletedThing}
          />
        }
      </div>

    </main>
  )
}

export default OneThingPage
