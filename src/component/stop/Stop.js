import './Stop.css';

function Stop() {
    return(
        <div className='stop-container'>
        <input type='checkbox' className='check-stop' id='st' />
        <button className='stop'>
            <label for='st' className='st'>
                <p className='stop-text'>Stop</p>
            </label>
        </button>
        </div>
    );
}

export default Stop;