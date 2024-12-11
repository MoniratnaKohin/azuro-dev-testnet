import cx from 'classnames'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <svg
        className="h-full"
        width="71"
        height="16"
        viewBox="0 0 71 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.051 11.2c-.535 0-1.048-.21-1.426-.586a1.991 1.991 0 0 1-.59-1.414V0H0v9.2c0 3.314 2.71 6 6.051 6h4.438v-4H6.05ZM18.153 4a3.658 3.658 0 0 0-2.567 1.054A3.6 3.6 0 0 0 14.523 7.6a3.573 3.573 0 0 0 1.063 2.546 3.635 3.635 0 0 0 2.567 1.054c.963 0 1.887-.38 2.568-1.054A3.585 3.585 0 0 0 21.784 7.6c0-.955-.382-1.87-1.063-2.546A3.646 3.646 0 0 0 18.153 4ZM10.49 7.6c0-4.197 3.431-7.6 7.664-7.6s7.665 3.403 7.665 7.6c0 4.197-3.432 7.6-7.665 7.6-4.233 0-7.664-3.403-7.664-7.6ZM61.722 4c-.963 0-1.887.38-2.568 1.054A3.585 3.585 0 0 0 58.091 7.6c0 .955.382 1.87 1.063 2.546a3.647 3.647 0 0 0 2.568 1.054c.962 0 1.886-.38 2.567-1.054A3.585 3.585 0 0 0 65.352 7.6c0-.955-.382-1.87-1.063-2.546A3.646 3.646 0 0 0 61.722 4Zm-7.665 3.6c0-4.197 3.432-7.6 7.665-7.6 4.233 0 7.664 3.403 7.664 7.6 0 4.197-3.431 7.6-7.664 7.6s-7.665-3.403-7.665-7.6ZM34.29 0c-4.233 0-7.665 3.403-7.665 7.6 0 4.197 3.432 7.6 7.665 7.6h11.295c.794 0 1.56-.12 2.281-.342L50.023 16l2.327-4.322c.59-1.1.9-2.327.9-3.574V7.6c0-4.197-3.432-7.6-7.665-7.6H34.29Zm14.926 7.6c0-.955-.383-1.87-1.063-2.546A3.646 3.646 0 0 0 45.585 4H34.29a3.658 3.658 0 0 0-2.567 1.054A3.598 3.598 0 0 0 30.659 7.6a3.573 3.573 0 0 0 1.064 2.546A3.634 3.634 0 0 0 34.29 11.2h11.295c.958 0 1.877-.375 2.558-1.044a3.585 3.585 0 0 0 1.073-2.528V7.6Z"
          fill="currentColor"
        />
      </svg>
    </Href>
  )
}

export default Logo