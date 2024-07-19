import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending request:', { text, length });
            const response = await axios.post('http://localhost:3000/summarize', { text, length });
            console.log('Received response:', response.data);
            setSummary(response.data.summary);
        } catch (error) {
            console.error('Error summarizing text:', error);
        }
    };

    return (
        <>
        <div className="navbar">
            <p>AI TEXT SUMMARIZER</p>
        </div>
        <div className='container'>
            <div className="first">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to summarize">
                </textarea><br />
                <button className='btn' type="submit">Summarize</button>
            </form>
            
            </div>

            <div className="second">
                <br />
            <textarea value={summary} readOnly placeholder='Output will be here.........'>
                {summary}
            </textarea>
            </div>

        </div>
        <div className="heading">
            <h2>Text Summarizer</h2>
            <p>Text Summarizer is an AI summarizing tool that allows you to summarize long texts, paragraphs, 
                and articles with their main concept in one click.
                Our AI summarizer analyzes the entire document and summarizes the
                text by picking up the most important concepts.</p>
            <br />
            <h2>What is Text Summarization?</h2>
            <p>How to use our AI summary generator?
                 To use this AI summarizing tool, follow the below guideline:
                Write or paste the text in the above input box.
                Click the Summarize button.
                 This AI summary tool will take all the important concepts,
                condense the input text and generates an accurate summarize text
                report within a fraction of a second.</p>
        </div>
        </>
    );
};

export default App;
