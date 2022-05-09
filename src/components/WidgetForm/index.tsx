import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideiaImageUrl from '../../assets/ideia.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbacktypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "imagem de um inseto"
        }
    },
    IDEIA: {
        title: "Ideia",
        image: {
            source: ideiaImageUrl,
            alt: "imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "imagem de uma nuvem"
        }
    }
}

export type feedbackType = keyof typeof feedbackTypes

export function WidgetFrom() {

    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbacktypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep feedbackType={feedbackType} />
            )}

            <footer className="text-xs text-neutral-400"> Feito com ♥ pela <a className="underline underline-offset-2" href="app.rocketseat.com">Rocketseat</a> </footer>
            
        </div>
    )
}