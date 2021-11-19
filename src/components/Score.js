import React from 'react'

const Score = (score,questions) => {
  return (
    <div>
      You Scored {score} / {questions.length};
    </div>
  )
}

export default Score
