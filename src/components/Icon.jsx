import { Fragment } from "react";
const Icon = ({
  icon = arr_icon[Object.keys(arr_icon)[0]],
  size = 24,
  viewBox = `0 0 ${size} ${size}`,
  color = "#000000",
  fill = color,
  style,
  className = "",
}) => {
  const arr_icon = {
    account_circle: [
      <path
        d="M8.08014 8.92648C8.03348 8.91981 7.97348 8.91981 7.92014 8.92648C6.74681 8.88648 5.81348 7.92648 5.81348 6.74648C5.81348 5.53981 6.78681 4.55981 8.00014 4.55981C9.20681 4.55981 10.1868 5.53981 10.1868 6.74648C10.1801 7.92648 9.25348 8.88648 8.08014 8.92648Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
      <path
        d="M12.4935 13.3265C11.3068 14.4132 9.7335 15.0732 8.00017 15.0732C6.26684 15.0732 4.6935 14.4132 3.50684 13.3265C3.5735 12.6999 3.9735 12.0865 4.68684 11.6065C6.5135 10.3932 9.50017 10.3932 11.3135 11.6065C12.0268 12.0865 12.4268 12.6999 12.4935 13.3265Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
      <path
        d="M8.00016 15.0732C11.6821 15.0732 14.6668 12.0884 14.6668 8.40654C14.6668 4.72464 11.6821 1.73987 8.00016 1.73987C4.31826 1.73987 1.3335 4.72464 1.3335 8.40654C1.3335 12.0884 4.31826 15.0732 8.00016 15.0732Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ],
    arrow_back: [
      <path
        d="M11.175 19.4719L4.225 12.5219C4.14167 12.4385 4.08333 12.3552 4.05 12.2719C4.01667 12.1885 4 12.0969 4 11.9969C4 11.8969 4.01667 11.8052 4.05 11.7219C4.08333 11.6385 4.14167 11.5552 4.225 11.4719L11.2 4.49688C11.3333 4.36354 11.5 4.29688 11.7 4.29688C11.9 4.29688 12.075 4.37188 12.225 4.52188C12.375 4.67188 12.45 4.84688 12.45 5.04688C12.45 5.24687 12.375 5.42188 12.225 5.57187L6.55 11.2469L18.95 11.2469C19.1667 11.2469 19.3458 11.3177 19.4875 11.4594C19.6292 11.601 19.7 11.7802 19.7 11.9969C19.7 12.2135 19.6292 12.3927 19.4875 12.5344C19.3458 12.676 19.1667 12.7469 18.95 12.7469L6.55 12.7469L12.25 18.4469C12.3833 18.5802 12.45 18.7469 12.45 18.9469C12.45 19.1469 12.375 19.3219 12.225 19.4719C12.075 19.6219 11.9 19.6969 11.7 19.6969C11.5 19.6969 11.325 19.6219 11.175 19.4719Z"
        fill={color}
      />,
    ],
    chevron_left: [
      <path
        d="M8.988 11.9985C8.988 11.887 9.00722 11.7827 9.04565 11.6856C9.08411 11.5885 9.1476 11.4941 9.23615 11.4024L14.055 6.45239C14.2052 6.29914 14.4021 6.22669 14.6459 6.23502C14.8897 6.24335 15.0872 6.32414 15.2383 6.47739C15.4219 6.66399 15.5015 6.86708 15.4772 7.08664C15.4528 7.30621 15.3661 7.50096 15.2169 7.67089L11.0033 11.9991L15.2169 16.3274C15.3661 16.4827 15.4488 16.6862 15.465 16.9381C15.4812 17.19 15.3977 17.3926 15.2144 17.5459C15.0635 17.7325 14.8699 17.8133 14.6335 17.7883C14.397 17.7633 14.1961 17.6741 14.0307 17.5209L9.23615 12.5959C9.1476 12.5039 9.08411 12.4092 9.04565 12.3118C9.00722 12.2144 8.988 12.11 8.988 11.9985Z"
        fill={color}
      />,
    ],
    chevron_right: [
      <path
        d="M15.4026 12.0015C15.4026 12.113 15.3834 12.2173 15.345 12.3144C15.3065 12.4115 15.243 12.5059 15.1545 12.5976L10.3356 17.5476C10.1854 17.7009 9.98848 17.7733 9.74471 17.765C9.50093 17.7566 9.30347 17.6759 9.15233 17.5226C8.96874 17.336 8.88912 17.1329 8.91345 16.9134C8.93779 16.6938 9.02455 16.499 9.17375 16.3291L13.3874 12.0009L9.17374 7.6726C9.02455 7.51734 8.94185 7.31376 8.92562 7.06186C8.9094 6.80996 8.99294 6.60737 9.17625 6.45411C9.32711 6.26752 9.52075 6.18673 9.75717 6.21173C9.9936 6.23673 10.1945 6.32586 10.3599 6.4791L15.1545 11.4041C15.243 11.4961 15.3065 11.5908 15.345 11.6882C15.3834 11.7856 15.4026 11.89 15.4026 12.0015Z"
        fill={color}
      />,
    ],
    close: [
      <path
        d="M11.9996 13.5929L7.19526 18.3972C6.98403 18.6084 6.71881 18.7141 6.39961 18.7141C6.08041 18.7141 5.81519 18.6084 5.60396 18.3972C5.39273 18.186 5.28711 17.9208 5.28711 17.6016C5.28711 17.2824 5.39273 17.0171 5.60396 16.8059L10.4083 12.0016L5.60396 7.19721C5.39273 6.98598 5.28711 6.72076 5.28711 6.40156C5.28711 6.08236 5.39273 5.81715 5.60396 5.60591C5.81519 5.39468 6.08041 5.28906 6.39961 5.28906C6.71881 5.28906 6.98403 5.39468 7.19526 5.60591L11.9996 10.4103L16.804 5.60591C17.0152 5.39468 17.2804 5.28906 17.5996 5.28906C17.9188 5.28906 18.184 5.39468 18.3953 5.60591C18.6065 5.81715 18.7121 6.08236 18.7121 6.40156C18.7121 6.72076 18.6065 6.98598 18.3953 7.19721L13.5909 12.0016L18.3953 16.8059C18.6065 17.0171 18.7121 17.2824 18.7121 17.6016C18.7121 17.9208 18.6065 18.186 18.3953 18.3972C18.184 18.6084 17.9188 18.7141 17.5996 18.7141C17.2804 18.7141 17.0152 18.6084 16.804 18.3972L11.9996 13.5929Z"
        fill={color}
      />,
    ],
    coronavirus_outlined: [
      <path d="M450-80q-12 0-21-9t-9-21q0-12 9-21t21-9v-62q-42-5-79-20t-67-40l-43 44q9 9 9 21t-9 21q-9 9-21 9t-21-9l-43-42q-9-9-9-21.5t9-21.5q9-9 21-8.5t21 8.5l44-44q-25-31-40-67t-20-78h-62q0 12-9 21t-21 9q-12 0-21-9t-9-21v-60q0-12 9-21t21-9q12 0 21 9t9 21h62q5-42 20.5-78t39.5-67l-44-44q-9 8-21 8.5t-21-8.5q-9-9-9-21.5t9-21.5l42-42q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5l43 43q31-25 67-40t78-20v-62q-12 0-20.5-9t-8.5-21q0-12 9-21t21-9h60q12 0 21 9t9 21q0 12-9 21t-21 9v62q42 5 78 20t67 40l44-44q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l42 43q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-43 43q25 31 40 67.5t20 78.5h62q0-12 9-21t21-9q12 0 21 9t9 21v60q0 12-9 21t-21 9q-12 0-21-9t-9-21h-62q-5 42-20 78.5T698-304l43 43q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5l-42 42q-9 9-21.5 9t-21.5-9q-9-9-8.5-21t8.5-21l-44-44q-31 25-67 40.5T510-201v61q12 0 21 9t9 21q0 12-9 21t-21 9h-60Zm30-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-70-40q17 0 28.5-11.5T450-360q0-17-11.5-28.5T410-400q-17 0-28.5 11.5T370-360q0 17 11.5 28.5T410-320Zm140 0q17 0 28.5-11.5T590-360q0-17-11.5-28.5T550-400q-17 0-28.5 11.5T510-360q0 17 11.5 28.5T550-320ZM340-440q17 0 28.5-11.5T380-480q0-17-11.5-28.5T340-520q-17 0-28.5 11.5T300-480q0 17 11.5 28.5T340-440Zm140 0q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm140 0q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440ZM410-560q17 0 28.5-11.5T450-600q0-17-11.5-28.5T410-640q-17 0-28.5 11.5T370-600q0 17 11.5 28.5T410-560Zm140 0q17 0 28.5-11.5T590-600q0-17-11.5-28.5T550-640q-17 0-28.5 11.5T510-600q0 17 11.5 28.5T550-560Zm-70 80Z" />,
    ],
    coronavirus: [
      <path d="M21.25,10.5c-0.41,0-0.75,0.34-0.75,0.75h-1.54c-0.15-1.37-0.69-2.63-1.52-3.65l1.09-1.09l0.01,0.01 c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06L18.54,4.4c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.76-0.01,1.05l-1.09,1.09 c-1.02-0.82-2.27-1.36-3.64-1.51V3.5h0.01c0.41,0,0.75-0.34,0.75-0.75C13.5,2.34,13.16,2,12.75,2h-1.5c-0.41,0-0.75,0.34-0.75,0.75 c0,0.41,0.33,0.74,0.74,0.75v1.55C9.87,5.19,8.62,5.74,7.6,6.56L6.51,5.47l0.01-0.01c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L4.4,5.46c-0.29,0.29-0.29,0.77,0,1.06c0.29,0.29,0.76,0.29,1.05,0.01l1.09,1.09 c-0.82,1.02-1.36,2.26-1.5,3.63H3.5c0-0.41-0.34-0.75-0.75-0.75C2.34,10.5,2,10.84,2,11.25v1.5c0,0.41,0.34,0.75,0.75,0.75 c0.41,0,0.75-0.34,0.75-0.75h1.54c0.15,1.37,0.69,2.61,1.5,3.63l-1.09,1.09c-0.29-0.29-0.76-0.28-1.05,0.01 c-0.29,0.29-0.29,0.77,0,1.06l1.06,1.06c0.29,0.29,0.77,0.29,1.06,0c0.29-0.29,0.29-0.77,0-1.06l-0.01-0.01l1.09-1.09 c1.02,0.82,2.26,1.36,3.63,1.51v1.55c-0.41,0.01-0.74,0.34-0.74,0.75c0,0.41,0.34,0.75,0.75,0.75h1.5c0.41,0,0.75-0.34,0.75-0.75 c0-0.41-0.34-0.75-0.75-0.75h-0.01v-1.54c1.37-0.14,2.62-0.69,3.64-1.51l1.09,1.09c-0.29,0.29-0.28,0.76,0.01,1.05 c0.29,0.29,0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0l-0.01,0.01l-1.09-1.09 c0.82-1.02,1.37-2.27,1.52-3.65h1.54c0,0.41,0.34,0.75,0.75,0.75c0.41,0,0.75-0.34,0.75-0.75v-1.5C22,10.84,21.66,10.5,21.25,10.5z M13.75,8c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S13.2,8,13.75,8z M12,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C13,12.55,12.55,13,12,13z M10.25,8c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.7,8,10.25,8z M8.5,13c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C9.5,12.55,9.05,13,8.5,13z M10.25,16c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C11.25,15.55,10.8,16,10.25,16z M13.75,16c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C14.75,15.55,14.3,16,13.75,16z M14.5,12 c0-0.55,0.45-1,1-1s1,0.45,1,1c0,0.55-0.45,1-1,1S14.5,12.55,14.5,12z" />,
    ],
    delete: [
      <path
        d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6C4.71667 6 4.47917 5.90417 4.2875 5.7125C4.09583 5.52083 4 5.28333 4 5C4 4.71667 4.09583 4.47917 4.2875 4.2875C4.47917 4.09583 4.71667 4 5 4H9C9 3.71667 9.09583 3.47917 9.2875 3.2875C9.47917 3.09583 9.71667 3 10 3H14C14.2833 3 14.5208 3.09583 14.7125 3.2875C14.9042 3.47917 15 3.71667 15 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM7 6V19H17V6H7ZM12 13.9L13.9 15.8C14.1 15.9833 14.3375 16.075 14.6125 16.075C14.8875 16.075 15.1167 15.9833 15.3 15.8C15.5 15.6 15.6 15.3625 15.6 15.0875C15.6 14.8125 15.5 14.5833 15.3 14.4L13.4 12.5L15.3 10.6C15.5 10.4 15.6 10.1625 15.6 9.8875C15.6 9.6125 15.5 9.38333 15.3 9.2C15.1167 9 14.8875 8.9 14.6125 8.9C14.3375 8.9 14.1 9 13.9 9.2L12 11.1L10.1 9.2C9.91667 9 9.6875 8.9 9.4125 8.9C9.1375 8.9 8.9 9 8.7 9.2C8.51667 9.38333 8.425 9.6125 8.425 9.8875C8.425 10.1625 8.51667 10.4 8.7 10.6L10.6 12.5L8.7 14.4C8.51667 14.5833 8.425 14.8125 8.425 15.0875C8.425 15.3625 8.51667 15.6 8.7 15.8C8.9 15.9833 9.1375 16.075 9.4125 16.075C9.6875 16.075 9.91667 15.9833 10.1 15.8L12 13.9Z"
        fill={color}
      />,
    ],
    edit: [
      <path
        d="M5 19H7.91626L16.5173 10.399L13.601 7.48271L5 16.0837V19ZM6.55534 16.7292L13.601 9.68352L14.3165 10.399L7.2708 17.4447H6.55534V16.7292Z"
        fill={color}
      />,
      <path
        d="M16.9528 5.22747C16.6495 4.92418 16.1596 4.92418 15.8563 5.22747L14.4331 6.6506L17.3494 9.56687L18.7725 8.14373C19.0758 7.84044 19.0758 7.35051 18.7725 7.04722L16.9528 5.22747Z"
        fill={color}
      />,
    ],
    expand_less: [
      <path
        d="M12.0015 8.82986C12.113 8.82986 12.2173 8.8496 12.3144 8.88909C12.4115 8.92859 12.5059 8.99381 12.5976 9.08476L17.5476 14.0348C17.7009 14.189 17.7733 14.3913 17.765 14.6417C17.7566 14.8922 17.6759 15.095 17.5226 15.2502C17.336 15.4388 17.1329 15.5206 16.9134 15.4956C16.6938 15.4706 16.499 15.3815 16.3291 15.2282L12.0009 10.9L7.6726 15.2282C7.51734 15.3815 7.31376 15.4664 7.06186 15.4831C6.80996 15.4998 6.60737 15.414 6.45411 15.2257C6.26752 15.0707 6.18673 14.8718 6.21173 14.6289C6.23673 14.3861 6.32586 14.1797 6.4791 14.0098L11.4041 9.08476C11.4961 8.99381 11.5908 8.92859 11.6882 8.88909C11.7856 8.8496 11.89 8.82986 12.0015 8.82986Z"
        fill={color}
      />,
    ],
    expand_more: [
      <path
        d="M13.2802 6.37317L8.93355 10.7198C8.42021 11.2332 7.58021 11.2332 7.06688 10.7198L2.72021 6.37317"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ],
    info: [
      <path
        d="M7.99992 1.33334C4.31992 1.33334 1.33325 4.32001 1.33325 8.00001C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00001C14.6666 4.32001 11.6799 1.33334 7.99992 1.33334ZM8.66659 11.3333H7.33325V7.33334H8.66659V11.3333ZM8.66659 6.00001H7.33325V4.66668H8.66659V6.00001Z"
        fill={color}
      />,
    ],
    menu: [
      <path
        d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
        fill={color}
      />,
    ],
    more_vert: [
      <path
        d="M14 10.6666C14.9167 10.6666 15.6667 9.91665 15.6667 8.99998C15.6667 8.08331 14.9167 7.33331 14 7.33331C13.0834 7.33331 12.3334 8.08331 12.3334 8.99998C12.3334 9.91665 13.0834 10.6666 14 10.6666ZM14 12.3333C13.0834 12.3333 12.3334 13.0833 12.3334 14C12.3334 14.9166 13.0834 15.6666 14 15.6666C14.9167 15.6666 15.6667 14.9166 15.6667 14C15.6667 13.0833 14.9167 12.3333 14 12.3333ZM14 17.3333C13.0834 17.3333 12.3334 18.0833 12.3334 19C12.3334 19.9166 13.0834 20.6666 14 20.6666C14.9167 20.6666 15.6667 19.9166 15.6667 19C15.6667 18.0833 14.9167 17.3333 14 17.3333Z"
        fill={color}
      />,
    ],
    person_add: [
      <path
        d="M13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12C11.21 12 13 10.21 13 8ZM11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6C10.1 6 11 6.9 11 8ZM1 18V20H17V18C17 15.34 11.67 14 9 14C6.33 14 1 15.34 1 18ZM3 18C3.2 17.29 6.3 16 9 16C11.69 16 14.78 17.28 15 18H3ZM20 15V12H23V10H20V7H18V10H15V12H18V15H20Z"
        fill={color}
      />,
    ],
    person: [
      <path
        d="M7.99998 1.33331C6.25331 1.33331 4.83331 2.75331 4.83331 4.49998C4.83331 6.21331 6.17331 7.59998 7.91998 7.65998C7.97331 7.65331 8.02665 7.65331 8.06665 7.65998C8.07998 7.65998 8.08665 7.65998 8.09998 7.65998C8.10665 7.65998 8.10665 7.65998 8.11331 7.65998C9.81998 7.59998 11.16 6.21331 11.1666 4.49998C11.1666 2.75331 9.74665 1.33331 7.99998 1.33331Z"
        fill={color}
      />,
      <path
        d="M11.3866 9.43336C9.52664 8.19336 6.49331 8.19336 4.61997 9.43336C3.77331 10 3.30664 10.7667 3.30664 11.5867C3.30664 12.4067 3.77331 13.1667 4.61331 13.7267C5.54664 14.3534 6.77331 14.6667 7.99997 14.6667C9.22664 14.6667 10.4533 14.3534 11.3866 13.7267C12.2266 13.16 12.6933 12.4 12.6933 11.5734C12.6866 10.7534 12.2266 9.99336 11.3866 9.43336Z"
        fill={color}
      />,
    ],
    person_outlined: [
      <path
        d="M8.10664 7.24665C8.03998 7.23998 7.95998 7.23998 7.88664 7.24665C6.29998 7.19331 5.03998 5.89331 5.03998 4.29331C5.03998 2.65998 6.35998 1.33331 7.99998 1.33331C9.63331 1.33331 10.96 2.65998 10.96 4.29331C10.9533 5.89331 9.69331 7.19331 8.10664 7.24665Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
      <path
        d="M4.77335 9.70669C3.16002 10.7867 3.16002 12.5467 4.77335 13.62C6.60669 14.8467 9.61335 14.8467 11.4467 13.62C13.06 12.54 13.06 10.78 11.4467 9.70669C9.62002 8.48669 6.61335 8.48669 4.77335 9.70669Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ],
    psychiatry_outlined: [
      <path d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Zm0-400q0-48-18.5-91.5T369-689q-34-34-77.5-52.5T200-760q0 48 18 92t52 78q34 34 78 52t92 18Zm80 120q48 0 91.5-18t77.5-52q34-34 52.5-78t18.5-92q-48 0-92 18.5T590-569q-34 34-52 77.5T520-400Zm0 0Zm-80-120Z" />,
    ],
    psychiatry: [
      <path
        d="M440-120v-319q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-80h80q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h80v80q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v200h-80Z"
        fill={color}
      />,
    ],
    radio_outlined: [
      <path d="M20 6H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2zm0 2v3h-2V9h-2v2H4V8h16zM4 20v-7h16v7H4z" />,
      <circle cx="8" cy="16.48" r="2.5" />,
    ],
    radio: [
      <path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z" />,
    ],
    robot_outlined: [
      <path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3s1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3S21.66,9,20,9z M18,19L6,19V7h12V19z M9,13c-0.83,0-1.5-0.67-1.5-1.5 S8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13z M16.5,11.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S14.17,10,15,10 S16.5,10.67,16.5,11.5z M8,15h8v2H8V15z" />,
    ],
    robot: [
      <path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3C23,10.34,21.66,9,20,9z M7.5,11.5C7.5,10.67,8.17,10,9,10 s1.5,0.67,1.5,1.5S9.83,13,9,13S7.5,12.33,7.5,11.5z M16,17H8v-2h8V17z M15,13c-0.83,0-1.5-0.67-1.5-1.5S14.17,10,15,10 s1.5,0.67,1.5,1.5S15.83,13,15,13z" />,
    ],
    search: [
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />,
    ],
    today: [
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8334 5.33329H16.1667V4.49996C16.1667 4.03972 15.7937 3.66663 15.3334 3.66663C14.8732 3.66663 14.5001 4.03972 14.5001 4.49996V5.33329H9.50008V4.49996C9.50008 4.03972 9.12699 3.66663 8.66675 3.66663C8.20651 3.66663 7.83342 4.03972 7.83342 4.49996V5.33329H6.16675C4.78604 5.33329 3.66675 6.45258 3.66675 7.83329V17.8333C3.66675 19.214 4.78604 20.3333 6.16675 20.3333H17.8334C19.2141 20.3333 20.3334 19.214 20.3334 17.8333V7.83329C20.3334 6.45258 19.2141 5.33329 17.8334 5.33329ZM18.6667 17.8333C18.6667 18.2935 18.2937 18.6666 17.8334 18.6666H6.16675C5.70651 18.6666 5.33341 18.2935 5.33341 17.8333V12H18.6667V17.8333ZM5.33341 10.3333H18.6667V7.83329C18.6667 7.37306 18.2937 6.99996 17.8334 6.99996H16.1667V7.83329C16.1667 8.29353 15.7937 8.66663 15.3334 8.66663C14.8732 8.66663 14.5001 8.29353 14.5001 7.83329V6.99996H9.50008V7.83329C9.50008 8.29353 9.12699 8.66663 8.66675 8.66663C8.20651 8.66663 7.83341 8.29353 7.83341 7.83329V6.99996H6.16675C5.70651 6.99996 5.33341 7.37306 5.33341 7.83329V10.3333Z"
        fill={color}
      />,
    ],
    visibility: [
      <path
        d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
        fill={color}
      />,
    ],
    visibility_off: [
      <path
        d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
        fill={color}
      />,
    ],
  };

  return (
    <svg
      className={className}
      width={`${size}px`}
      height={`${size}px`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      style={style}
    >
      {arr_icon[icon].map((o, i) => (
        <Fragment key={i}>{o}</Fragment>
      ))}
    </svg>
  );
};
export default Icon;
