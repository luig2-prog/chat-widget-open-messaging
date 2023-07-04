export const QuestionComponent = () => {
    return (
        <div role="alertdialog" aria-modal="true" aria-describedby="cx_chat_end_question"
            className="cx-alert cx-chat-end">
            <div className="cx-wrapper">
                <p id="cx_chat_end_question" className="i18n" data-message="ChatEndQuestion" >
                    <strong>
                        Estas apunto de abandonar el chat!
                    </strong>
                    <strong className="body-message-end-konecta">
                        Esta acción finalizará tu conversación actual. ¿Estás de acuerdo?
                    </strong>
                </p>
                <div className="cx-button-group cx-buttons-binary">
                    <button className="cx-end-cancel cx-btn cx-btn-default i18n"
                        data-message="ChatEndCancel" aria-label="Cancelar">No</button>
                    <button className="cx-end-confirm cx-btn cx-btn-primary i18n"
                        data-message="ChatEndConfirm" aria-label="Fin">Si</button>
                </div>
                <div className="cx-button-group cx-buttons-binary">
                    <button
                        className="cx-end-confirm cx-btn cx-btn-primary i18n cx-close-pop-up-konecta"
                        data-message="ChatEndConfirm" aria-label="Fin"></button></div></div>
        </div>
    )
}