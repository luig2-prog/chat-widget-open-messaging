import './TitleBar.css'

export const TitleBarComponent = () => {
    return (
        <div className='knt-titlebar'>
            <div className='cx-title display-none-input-konecta' role='none'>
                CHAT EN LÍNEA
            </div>
            <div className="knt-titlebar-container-btn cx-button-group cx-buttons-window-control">
                <button className="cx-icon cx-button-minimize" aria-label="Minimizar chat en vivo"
                    data-icon="minimize">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                        focusable="false" role="img" aria-hidden="true" alt="">
                        <rect className="cx-svg-icon-tone1" width="100" height="18" y="82" x="0">
                        </rect>
                    </svg>
                </button>
                <button className="cx-icon cx-button-close" aria-label="Cerrar chat en vivo"
                    data-icon="close">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                        focusable="false" role="img" aria-hidden="true" alt="">
                        <path className="cx-svg-icon-tone1" d="M100,14.29,64.28,50,100,85.7,85.7,100,50,64.28,14.3,100,0,85.7,35.72,50,0,14.29,14.3,0,50,35.71,85.7,0Z" transform="translate(-0.02 -0.01)"></path></svg></button>
            </div>
        </div>
    )
}