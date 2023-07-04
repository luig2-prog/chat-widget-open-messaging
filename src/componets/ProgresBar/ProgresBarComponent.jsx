export const ProgresBar = () => {
    return (
        <div className="content-progress-group">
            <div>
                <div className="bordes-radius content-radius">
                    <div className="bordes-radius black-konecta" id="initial-box"></div>
                </div>
                <h5 className="initial-font-konecta" id="initial-h5">Inicio</h5>
            </div>
            <div className="content-progress-bar">
                <div id="myProgress">
                    <div id="myBar"></div>
                </div>
            </div>
            <div>
                <div className="bordes-radius content-radius">
                    <div className="bordes-radius gray-konecta" id="data-box"></div>
                </div>
                <h5 className="initial-font-konecta gray-konecta" id="data-h5">Datos</h5>
            </div>
        </div>
    )
}