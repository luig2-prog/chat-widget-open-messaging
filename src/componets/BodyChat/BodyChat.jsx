import './BodyChat.css'
import { QuestionComponent } from '../question/QuestionComponent';
import { ProgresBar } from '../ProgresBar/ProgresBarComponent';

export const BodyChat = () => {
    const divStyle = {
        display: 'block'
    };
    const divStyleNone = {
        display: 'none'
    };

    return (
        <div className="cx-body">
            <div style={divStyleNone}>
                <QuestionComponent />
            </div>
            <div className="cx-form-wrapper" style={divStyle}>
                <div className="cx-form cx-form-horizontal" role="form">
                    <div className="cx-form-inputs"><div id="form-elemnts-contents">
                        <ProgresBar />
                        <hr />
                        <div style={divStyleNone} className="content-greating display-none-input-konecta"
                            id="content_greating">
                            <h1 className="wc-subtitle">
                                ¡Estás a un paso!
                            </h1>
                            <p className="text-aling-center-konecta">
                                Usaremos estos datos para comunicarnos contigo
                            </p>
                        </div>
                        <div className="container-policies-konecta">
                            <h1 className="wc-subtitle">
                                ¡Bienvenido!
                            </h1>
                            <p className="text-aling-center-konecta font-mulish-regular">
                                Para conversar con uno de nuestros
                                <br />
                                asesores, ingresa tus datos en el formulario.
                            </p>
                            <div className="text-aling-center-konecta strong-konecta">
                                Antes de solicitar tus datos ten en cuenta que:
                            </div>
                            <div className="container-konecta" id="dinamyc-policies">
                                <p className="text-aling-center-konecta asesor-konecta-policies">
                                    Los datos que nos proporcionas serán<br />
                                    almacenados y utilizados por <strong>BEL STAR S.A.</strong>,<br />
                                    con NIT 800.018.359-1, para asesorarte en el proceso de inscripción
                                    como consultora,
                                    de conformidad con nuestra <strong id="show_police_event">política de
                                        tratamiento y protección
                                        de datos personales</strong>, en la cual podrás encontrar los
                                    mecanismos
                                    para ejercer tus derechos como titular de los datos personales.
                                </p>
                            </div>
                        </div>
                        <div className="display-none-input-konecta col-konecta col-konecta-12 mb-20">
                            <input autoComplete="off" className="cx-input cx-form-control"
                                id="cx_webchat_form_firstname" name="firstname" maxLength="200"
                                placeholder="Nombre Completo" span="cx-error"
                                type="text" aria-label="firstname" />
                        </div>
                        <div className="display-none-input-konecta col-konecta col-konecta-12 mb-20">
                            <input autoComplete="off" className="cx-input cx-form-control"
                                id="cx_webchat_form_doc2" name="Identify" maxLength="16"
                                placeholder="Número de documento" span="cx-error"
                                type="text" aria-label="Identify" />
                        </div>
                        <div className="display-none-input-konecta col-konecta col-konecta-12 mb-20">
                            <input autoComplete="off" className="cx-input cx-form-control"
                                id="cx_webchat_form_email" name="email" maxLength="60"
                                placeholder="Correo electrónico" type="Email" span="cx-error"
                                aria-label="email" />
                        </div>
                        <div className="display-none-input-konecta col-konecta col-konecta-12 mb-20">
                            <input autoComplete="off" className="cx-input cx-form-control"
                                id="cx_webchat_form_phone" name="PhoneNumber" type="text" maxLength="10"
                                placeholder="Número de celular"
                                aria-label="PhoneNumber" />
                        </div><div className="col-konecta col-konecta-12 d-flex-konecta mb-konecta-1rem">
                            <div className="radio-container">
                                <input autoComplete="on" className="cx-input cx-form-control"
                                    id="cx_webchat_form_politicas" name="sitio" type="radio"
                                    span="cx-error" value="true" />
                                <label className="cx-control-label i18n" htmlFor="cx_webchat_form_politicas">
                                    <div className="terminos-condiciones-label">He leído y aceptado los </div>
                                    <a id="conditions_url" className="terminos-condiciones-label-a"
                                        href="https://www.belcorp.biz/assets/uploads/2021/02/Poli%CC%81tica-de-Tratamiendo-y-Proteccio%CC%81n-de-Datos-Personales-VF-PW.pdf"
                                        rel="noreferrer" title="Términos y Condcione" target="_blank">
                                        términos y condiciones
                                    </a>
                                </label>
                            </div>
                        </div>
                        <div style={divStyleNone}>
                            <div colSpan="2">
                                <input className="cx-input cx-form-control" id="cx_webchat_form_iporigen"
                                    name="IpOrigen" maxLength="100" type="hidden" value="179.12.111.244"
                                    aria-label="IpOrigen" />
                            </div>
                        </div>
                        <div style={divStyleNone}><div colSpan="2">
                            <input className="cx-input cx-form-control" id="cx_webchat_form_lastname"
                                name="lastname" maxLength="100" placeholder="lastname" type="hidden"
                                value="  " aria-label="lastname" />
                        </div></div>
                        <div style={divStyleNone}><div colSpan="2">
                            <input className="cx-input cx-form-control" id="cx_webchat_form_subject"
                                name="subject" maxLength="100" placeholder="subject" type="hidden"
                                value="EbChatBelcorp" aria-label="subject" /></div></div>
                        <div className="content-progress-group display-none-input-konecta 
                              col-konecta col-konecta-12 mb-20">
                            <input className="cx-check-tanscrip-konecta cx-input cx-form-control"
                                id="cx_webchat_form_transcripcion" name="Send_Chat_Transcript"
                                type="checkbox" span="cx-error" value="true" />
                            <label className="cx-control-label i18n"
                                htmlFor="cx_webchat_form_transcripcion">
                                <div>Enviar chat a tu correo electrónico al finalizar la conversación</div>
                            </label>
                        </div>
                        <div style={divStyleNone}>
                            <div colSpan="2">
                                <input className="cx-input cx-form-control"
                                    id="cx_webchat_form_country" name="country" maxLength="100"
                                    placeholder="lastname" type="hidden" value="null" aria-label="country" />
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="cx-button-group cx-buttons-binary">
                        <button className="cx-btn cx-btn-default i18n" data-message="ChatFormCancel"
                            aria-label="Cancelar el chat">Cancelar</button>
                        <button
                            className="cx-submit cx-btn cx-btn-primary i18n display-none-input-konecta"
                            data-message="ChatFormSubmit" aria-label="Iniciar Sesión">Iniciar Chat</button>
                    </div>

                </div>
            </div>

            <div className="cx-transcript" style={divStyleNone}>
                <div className="cx-history-loading cx-loading-container">
                    <div className="cx-loading-icon cx-icon" data-icon="loading" role="alert"
                        aria-busy="true" aria-label="loading">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            focusable="false" role="img" aria-hidden="true" alt="">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g stroke="#E5EAF0">
                                    <circle cx="50" cy="50" r="48"></circle></g></g>
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                strokeDasharray="58,1000">
                                <g stroke="#75A8FF" strokeWidth="5">
                                    <circle cx="50" cy="50" r="48">
                                    </circle>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div></div><div className="cx-emoji-selection-menu" style={divStyleNone}>
                <ul className="cx-emoji-table cx-theme" role="listbox">
                    <li className="cx-emoji-item" role="option" aria-posinset="1" aria-setsize="15"
                        aria-label="grinning emoji" title="grinning" data-unicode="😀" tabIndex="0">😀
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="2" aria-setsize="15"
                        aria-label="expressionles emoji" title="expressionles"
                        data-unicode="😑" tabIndex="0">
                        😑
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="3"
                        aria-setsize="15" aria-label="confuse emoji" title="confuse"
                        data-unicode="😕" tabIndex="0">
                        😕
                    </li><li className="cx-emoji-item" role="option" aria-posinset="4"
                        aria-setsize="15" aria-label="kissing emoji" title="kissing"
                        data-unicode="😗" tabIndex="0">
                        😗
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="5"
                        aria-setsize="15" aria-label="kissing_smiling_eyes emoji"
                        title="kissing_smiling_eyes" data-unicode="😙"
                        tabIndex="0">
                        😙
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="6"
                        aria-setsize="15" aria-label="stuck_out_tongue emoji"
                        title="stuck_out_tongue" data-unicode="😛"
                        tabIndex="0">
                        😛
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="7"
                        aria-setsize="15" aria-label="worried emoji" title="worried"
                        data-unicode="😟" tabIndex="0">
                        😟
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="8" aria-setsize="15"
                        aria-label="frowning emoji" title="frowning" data-unicode="😦" tabIndex="0">
                        😦
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="9" aria-setsize="15"
                        aria-label="anguished emoji" title="anguished" data-unicode="😧" tabIndex="0">
                        😧
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="10" aria-setsize="15"
                        aria-label="grimacing emoji" title="grimacing" data-unicode="😬" tabIndex="0">
                        😬
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="11" aria-setsize="15"
                        aria-label="open_mouth emoji" title="open_mouth" data-unicode="😮" tabIndex="0">
                        😮
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="12" aria-setsize="15"
                        aria-label="hushed emoji" title="hushed" data-unicode="😯" tabIndex="0">
                        😯
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="13" aria-setsize="15"
                        aria-label="sleeping emoji" title="sleeping" data-unicode="😴" tabIndex="0">
                        😴
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="14" aria-setsize="15"
                        aria-label="car emoji" title="car" data-unicode=" 🚙" tabIndex="0">
                        🚙
                    </li>
                    <li className="cx-emoji-item" role="option" aria-posinset="15" aria-setsize="15"
                        aria-label="princess emoji" title="princess" data-unicode=" 👸" tabIndex="0">
                        👸
                    </li>
                </ul>
            </div>
            <div className="cx-input-container" style={divStyleNone}>
                <div className="cx-textarea-cell">
                    <textarea className="cx-message-input cx-input i18n cx-form-control cx-disabled"
                        id="cx_input" maxLength="500" data-message="ChatInputPlaceholder"
                        data-message-type="placeholder" tabIndex="-1"
                        aria-label="Escriba su mensaje aquí."
                        placeholder="Escriba su mensaje aquí.">
                    </textarea>
                    <div className="cx-send cx-icon i18n" data-icon="send" role="button"
                        data-message="ChatInputSend" data-message-type="title" tabIndex="0"
                        aria-label="Enviar" title="Enviar" style={divStyleNone}><svg version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100" focusable="false" role="img"
                            aria-hidden="true" alt="">
                            <path className="cx-svg-icon-tone1" d="M98.7,39.7L2.9,0.2C2.1-0.2,1.1,0,0.5,0.7c-0.6,0.7-0.7,1.6-0.2,2.4l22.9,39.6c0.4,0.6,1.1,1,1.8,1h50v-4.2H26.2L7,6.4l85.5,35.3l-84.8,35l17-25.6l-3.5-2.3L0.4,80.1c-0.5,0.8-0.5,1.8,0.1,2.5c0.4,0.5,1,0.8,1.6,0.8c0.3,0,0.5-0.1,0.8-0.2l95.8-39.6c0.8-0.3,1.3-1.1,1.3-1.9S99.5,40.1,98.7,39.7z"></path>
                        </svg>
                    </div>

                </div>

                <div className="cx-menu-cell display-none-input-konecta">
                    <ul className="cx-menu" role="none">
                        <li role="none">
                            <div className="cx-menu-item cx-emoji cx-icon i18n" role="button"
                                data-icon="smiley" data-message="ActionsEmoji" data-message-type="title"
                                tabIndex="0"
                                aria-label="Adjuntar archivos El vínculo Adjuntar archivos abre un cuadro de diálogo para cargar archivos"
                                title="Adjuntar archivos" style={divStyleNone}><svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100" focusable="false" role="img"
                                    aria-hidden="true" alt="">
                                    <path className="cx-svg-icon-tone1" d="M64.7,35.7l-6.3-6.3L30.6,57.3c-5.2,5.2-5.2,13.6,0,18.8c5.2,5.2,13.6,5.2,18.8,0l37.7-37.7c8.7-8.7,8.7-22.7,0-31.4c-8.7-8.7-22.7-8.5-31.4,0.2c0,0-39.6,39.6-39.7,39.7C4,59,4,78.5,16.1,90.6c12.1,12.1,31.7,12,43.8-0.1c0,0,0-0.1,0.1-0.1v0l27-27l-6.3-6.3l-27,27l0,0c0,0-0.1,0.1-0.1,0.1c-8.6,8.6-22.6,8.6-31.2,0s-8.6-22.6,0-31.2c0,0,0.1-0.1,0.1-0.1l0,0L62,13.3c5.2-5.2,13.7-5.2,18.8,0c5.2,5.2,5.2,13.7,0,18.8L43.2,69.8c-1.7,1.7-4.5,1.7-6.3,0c-1.7-1.7-1.7-4.5,0-6.3L64.7,35.7z"></path>
                                </svg>
                            </div>
                        </li>
                        <li role="none">
                            <div className="cx-menu-item cx-cobrowse cx-icon i18n" role="button"
                                data-icon="cobrowse" data-message="ActionsCobrowseStart"
                                data-message-type="title" tabIndex="0"
                                aria-label="Iniciar conavegación Abre la sesión de conavegación"
                                title="Iniciar conavegación" style={divStyleNone}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"

                                    viewBox="0 0 100 100" focusable="false" role="img" aria-hidden="true"
                                    alt="">
                                    <g className="cx-svg-icon-tone1">
                                        <path d="M11.5000001,3 L85.4166665,3 L87.6666668,3 C90.2624998,3 97,3.75367965 97,8.36940835 L97,30.4776335 L4.16666671,30.4776335 L4.16666671,70.4963922 C4.16666671,78.8021647 9.0333332,80.6810966 11.3333336,80.6810966 L88.6666664,80.6810966 C90.9625002,80.6810966 92.8333333,78.8021647 92.8333333,76.4963922 L92.8333333,41.8470419 L97,41.8470419 L97,79.5093796 C97,84.1251081 93.2624998,84.8787879 91.6666668,84.8787879 L8.3333332,84.8787879 C3.73750015,84.8787879 1,81.1251081 0,75.5093796 L0,8.36940835 C3,3.75367965 2.73750015,3 8.3333332,3 L8.5000001,3 Z M18.0297398,7.03030303 L5.9962825,7.03030303 C5.79033476,7.03030303 3.99999999,8.59607987 3.99999999,10.5175565 L3.999999,26.1125541 L93,26.1125541 L93,10.5175565 C93,8.59607987 91.2056692,7.03030303 89.0037175,7.03030303 L81.9702602,7.03030303 L18.0297398,7.03030303 Z M42.3451929,54.7727663 L42.3451929,68.6904309 L35,68.6904309 L35,47.7138693 C35,44.657411 37.4676761,42.1818182 40.5082059,42.1818182 L61.3971055,42.1818182 L61.3971055,49.5560425 L47.5394308,49.5560425 L66.3971054,67.9373646 L61.202867,73.154089 L42.3451929,54.7727663 Z" id="Fill-1-Copy"></path>
                                    </g>
                                </svg>
                            </div>
                        </li>
                        <li role="none">
                            <span className="cx-menu-item cx-char-count cx-inert" id="cx-charCount"
                                tabIndex="0" role="text" aria-label="500 Caracteres restantes"
                                title="500 Caracteres restantes" style={divStyleNone}>500</span></li>

                        <li role="none"><div className="cx-menu-item cx-icon cx-branding-icon cx-inert"
                            data-icon="branding" title="Powered by Genesys">
                            <svg version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100" focusable="false" role="img"
                                aria-hidden="true" alt=""><g className="cx-svg-icon-tone1">
                                    <path d="M70.6,6.1c2.5,0,4.5,2,4.5,4.5c0,2.5-2,4.5-4.5,4.5c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c-2.3-0.1-4.1-2-4.2-4.3c-0.1-2.5,1.8-4.6,4.3-4.7C70.5,6.1,70.6,6.1,70.6,6.1 M70.6,0.2c-5.7,0-10.3,4.6-10.3,10.3c0,5.5,4.3,10,9.8,10.3c0.2,0,0.3,0,0.5,0c5.7,0,10.3-4.7,10.3-10.4C80.9,4.8,76.3,0.3,70.6,0.2L70.6,0.2z"></path><path d="M63.8,72.2c5.7,0,10.4,4.7,10.4,10.4c0,5.7-4.7,10.4-10.4,10.4H52.5c-5.7,0-10.4-4.7-10.4-10.4c0-5.7,4.7-10.4,10.4-10.4L63.8,72.2 M63.8,65.4H52.5c-9.5,0-17.2,7.6-17.2,17.1c0,9.5,7.6,17.2,17.1,17.2c0,0,0.1,0,0.1,0h11.3c9.5,0,17.2-7.6,17.2-17.1c0-9.5-7.6-17.2-17.1-17.2C63.8,65.4,63.8,65.4,63.8,65.4L63.8,65.4z"></path><path d="M63.8,32c5.7,0,10.4,4.7,10.4,10.4c0,5.7-4.7,10.4-10.4,10.4H37.3c-5.7,0-10.4-4.7-10.4-10.4c0-5.7,4.7-10.4,10.4-10.4l0,0H63.8 M63.8,25.2H37.3c-9.5,0-17.2,7.7-17.2,17.2s7.7,17.2,17.2,17.2h26.5c9.5,0,17.2-7.7,17.2-17.2S73.2,25.2,63.8,25.2C63.8,25.2,63.8,25.2,63.8,25.2z"></path>
                                </g>
                            </svg>
                        </div>
                        </li>
                    </ul>
                </div>
                <form className="cx-form-horizontal" data-async=""
                    encType="multipart/form-data" noValidate="">
                    <label htmlFor="cx_browse_file" style={divStyleNone}></label>
                    <input type="file" id="cx_browse_file" className="cx-browseFile"
                        style={divStyleNone} />
                </form>
            </div>
            <div className="cx-common-screen-reader cx-screen-reader-transcript"
                aria-live="polite" aria-relevant="additions text" aria-atomic="false">
            </div>
        </div>
    )
}