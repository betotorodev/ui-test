export function ThumbUp(props) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.396 7.107C5.333 4.41 6.02 3.64 5.906 2.077 5.791.515 6.12.085 6.9.01c.781-.077 2.247.325 2.505 2.882.11 1.107-.725 3.285-.725 3.285l5.844.003c.828 0 1.476.335 1.476 1.402 0 1-1.169 1.3-1.169 1.3.464.198.758.638.748 1.118.003.678-.574 1.231-1.291 1.238.49.186.77.677.667 1.167-.09.587-.57 1.052-1.189 1.15.405.271.573.762.411 1.206-.262.586-.955 1.232-2.51 1.232H4.4a1.038 1.038 0 01-1.046-.53V7.434c-.003-.11.011-.22.042-.327zM0 6.591h2.843v9.4H0v-9.4z'
        fill='#FFF'
        fillRule='evenodd'
      />
    </svg>
  )
}
