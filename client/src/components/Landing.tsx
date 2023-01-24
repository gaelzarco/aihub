function Landing() {
    return (
        <>
        <div className='FAQ'>
            <h2>FAQ</h2>

            <div className='FAQ-content'>
                <h3>What?</h3>
                <p>This website allows users to communicate with OpenAI's GPT-3 and DALL·E API models. Users can create an account to save their search queries and generated images.</p>

                <h3>Why?</h3>
                <p>I created this project to familiarize myself with OpenAI's API and get some practice using Flask.</p>

                <h3>How?</h3>
                <p>Take a look at the source code <a href='https://github.com/gaelzarco/aihub' target='_blank' rel='noreferrer'>here</a>. Contributions are always welcome.</p>
            </div>
        </div>
        </>
    )
}

export default Landing