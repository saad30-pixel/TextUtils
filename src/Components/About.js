import React from 'react'
// , { useState }

export default function About(props) {

    // const [myStyle, setMyStyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
      color: props.mode ==='dark'?'white':'rgb(17 39 65)',
      backgroundColor: props.mode ==='dark'?'rgb(37 60 87)':'white',
      border: '1px solid',
      borderColor: props.mode ==='dark'?'white':'rgb(17 39 65)'
    }
  
  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'rgb(17 39 65)'}}>
        <h2>About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or typing time.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excel document, pdf document, essays, etc.</div>
    </div>
  </div>
</div>
</div>
  )
}
