import { feedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: feedbackType ) => void
}

export function FeedbacktypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
    return(
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

        
            <div className="flex py-8 gap-2 w-full content-center">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 items-center flex flex-col gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => onFeedbackTypeChanged(key as feedbackType)} 
                            type='button'
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}

