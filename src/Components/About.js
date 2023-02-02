import React from 'react'

export default function About(props) {

    return (
        <div className="container" style= {{marginBottom:"50px", color:`${props.mode==='dark'?'white':'black'}`, marginTop:"40px"}}>
            <h1 style={{marginLeft:"10px"}}>About US</h1>
            <div className="container my-4 code">
                <h2><strong>Analyze your text</strong></h2>
                <p>Textutils gives you a way to analyze your text quickly and efficiently.</p>
                <h2><strong>Free to use</strong></h2>
                <p>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. </p>
                <h2><strong>Browser Compatible</strong></h2>
                <p>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
            </div>
        </div>
    )
}
