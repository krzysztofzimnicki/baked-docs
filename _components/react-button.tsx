import React from 'react'

ReactButton.defaultProps = {
  props: 'Test Prop'
}

export default function ReactButton(props: any) {

  return (
    <button className='bg-red-500 rounded-xl p-4' onClick={props}>
      <p>Click me!</p>
    </button>
  )

}
