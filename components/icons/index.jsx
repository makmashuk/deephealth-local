export const ChevronRight = ({
  size = '24',
  stroke = '#000',
  strokeWidth = '2',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66602 4.66659L9.99935 7.99992L6.66602 11.3333"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Star = ({ size = '24', stroke = '#000', strokeWidth = '2' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7542 4.23685L12.7542 4.23688L12.7586 4.24543L14.3478 7.32099C14.6818 8.10997 15.44 8.51288 16.0847 8.64168C16.0973 8.64419 16.1099 8.64638 16.1226 8.64825L19.5258 9.14814C19.5265 9.14825 19.5273 9.14836 19.528 9.14847C20.2151 9.2557 20.477 10.1003 20.0211 10.5703L17.5284 12.8609C17.5208 12.868 17.5133 12.8752 17.5059 12.8826C16.979 13.4088 16.6394 14.1489 16.7979 14.9551L17.3962 18.2421C17.5011 18.9636 16.7996 19.4636 16.1694 19.1521L13.0669 17.5526C13.0456 17.5417 13.0237 17.5317 13.0015 17.5228C12.3216 17.2512 11.6212 17.2512 10.9413 17.5228C10.9191 17.5317 10.8972 17.5417 10.8759 17.5526L7.77338 19.1521C7.14318 19.4636 6.44169 18.9636 6.54658 18.2421L7.14491 14.955C7.2884 14.224 7.02615 13.3486 6.40417 12.8499L4.03114 10.4795C4.02184 10.4702 4.0123 10.4612 4.00252 10.4524C3.74884 10.2243 3.69699 9.92549 3.79569 9.64288C3.89827 9.34912 4.15714 9.10416 4.51507 9.04835L7.92043 8.54812C7.93313 8.54626 7.94578 8.54407 7.95836 8.54155C8.59443 8.41448 9.34514 8.01969 9.68498 7.34078L9.68504 7.34081L9.68929 7.33204L11.1789 4.25703C11.6183 3.53524 12.4525 3.63413 12.7542 4.23685Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ChevronDown = ({
  size = '24',
  stroke = '#000',
  strokeWidth = '2',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3332 6.66669L7.99984 10L4.6665 6.66669"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Home = ({ size = '24', stroke = '#000', strokeWidth = '2' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 22C8.25 22.4142 8.58579 22.75 9 22.75C9.41422 22.75 9.75 22.4142 9.75 22H8.25ZM14.25 22C14.25 22.4142 14.5858 22.75 15 22.75C15.4142 22.75 15.75 22.4142 15.75 22H14.25ZM14.454 12.9904L14.1099 13.6569L14.454 12.9904ZM14.891 13.4333L14.2209 13.7702L14.891 13.4333ZM9.109 13.4333L9.77906 13.7702L9.109 13.4333ZM9.54601 12.9904L9.8901 13.6569L9.54601 12.9904ZM4 8.82667L3.54619 8.22955C3.35958 8.37137 3.25 8.59228 3.25 8.82667H4ZM20 8.82667H20.75C20.75 8.59228 20.6404 8.37137 20.4538 8.22955L20 8.82667ZM10.08 4.20587L10.5338 4.80299L10.08 4.20587ZM11.4909 3.3201L11.2976 2.59544L11.4909 3.3201ZM13.92 4.20587L13.4662 4.80299V4.80299L13.92 4.20587ZM12.5091 3.3201L12.7024 2.59544L12.5091 3.3201ZM5.09202 21.7791L5.43611 21.1127L5.09202 21.7791ZM4.21799 20.8934L4.88805 20.5565L4.21799 20.8934ZM19.782 20.8934L19.112 20.5565L19.782 20.8934ZM18.908 21.7791L18.5639 21.1127L18.908 21.7791ZM1.54619 9.74954C1.21641 10.0002 1.15224 10.4707 1.40288 10.8005C1.65351 11.1303 2.12403 11.1944 2.45381 10.9438L1.54619 9.74954ZM11.04 3.47627L11.4938 4.07339V4.07339L11.04 3.47627ZM12.96 3.47627L12.5062 4.07339V4.07339L12.96 3.47627ZM21.5462 10.9438C21.876 11.1944 22.3465 11.1303 22.5971 10.8005C22.8478 10.4707 22.7836 10.0002 22.4538 9.74955L21.5462 10.9438ZM11.7454 3.03338L11.9387 3.75805V3.75805L11.7454 3.03338ZM12.2546 3.03338L12.0613 3.75805V3.75805L12.2546 3.03338ZM9.75 22V14.5013H8.25V22H9.75ZM10.6 13.63H13.4V12.13H10.6V13.63ZM14.25 14.5013V22H15.75V14.5013H14.25ZM13.4 13.63C13.6926 13.63 13.8663 13.6306 13.9949 13.6412C14.1145 13.6511 14.1272 13.6658 14.1099 13.6569L14.7981 12.324C14.5669 12.2047 14.3326 12.1641 14.1187 12.1464C13.9138 12.1294 13.6675 12.13 13.4 12.13V13.63ZM15.75 14.5013C15.75 14.2298 15.7506 13.9816 15.734 13.7755C15.7167 13.5609 15.6771 13.3272 15.5611 13.0964L14.2209 13.7702C14.2139 13.7561 14.2289 13.7727 14.2388 13.8961C14.2494 14.0279 14.25 14.2054 14.25 14.5013H15.75ZM14.1099 13.6569C14.1562 13.6807 14.1956 13.7198 14.2209 13.7702L15.5611 13.0964C15.3947 12.7654 15.1281 12.4945 14.7981 12.324L14.1099 13.6569ZM9.75 14.5013C9.75 14.2054 9.75057 14.0279 9.7612 13.8961C9.77115 13.7727 9.78614 13.7561 9.77906 13.7702L8.43893 13.0964C8.32286 13.3272 8.28336 13.5609 8.26605 13.7755C8.24944 13.9816 8.25 14.2298 8.25 14.5013H9.75ZM10.6 12.13C10.3325 12.13 10.0862 12.1294 9.88132 12.1464C9.6674 12.1641 9.43311 12.2047 9.20193 12.324L9.8901 13.6569C9.87283 13.6658 9.88551 13.6511 10.0051 13.6412C10.1337 13.6306 10.3074 13.63 10.6 13.63V12.13ZM9.77906 13.7702C9.80439 13.7198 9.84384 13.6807 9.8901 13.6569L9.20193 12.324C8.87187 12.4945 8.60536 12.7654 8.43893 13.0964L9.77906 13.7702ZM19.25 8.82667V18.7573H20.75V8.82667H19.25ZM16.8 21.25H7.2V22.75H16.8V21.25ZM4.75 18.7573V8.82667H3.25V18.7573H4.75ZM4.45382 9.42379L10.5338 4.80299L9.62619 3.60875L3.54619 8.22955L4.45382 9.42379ZM13.4662 4.80299L19.5462 9.42379L20.4538 8.22955L14.3738 3.60875L13.4662 4.80299ZM10.5338 4.80299C11.2762 4.23874 11.4837 4.09823 11.6842 4.04476L11.2976 2.59544C10.7418 2.74368 10.2608 3.12644 9.62619 3.60875L10.5338 4.80299ZM14.3738 3.60875C13.7392 3.12644 13.2582 2.74368 12.7024 2.59544L12.3158 4.04476C12.5163 4.09823 12.7238 4.23874 13.4662 4.80299L14.3738 3.60875ZM11.6842 4.04476C11.8913 3.98952 12.1088 3.98952 12.3158 4.04476L12.7024 2.59544C12.242 2.47263 11.758 2.47263 11.2976 2.59544L11.6842 4.04476ZM7.2 21.25C6.62741 21.25 6.24367 21.2494 5.94829 21.2249C5.66196 21.2012 5.52579 21.159 5.43611 21.1127L4.74794 22.4455C5.08608 22.6201 5.44385 22.6883 5.82453 22.7198C6.19615 22.7506 6.65249 22.75 7.2 22.75V21.25ZM3.25 18.7573C3.25 19.3126 3.24944 19.7736 3.27968 20.1487C3.3106 20.5323 3.37736 20.8911 3.54793 21.2303L4.88805 20.5565C4.84064 20.4622 4.7984 20.3205 4.77483 20.0282C4.75057 19.7274 4.75 19.3371 4.75 18.7573H3.25ZM5.43611 21.1127C5.20168 20.9917 5.00925 20.7975 4.88805 20.5565L3.54793 21.2303C3.81022 21.752 4.22972 22.1779 4.74794 22.4455L5.43611 21.1127ZM19.25 18.7573C19.25 19.3371 19.2494 19.7274 19.2252 20.0282C19.2016 20.3205 19.1594 20.4622 19.112 20.5565L20.4521 21.2303C20.6227 20.8911 20.6894 20.5323 20.7203 20.1487C20.7506 19.7736 20.75 19.3126 20.75 18.7573H19.25ZM16.8 22.75C17.3475 22.75 17.8039 22.7506 18.1755 22.7198C18.5562 22.6883 18.9139 22.6201 19.2521 22.4455L18.5639 21.1127C18.4742 21.159 18.338 21.2012 18.0517 21.2249C17.7563 21.2494 17.3726 21.25 16.8 21.25V22.75ZM19.112 20.5565C18.9908 20.7975 18.7983 20.9917 18.5639 21.1127L19.2521 22.4455C19.7703 22.1779 20.1898 21.752 20.4521 21.2303L19.112 20.5565ZM2.45381 10.9438L11.4938 4.07339L10.5862 2.87914L1.54619 9.74954L2.45381 10.9438ZM12.5062 4.07339L21.5462 10.9438L22.4538 9.74955L13.4138 2.87915L12.5062 4.07339ZM11.4938 4.07339C11.6743 3.93622 11.779 3.85717 11.8613 3.80338C11.9358 3.75469 11.9508 3.75484 11.9387 3.75805L11.5521 2.30872C11.1854 2.40654 10.8765 2.65848 10.5862 2.87914L11.4938 4.07339ZM13.4138 2.87915C13.1235 2.65848 12.8146 2.40654 12.4479 2.30872L12.0613 3.75805C12.0493 3.75484 12.0642 3.75469 12.1387 3.80338C12.221 3.85717 12.3257 3.93622 12.5062 4.07339L13.4138 2.87915ZM11.9387 3.75805C11.979 3.74732 12.0211 3.74732 12.0613 3.75805L12.4479 2.30872C12.1544 2.23043 11.8457 2.23043 11.5521 2.30872L11.9387 3.75805Z"
        fill={stroke}
      />
    </svg>
  )
}

export const Logout = ({ size = '24', stroke = '#000', strokeWidth = '2' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4697 16.4697C15.1768 16.7626 15.1768 17.2374 15.4697 17.5303C15.7626 17.8232 16.2374 17.8232 16.5303 17.5303L15.4697 16.4697ZM21 12L21.5303 12.5303C21.8232 12.2374 21.8232 11.7626 21.5303 11.4697L21 12ZM16.5303 6.46967C16.2374 6.17678 15.7626 6.17678 15.4697 6.46967C15.1768 6.76256 15.1768 7.23744 15.4697 7.53033L16.5303 6.46967ZM9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75V11.25ZM9 3.75C9.41421 3.75 9.75 3.41421 9.75 3C9.75 2.58579 9.41421 2.25 9 2.25V3.75ZM9 21.75C9.41421 21.75 9.75 21.4142 9.75 21C9.75 20.5858 9.41421 20.25 9 20.25V21.75ZM3.32698 19.362L3.99524 19.0215H3.99524L3.32698 19.362ZM4.63803 20.673L4.29754 21.3413H4.29754L4.63803 20.673ZM3.32698 4.63803L3.99524 4.97852L3.99524 4.97852L3.32698 4.63803ZM4.63803 3.32698L4.97852 3.99524H4.97852L4.63803 3.32698ZM16.5303 17.5303L21.5303 12.5303L20.4697 11.4697L15.4697 16.4697L16.5303 17.5303ZM21.5303 11.4697L16.5303 6.46967L15.4697 7.53033L20.4697 12.5303L21.5303 11.4697ZM21 11.25H9V12.75H21V11.25ZM2.25 7.8V16.2H3.75V7.8H2.25ZM9 2.25H7.8V3.75H9V2.25ZM7.8 21.75H9V20.25H7.8V21.75ZM2.25 16.2C2.25 17.0277 2.24942 17.6936 2.29336 18.2315C2.33803 18.7781 2.43238 19.2582 2.65873 19.7025L3.99524 19.0215C3.8946 18.824 3.82546 18.5632 3.78838 18.1093C3.75058 17.6467 3.75 17.0525 3.75 16.2H2.25ZM7.8 20.25C6.94755 20.25 6.35331 20.2494 5.89068 20.2116C5.4368 20.1745 5.17604 20.1054 4.97852 20.0048L4.29754 21.3413C4.74175 21.5676 5.2219 21.662 5.76853 21.7066C6.30641 21.7506 6.9723 21.75 7.8 21.75V20.25ZM2.65873 19.7025C3.01825 20.4081 3.59193 20.9817 4.29754 21.3413L4.97852 20.0048C4.55516 19.789 4.21095 19.4448 3.99524 19.0215L2.65873 19.7025ZM3.75 7.8C3.75 6.94755 3.75058 6.35331 3.78838 5.89068C3.82547 5.4368 3.8946 5.17604 3.99524 4.97852L2.65873 4.29753C2.43239 4.74175 2.33803 5.22189 2.29336 5.76853C2.24942 6.30641 2.25 6.9723 2.25 7.8H3.75ZM7.8 2.25C6.9723 2.25 6.30641 2.24942 5.76853 2.29336C5.2219 2.33803 4.74175 2.43238 4.29754 2.65873L4.97852 3.99524C5.17604 3.8946 5.43681 3.82546 5.89068 3.78838C6.35331 3.75058 6.94755 3.75 7.8 3.75V2.25ZM3.99524 4.97852C4.21095 4.55516 4.55516 4.21095 4.97852 3.99524L4.29754 2.65873C3.59193 3.01825 3.01825 3.59193 2.65873 4.29754L3.99524 4.97852Z"
        fill={stroke}
      />
    </svg>
  )
}

export const Search = ({ size = '24', stroke = '#000', strokeWidth = '2' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20L16.1333 16.1333M18.2222 11.1111C18.2222 15.0385 15.0385 18.2222 11.1111 18.2222C7.18375 18.2222 4 15.0385 4 11.1111C4 7.18375 7.18375 4 11.1111 4C15.0385 4 18.2222 7.18375 18.2222 11.1111Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowNarrowDown = ({
  size = '24',
  stroke = '#000',
  strokeWidth = '2',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4V20M12 20L18 14M12 20L6 14"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowNarrowUp = ({
  size = '24',
  stroke = '#000',
  strokeWidth = '2',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20V4M12 4L6 10M12 4L18 10"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Site = ({ width = '94' }) => {
  const height = Math.ceil((width * 70) / 94)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 94 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9864 14.9086H18.2578V52.2969H29.9864V14.9086Z"
        fill="#F5F5F5"
      />
      <path
        d="M29.9854 14.9086H24.1211V52.1944H29.9854V14.9086Z"
        fill="#EBEBEB"
      />
      <path
        d="M23.7393 11.236H19.5977V14.9062H23.7393V11.236Z"
        fill="#F5F5F5"
      />
      <path d="M23.7375 11.236H22.75V14.9062H23.7375V11.236Z" fill="#EBEBEB" />
      <path d="M17.2812 14.909V14.6938H30.3322V14.909" fill="#E0E0E0" />
      <path
        d="M21.5646 16.5095H20.5723V18.6155H21.5646V16.5095Z"
        fill="#FAFAFA"
      />
      <path
        d="M24.1221 19.4406C24.1221 19.4627 22.8095 19.4823 21.1887 19.4823C19.568 19.4823 18.2578 19.4627 18.2578 19.4406C18.2578 19.4185 19.5704 19.4014 21.1887 19.4014C22.8071 19.4014 24.1221 19.4185 24.1221 19.4406Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 16.5095H26.4902V18.6155H27.4826V16.5095Z"
        fill="#E0E0E0"
      />
      <path
        d="M30.0381 19.4406C30.0381 19.4627 28.7255 19.4823 27.1072 19.4823C25.4889 19.4823 24.1738 19.4627 24.1738 19.4406C24.1738 19.4185 25.4864 19.4014 27.1072 19.4014C28.7279 19.4014 30.0381 19.4185 30.0381 19.4406Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 20.6898H26.4902V22.7958H27.4826V20.6898Z"
        fill="#E0E0E0"
      />
      <path
        d="M30.0381 23.6209C30.0381 23.643 28.7255 23.6626 27.1072 23.6626C25.4889 23.6626 24.1738 23.643 24.1738 23.6209C24.1738 23.5988 25.4864 23.5817 27.1072 23.5817C28.7279 23.5817 30.0381 23.5988 30.0381 23.6209Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 24.9945H26.4902V27.1005H27.4826V24.9945Z"
        fill="#E0E0E0"
      />
      <path
        d="M30.0381 27.928C30.0381 27.9501 28.7255 27.9673 27.1072 27.9673C25.4889 27.9673 24.1738 27.9501 24.1738 27.928C24.1738 27.906 25.4864 27.8888 27.1072 27.8888C28.7279 27.8888 30.0381 27.906 30.0381 27.928Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 29.3018H26.4902V31.4078H27.4826V29.3018Z"
        fill="#E0E0E0"
      />
      <path
        d="M30.0381 32.2353C30.0381 32.2574 28.7255 32.2745 27.1072 32.2745C25.4889 32.2745 24.1738 32.2574 24.1738 32.2353C24.1738 32.2132 25.4864 32.1936 27.1072 32.1936C28.7279 32.1936 30.0381 32.2132 30.0381 32.2353Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 33.4869H26.4902V35.5929H27.4826V33.4869Z"
        fill="#E0E0E0"
      />
      <path
        d="M30.0381 36.4203C30.0381 36.4424 28.7255 36.462 27.1072 36.462C25.4889 36.462 24.1738 36.4424 24.1738 36.4203C24.1738 36.3983 25.4864 36.3811 27.1072 36.3811C28.7279 36.3811 30.0381 36.3958 30.0381 36.4203Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 37.6868H26.4902V39.7928H27.4826V37.6868Z"
        fill="#E0E0E0"
      />
      <path
        d="M27.4826 41.9426H26.4902V44.0486H27.4826V41.9426Z"
        fill="#E0E0E0"
      />
      <path
        d="M30.0381 40.6177C30.0381 40.6398 28.7255 40.6594 27.1072 40.6594C25.4889 40.6594 24.1738 40.6398 24.1738 40.6177C24.1738 40.5957 25.4864 40.5785 27.1072 40.5785C28.7279 40.5785 30.0381 40.5957 30.0381 40.6177Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.5646 20.7533H20.5723V22.8593H21.5646V20.7533Z"
        fill="#FAFAFA"
      />
      <path
        d="M24.1211 23.6843C24.1211 23.7063 22.8085 23.7259 21.1877 23.7259C19.567 23.7259 18.252 23.7063 18.252 23.6843C18.252 23.6622 19.5646 23.645 21.1829 23.645C22.8012 23.645 24.1211 23.6622 24.1211 23.6843Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.5646 24.9971H20.5723V27.1031H21.5646V24.9971Z"
        fill="#FAFAFA"
      />
      <path
        d="M24.1211 27.9305C24.1211 27.9526 22.8085 27.9697 21.1877 27.9697C19.567 27.9697 18.252 27.9526 18.252 27.9305C18.252 27.9084 19.5646 27.8888 21.1829 27.8888C22.8012 27.8888 24.1211 27.9084 24.1211 27.9305Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.5646 29.2407H20.5723V31.3467H21.5646V29.2407Z"
        fill="#FAFAFA"
      />
      <path
        d="M24.1211 32.1743C24.1211 32.1963 22.8085 32.2135 21.1877 32.2135C19.567 32.2135 18.252 32.1963 18.252 32.1743C18.252 32.1522 19.5646 32.1326 21.1829 32.1326C22.8012 32.1326 24.1211 32.1522 24.1211 32.1743Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.5646 33.4869H20.5723V35.5929H21.5646V33.4869Z"
        fill="#FAFAFA"
      />
      <path
        d="M24.1211 36.4203C24.1211 36.4424 22.8085 36.462 21.1877 36.462C19.567 36.462 18.252 36.44 18.252 36.4203C18.252 36.4007 19.5646 36.3811 21.1829 36.3811C22.8012 36.3811 24.1211 36.3958 24.1211 36.4203Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.5646 37.7307H20.5723V39.8367H21.5646V37.7307Z"
        fill="#FAFAFA"
      />
      <path
        d="M24.1221 40.6617C24.1221 40.6837 22.8095 40.7034 21.1887 40.7034C19.568 40.7034 18.2578 40.6837 18.2578 40.6617C18.2578 40.6396 19.5704 40.6224 21.1887 40.6224C22.8071 40.6224 24.1221 40.6396 24.1221 40.6617Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.5646 41.9744H20.5723V44.0804H21.5646V41.9744Z"
        fill="#FAFAFA"
      />
      <path
        d="M72.9395 22.8348H61.2109V60.2232H72.9395V22.8348Z"
        fill="#F5F5F5"
      />
      <path
        d="M72.9444 22.8348H67.0801V60.1207H72.9444V22.8348Z"
        fill="#EBEBEB"
      />
      <path
        d="M66.6963 19.1646H62.5547V22.8348H66.6963V19.1646Z"
        fill="#F5F5F5"
      />
      <path
        d="M66.6965 19.1646H65.709V22.8348H66.6965V19.1646Z"
        fill="#EBEBEB"
      />
      <path d="M60.2363 22.8353V22.6201H73.2848V22.8353" fill="#E0E0E0" />
      <path
        d="M64.5216 24.4358H63.5293V26.5418H64.5216V24.4358Z"
        fill="#FAFAFA"
      />
      <path
        d="M67.0777 27.3692C67.0777 27.3913 65.765 27.4084 64.1443 27.4084C62.5235 27.4084 61.2109 27.3913 61.2109 27.3692C61.2109 27.3471 62.526 27.3275 64.1443 27.3275C65.7626 27.3275 67.0777 27.3471 67.0777 27.3692Z"
        fill="#E0E0E0"
      />
      <path
        d="M70.4357 24.4358H69.4434V26.5418H70.4357V24.4358Z"
        fill="#E0E0E0"
      />
      <path
        d="M72.9952 27.3692C72.9952 27.3913 71.6825 27.4084 70.0618 27.4084C68.441 27.4084 67.1309 27.3913 67.1309 27.3692C67.1309 27.3471 68.4435 27.3275 70.0618 27.3275C71.6801 27.3275 72.9952 27.3471 72.9952 27.3692Z"
        fill="#E0E0E0"
      />
      <path d="M70.4357 28.616H69.4434V30.722H70.4357V28.616Z" fill="#E0E0E0" />
      <path
        d="M72.9952 31.5397C72.9952 31.5618 71.6825 31.579 70.0618 31.579C68.441 31.579 67.1309 31.5618 67.1309 31.5397C67.1309 31.5177 68.4435 31.498 70.0618 31.498C71.6801 31.498 72.9952 31.5397 72.9952 31.5397Z"
        fill="#E0E0E0"
      />
      <path
        d="M70.4357 32.9232H69.4434V35.0292H70.4357V32.9232Z"
        fill="#E0E0E0"
      />
      <path
        d="M72.9952 35.8567C72.9952 35.8788 71.6825 35.896 70.0618 35.896C68.441 35.896 67.1309 35.8788 67.1309 35.8567C67.1309 35.8347 68.4435 35.8151 70.0618 35.8151C71.6801 35.8151 72.9952 35.8347 72.9952 35.8567Z"
        fill="#E0E0E0"
      />
      <path
        d="M70.4357 37.2303H69.4434V39.3364H70.4357V37.2303Z"
        fill="#E0E0E0"
      />
      <path
        d="M72.9952 40.1614C72.9952 40.1859 71.6825 40.2031 70.0618 40.2031C68.441 40.2031 67.1309 40.1859 67.1309 40.1614C67.1309 40.1369 68.4435 40.1222 70.0618 40.1222C71.6801 40.1222 72.9952 40.1394 72.9952 40.1614Z"
        fill="#E0E0E0"
      />
      <path
        d="M70.4357 41.4131H69.4434V43.5191H70.4357V41.4131Z"
        fill="#E0E0E0"
      />
      <path
        d="M72.9952 44.3466C72.9952 44.3687 71.6825 44.3859 70.0618 44.3859C68.441 44.3859 67.1309 44.3687 67.1309 44.3466C67.1309 44.3245 68.4435 44.3049 70.0618 44.3049C71.6801 44.3049 72.9952 44.3245 72.9952 44.3466Z"
        fill="#E0E0E0"
      />
      <path
        d="M70.4357 45.6129H69.4434V47.7189H70.4357V45.6129Z"
        fill="#E0E0E0"
      />
      <path
        d="M70.4357 49.8688H69.4434V51.9748H70.4357V49.8688Z"
        fill="#E0E0E0"
      />
      <path
        d="M72.9952 48.5464C72.9952 48.5685 71.6825 48.5857 70.0618 48.5857C68.441 48.5857 67.1309 48.5685 67.1309 48.5464C67.1309 48.5244 68.4435 48.5072 70.0618 48.5072C71.6801 48.5072 72.9952 48.5244 72.9952 48.5464Z"
        fill="#E0E0E0"
      />
      <path
        d="M64.5216 28.6794H63.5293V30.7855H64.5216V28.6794Z"
        fill="#FAFAFA"
      />
      <path
        d="M67.0777 31.613C67.0777 31.635 65.765 31.6522 64.1443 31.6522C62.5235 31.6522 61.2109 31.635 61.2109 31.613C61.2109 31.5909 62.526 31.5737 64.1443 31.5737C65.7626 31.5737 67.0777 31.5909 67.0777 31.613Z"
        fill="#E0E0E0"
      />
      <path
        d="M64.5216 32.9257H63.5293V35.0317H64.5216V32.9257Z"
        fill="#FAFAFA"
      />
      <path
        d="M67.0777 35.8567C67.0777 35.8788 65.765 35.8984 64.1443 35.8984C62.5235 35.8984 61.2109 35.8788 61.2109 35.8567C61.2109 35.8347 62.526 35.8175 64.1443 35.8175C65.7626 35.8175 67.0777 35.8347 67.0777 35.8567Z"
        fill="#E0E0E0"
      />
      <path
        d="M64.5216 37.1694H63.5293V39.2754H64.5216V37.1694Z"
        fill="#FAFAFA"
      />
      <path
        d="M67.0777 40.1005C67.0777 40.125 65.765 40.1422 64.1443 40.1422C62.5235 40.1422 61.2109 40.125 61.2109 40.1005C61.2109 40.076 62.526 40.0613 64.1443 40.0613C65.7626 40.0613 67.0777 40.0809 67.0777 40.1005Z"
        fill="#E0E0E0"
      />
      <path
        d="M64.5216 41.4131H63.5293V43.5191H64.5216V41.4131Z"
        fill="#FAFAFA"
      />
      <path
        d="M67.0777 44.3466C67.0777 44.3687 65.765 44.3859 64.1443 44.3859C62.5235 44.3859 61.2109 44.3687 61.2109 44.3466C61.2109 44.3245 62.526 44.3049 64.1443 44.3049C65.7626 44.3049 67.0777 44.3245 67.0777 44.3466Z"
        fill="#E0E0E0"
      />
      <path
        d="M64.5216 45.6592H63.5293V47.7652H64.5216V45.6592Z"
        fill="#FAFAFA"
      />
      <path
        d="M67.0777 48.5903C67.0777 48.6123 65.765 48.6295 64.1443 48.6295C62.5235 48.6295 61.2109 48.6123 61.2109 48.5903C61.2109 48.5682 62.526 48.551 64.1443 48.551C65.7626 48.551 67.0777 48.5682 67.0777 48.5903Z"
        fill="#E0E0E0"
      />
      <path
        d="M64.5216 49.9031H63.5293V52.0091H64.5216V49.9031Z"
        fill="#FAFAFA"
      />
      <path
        d="M87.5885 37.3427H68.5957V62.5366H87.5885V37.3427Z"
        fill="#EBEBEB"
      />
      <path
        d="M87.5861 37.3427H78.6816V62.5366H87.5861V37.3427Z"
        fill="#E0E0E0"
      />
      <path
        d="M74.2843 40.7543H72.5762V44.9272H74.2843V40.7543Z"
        fill="#F5F5F5"
      />
      <path
        d="M74.2843 57.0848H72.5762V61.2578H74.2843V57.0848Z"
        fill="#F5F5F5"
      />
      <path
        d="M78.6817 46.5651C78.6817 46.6117 76.4253 46.6484 73.6399 46.6484C70.8546 46.6484 68.5957 46.6117 68.5957 46.5651C68.5957 46.5185 70.8521 46.4792 73.6399 46.4792C76.4277 46.4792 78.6817 46.516 78.6817 46.5651Z"
        fill="#F5F5F5"
      />
      <path
        d="M74.2843 48.9806H72.5762V53.1536H74.2843V48.9806Z"
        fill="#F5F5F5"
      />
      <path
        d="M78.6817 54.7914C78.6817 54.838 76.4253 54.8772 73.6399 54.8772C70.8546 54.8772 68.5957 54.838 68.5957 54.7914C68.5957 54.7448 70.8521 54.7056 73.6399 54.7056C76.4277 54.7056 78.6817 54.7448 78.6817 54.7914Z"
        fill="#F5F5F5"
      />
      <path
        d="M82.2823 40.7543H80.5742V44.9272H82.2823V40.7543Z"
        fill="#F5F5F5"
      />
      <path
        d="M85.9874 40.7543H84.2793V44.9272H85.9874V40.7543Z"
        fill="#F5F5F5"
      />
      <path
        d="M82.2823 48.6707H80.5742V52.8436H82.2823V48.6707Z"
        fill="#F5F5F5"
      />
      <path
        d="M85.9874 48.6707H84.2793V52.8436H85.9874V48.6707Z"
        fill="#F5F5F5"
      />
      <path
        d="M82.2823 56.5895H80.5742V60.7624H82.2823V56.5895Z"
        fill="#F5F5F5"
      />
      <path
        d="M85.9874 56.5895H84.2793V60.7624H85.9874V56.5895Z"
        fill="#F5F5F5"
      />
      <path
        d="M89.0146 36.4641H67.166V37.3719H89.0146V36.4641Z"
        fill="#E0E0E0"
      />
      <path
        d="M87.7191 37.4602C87.7191 37.5068 83.4756 37.5436 78.2397 37.5436C73.0038 37.5436 68.7578 37.5068 68.7578 37.4602C68.7578 37.4136 73.0038 37.3744 78.2397 37.3744C83.4756 37.3744 87.7191 37.4112 87.7191 37.4602Z"
        fill="#EBEBEB"
      />
      <path
        d="M25.6365 63.0393H8.376L8.30078 35.6027H25.5613L25.6365 63.0393Z"
        fill="#EBEBEB"
      />
      <path
        d="M25.5599 35.6027H16.9297V63.0393H25.5599V35.6027Z"
        fill="#E0E0E0"
      />
      <path
        d="M16.3643 30.2023H10.2695V35.6027H16.3643V30.2023Z"
        fill="#EBEBEB"
      />
      <path
        d="M16.3654 30.2023H14.9121V35.6027H16.3654V30.2023Z"
        fill="#E0E0E0"
      />
      <path
        d="M26.0652 35.2878H6.86133V35.6033H26.0652V35.2878Z"
        fill="#E0E0E0"
      />
      <path d="M13.1676 37.9601H11.707V41.0593H13.1676V37.9601Z" fill="white" />
      <path
        d="M16.932 42.2772C16.932 42.3091 14.991 42.3361 12.6157 42.3361C10.2404 42.3361 8.30664 42.3067 8.30664 42.2772C8.30664 42.2478 10.2477 42.2184 12.6205 42.2184C14.9934 42.2184 16.932 42.2405 16.932 42.2772Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.8747 37.9601H20.4141V41.0593H21.8747V37.9601Z"
        fill="#F5F5F5"
      />
      <path
        d="M25.6381 42.2772C25.6381 42.3091 23.697 42.3361 21.3217 42.3361C18.9464 42.3361 17.0078 42.3091 17.0078 42.2772C17.0078 42.2454 18.9488 42.2184 21.3217 42.2184C23.6946 42.2184 25.6381 42.2405 25.6381 42.2772Z"
        fill="#EBEBEB"
      />
      <path
        d="M21.8747 44.1122H20.4141V47.2114H21.8747V44.1122Z"
        fill="#F5F5F5"
      />
      <path
        d="M25.6381 48.4269C25.6381 48.4588 23.697 48.4858 21.3217 48.4858C18.9464 48.4858 17.0078 48.4588 17.0078 48.4269C17.0078 48.395 18.9488 48.3656 21.3217 48.3656C23.6946 48.3656 25.6381 48.3926 25.6381 48.4269Z"
        fill="#EBEBEB"
      />
      <path
        d="M21.8747 50.4497H20.4141V53.5489H21.8747V50.4497Z"
        fill="#F5F5F5"
      />
      <path
        d="M25.6381 54.7644C25.6381 54.7963 23.697 54.8233 21.3217 54.8233C18.9464 54.8233 17.0078 54.7963 17.0078 54.7644C17.0078 54.7326 18.9488 54.7031 21.3217 54.7031C23.6946 54.7031 25.6381 54.7227 25.6381 54.7644Z"
        fill="#EBEBEB"
      />
      <path
        d="M21.8747 56.7848H20.4141V59.884H21.8747V56.7848Z"
        fill="#F5F5F5"
      />
      <path
        d="M25.6381 61.102C25.6381 61.1338 23.697 61.1608 21.3217 61.1608C18.9464 61.1608 17.0078 61.1338 17.0078 61.102C17.0078 61.0701 18.9488 61.0406 21.3217 61.0406C23.6946 61.0406 25.6381 61.0676 25.6381 61.102Z"
        fill="#EBEBEB"
      />
      <path d="M13.1676 44.2048H11.707V47.3041H13.1676V44.2048Z" fill="white" />
      <path
        d="M16.932 48.5197C16.932 48.554 14.991 48.5785 12.6157 48.5785C10.2404 48.5785 8.30664 48.554 8.30664 48.5197C8.30664 48.4853 10.2477 48.4608 12.6205 48.4608C14.9934 48.4608 16.932 48.4878 16.932 48.5197Z"
        fill="#E0E0E0"
      />
      <path d="M13.1676 50.4497H11.707V53.5489H13.1676V50.4497Z" fill="white" />
      <path
        d="M16.932 54.7644C16.932 54.7987 14.991 54.8257 12.6157 54.8257C10.2404 54.8257 8.30664 54.7987 8.30664 54.7644C8.30664 54.7301 10.2477 54.7056 12.6205 54.7056C14.9934 54.7056 16.932 54.7227 16.932 54.7644Z"
        fill="#E0E0E0"
      />
      <path d="M13.1676 56.6969H11.707V59.7961H13.1676V56.6969Z" fill="white" />
      <path
        d="M16.932 61.0116C16.932 61.0435 14.991 61.0705 12.6157 61.0705C10.2404 61.0705 8.30664 61.0435 8.30664 61.0116C8.30664 60.9797 10.2477 60.9528 12.6205 60.9528C14.9934 60.9528 16.932 60.9773 16.932 61.0116Z"
        fill="#E0E0E0"
      />
      <path
        d="M93.993 30.0582C94.0852 29.3895 93.1486 28.838 92.445 28.7843C92.1087 28.7979 91.7721 28.7692 91.4429 28.6989C90.7563 28.4549 90.4724 27.5617 89.8101 27.2786C89.3078 27.0639 88.7304 27.2542 88.2427 27.5007C87.755 27.7472 87.2722 28.0571 86.7311 28.0913C86.2459 28.123 85.7436 27.9449 85.3312 28.1791C85.023 28.3524 84.8605 28.7087 84.5766 28.9112C84.2805 29.0936 83.9387 29.1868 83.5915 29.1797C83.2453 29.17 82.9004 29.2263 82.5749 29.3456C82.4132 29.4084 82.2761 29.5223 82.1842 29.6701C82.0923 29.818 82.0506 29.9918 82.0654 30.1656L93.993 30.0582Z"
        fill="#F5F5F5"
      />
      <path
        d="M14.9053 25.4875C15.0194 24.6553 13.8523 23.9696 12.9643 23.8988C12.547 23.8647 12.1127 23.9305 11.7148 23.7914C10.8559 23.4888 10.5017 22.3736 9.67673 22.0173C9.04833 21.7513 8.32773 21.988 7.72116 22.2955C7.11459 22.603 6.50802 22.991 5.83352 23.0276C5.24394 23.0642 4.6034 22.8446 4.08661 23.135C3.70083 23.3497 3.49945 23.7963 3.14522 24.0599C2.77652 24.29 2.34882 24.4062 1.9151 24.3942C1.48285 24.3846 1.05258 24.4558 0.646157 24.6041C0.255528 24.7847 -0.0695927 25.202 0.0129005 25.6266L14.9053 25.4875Z"
        fill="#F5F5F5"
      />
      <path
        d="M58.3549 46.7478H35.8849L35.787 11.0303H58.257L58.3549 46.7478Z"
        fill="#C9D0E4"
      />
      <path
        d="M58.2553 11.0303H47.0203V46.7478H58.2553V11.0303Z"
        fill="#A8B1CE"
      />
      <path
        d="M47.0899 0.00789905C33.0175 0.337344 21.5388 11.8752 21.204 26.0292C21.0559 31.8393 22.8075 37.5378 26.19 42.25L26.4496 42.6039L26.486 42.6551L45.2653 68.347C45.6485 68.871 46.1513 69.2947 46.7314 69.5822C47.3115 69.8698 47.9519 70.0128 48.5985 69.9991C49.2451 69.9855 49.879 69.8156 50.4466 69.5039C51.0142 69.1921 51.4989 68.7476 51.8599 68.2079L68.8438 42.8284C72.0562 37.8989 74.2592 32.7498 74.2592 26.6783C74.2593 23.1202 73.5517 19.5981 72.1782 16.3192C70.8046 13.0404 68.7928 10.0709 66.2612 7.5858C63.7295 5.10065 60.7292 3.14997 57.4368 1.84856C54.1443 0.547157 50.6264 -0.0786762 47.0899 0.00789905ZM47.7207 46.0789C43.7765 46.0794 39.9208 44.9035 36.6411 42.6999C33.3614 40.4963 30.8051 37.3639 29.2954 33.699C27.7857 30.0341 27.3905 26.0012 28.1596 22.1104C28.9288 18.2195 30.8279 14.6455 33.6166 11.8402C36.4054 9.03492 39.9586 7.12442 43.827 6.35032C47.6953 5.57621 51.705 5.97327 55.349 7.49127C58.993 9.00927 62.1075 11.58 64.2989 14.8785C66.4902 18.1769 67.6598 22.0548 67.6598 26.0218C67.6598 31.3409 65.5591 36.4421 61.8199 40.2035C58.0807 43.9648 53.0091 46.0783 47.7207 46.0789Z"
        fill="#5475CA"
      />
      <path
        d="M46.0899 0.00789905C32.0175 0.337344 20.5388 11.8752 20.204 26.0292C20.0559 31.8393 21.8075 37.5378 25.19 42.25L25.4496 42.6039L25.486 42.6551L44.2653 68.347C44.6485 68.871 45.1513 69.2947 45.7314 69.5822C46.3115 69.8698 46.9519 70.0128 47.5985 69.9991C48.2451 69.9855 48.879 69.8156 49.4466 69.5039C50.0142 69.1921 50.4989 68.7476 50.8599 68.2079L67.8438 42.8284C71.0562 37.8989 73.2592 32.7498 73.2592 26.6783C73.2593 23.1202 72.5517 19.5981 71.1782 16.3192C69.8046 13.0404 67.7928 10.0709 65.2612 7.5858C62.7295 5.10065 59.7292 3.14997 56.4368 1.84856C53.1443 0.547157 49.6264 -0.0786762 46.0899 0.00789905ZM46.7207 46.0789C42.7765 46.0794 38.9208 44.9035 35.6411 42.6999C32.3614 40.4963 29.8051 37.3639 28.2954 33.699C26.7857 30.0341 26.3905 26.0012 27.1596 22.1104C27.9288 18.2195 29.8279 14.6455 32.6166 11.8402C35.4054 9.03492 38.9586 7.12442 42.827 6.35032C46.6953 5.57621 50.705 5.97327 54.349 7.49127C57.993 9.00927 61.1075 11.58 63.2989 14.8785C65.4902 18.1769 66.6598 22.0548 66.6598 26.0218C66.6598 31.3409 64.5591 36.4421 60.8199 40.2035C57.0807 43.9648 52.0091 46.0783 46.7207 46.0789Z"
        fill="#6992FC"
      />
      <path d="M46.2842 4H38.3499V11.0304H46.2842V4Z" fill="#C9D0E4" />
      <path d="M46.2857 4H44.3937V11.0304H46.2857V4Z" fill="#A8B1CE" />
      <path d="M60 10.6205H35V11.0311H60V10.6205Z" fill="#A8B1CE" />
      <path
        d="M42.1228 14.0992H40.2213V18.1339H42.1228V14.0992Z"
        fill="white"
      />
      <path
        d="M53.4576 14.0992H51.5562V18.1339H53.4576V14.0992Z"
        fill="#D4DBF2"
      />
      <path
        d="M53.4576 22.1082H51.5562V26.1428H53.4576V22.1082Z"
        fill="#D4DBF2"
      />
      <path
        d="M53.4576 30.3584H51.5562V34.393H53.4576V30.3584Z"
        fill="#D4DBF2"
      />
      <path
        d="M53.4576 38.6056H51.5562V42.6402H53.4576V38.6056Z"
        fill="#D4DBF2"
      />
      <path
        d="M42.1228 22.2288H40.2213V26.2634H42.1228V22.2288Z"
        fill="white"
      />
      <path d="M42.1228 30.3584H40.2213V34.393H42.1228V30.3584Z" fill="white" />
      <path
        d="M42.1228 38.4912H40.2213V42.5258H42.1228V38.4912Z"
        fill="white"
      />
    </svg>
  )
}

export const TLBackButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="8" fill="#6992FC" />
      <path
        d="M15.5 12H8.5M8.5 12L12 15.5M8.5 12L12 8.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const CloseWindow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="8" fill="#6992FC" />
      <path
        d="M15.0052 10.0555C15.2981 9.7626 15.2981 9.28773 15.0052 8.99484C14.7123 8.70194 14.2374 8.70194 13.9445 8.99484L15.0052 10.0555ZM8.9948 13.9446C8.7019 14.2375 8.7019 14.7124 8.9948 15.0052C9.28769 15.2981 9.76256 15.2981 10.0555 15.0052L8.9948 13.9446ZM10.0555 8.99484C9.76256 8.70194 9.28769 8.70194 8.9948 8.99484C8.7019 9.28773 8.7019 9.7626 8.9948 10.0555L10.0555 8.99484ZM13.9445 15.0052C14.2374 15.2981 14.7123 15.2981 15.0052 15.0052C15.2981 14.7124 15.2981 14.2375 15.0052 13.9446L13.9445 15.0052ZM13.9445 8.99484L8.9948 13.9446L10.0555 15.0052L15.0052 10.0555L13.9445 8.99484ZM8.9948 10.0555L13.9445 15.0052L15.0052 13.9446L10.0555 8.99484L8.9948 10.0555Z"
        fill="white"
      />
    </svg>
  )
}

export const Trash = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5645 4.66667V4.03333C11.5645 3.14658 11.5645 2.70321 11.3929 2.36452C11.242 2.06659 11.0012 1.82437 10.705 1.67257C10.3683 1.5 9.92754 1.5 9.04597 1.5H7.78671C6.90515 1.5 6.46437 1.5 6.12765 1.67257C5.83147 1.82437 5.59067 2.06659 5.43976 2.36452C5.26819 2.70321 5.26819 3.14658 5.26819 4.03333V4.66667M6.84227 9.02083V12.9792M9.99042 9.02083V12.9792M1.33301 4.66667H15.4997M13.9256 4.66667V13.5333C13.9256 14.8635 13.9256 15.5285 13.6683 16.0366C13.4419 16.4834 13.0807 16.8468 12.6364 17.0745C12.1313 17.3333 11.4702 17.3333 10.1478 17.3333H6.68486C5.36251 17.3333 4.70134 17.3333 4.19627 17.0745C3.752 16.8468 3.3908 16.4834 3.16443 16.0366C2.90708 15.5285 2.90708 14.8635 2.90708 13.5333V4.66667"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Close = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.83016 2.23055C9.12305 1.93766 9.12305 1.46279 8.83016 1.16989C8.53727 0.876999 8.06239 0.876999 7.7695 1.16989L8.83016 2.23055ZM1.16984 7.76955C0.876946 8.06245 0.876945 8.53732 1.16984 8.83022C1.46273 9.12311 1.93761 9.12311 2.2305 8.83022L1.16984 7.76955ZM2.2305 1.16989C1.93761 0.876999 1.46273 0.876999 1.16984 1.16989C0.876945 1.46279 0.876945 1.93766 1.16984 2.23055L2.2305 1.16989ZM7.7695 8.83022C8.06239 9.12311 8.53727 9.12311 8.83016 8.83022C9.12305 8.53732 9.12305 8.06245 8.83016 7.76955L7.7695 8.83022ZM7.7695 1.16989L1.16984 7.76955L2.2305 8.83022L8.83016 2.23055L7.7695 1.16989ZM1.16984 2.23055L7.7695 8.83022L8.83016 7.76955L2.2305 1.16989L1.16984 2.23055Z"
        fill="#44495B"
      />
    </svg>
  )
}
