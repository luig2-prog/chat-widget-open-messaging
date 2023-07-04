export const LoadingChat = () => {
    return (
        <div className="cx-loading-screen" role="alert" aria-busy="true">
            <div className="cx-loading-icon cx-icon" data-icon="loading">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100" focusable="false" role="img" aria-hidden="true" alt="">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g stroke="#E5EAF0"><circle cx="50" cy="50" r="48"></circle></g></g><g stroke="none"
                            strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="58,1000">
                        <g stroke="#75A8FF" strokeWidth="5">
                            <circle cx="50" cy="50" r="48">
                            </circle>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}