import React, { useEffect, useState } from 'react'


const FaqItem = ({ faq, index }) => {
  const [isshow, setisshow] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setisshow(true);
    }
  
     
  }, []);

  const handleClick = () => {
    setisshow((isshow) => !isshow);
  }
  
  return (
    <div className='faq-box'>
      <div className='que' onClick={handleClick}>
        <button className={isshow ? 'arrow' : ''}>{'>'}</button>
        <div>{faq.question}</div>        
      </div>
      {
      isshow && <div className='ans'>{faq.answer}</div>
      }
    </div>
  )
}

export default FaqItem
