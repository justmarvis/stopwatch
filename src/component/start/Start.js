import './Start.css';

function Start(props) {
    return(
        <div className='start-container'>
        <input type='checkbox' className='check-strt' id='strt' />
        <button className='start' onClick={props.start}>
            <label for='strt' className='strt'>
                <p className='start-text'>Start</p>
            </label>
        </button>
        </div>
    );
}

export default Start;