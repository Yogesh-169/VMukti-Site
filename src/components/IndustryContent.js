import React from 'react'
import {
  Text,
  Box,
  Flex,
  Image,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react' // Chakra UI components
import BrochureImage1 from './assets/VMukti_Brochure_O2_1.png'
import BrochureImage2 from './assets/VMukti_Brochure_O2_2.png'

const IndustryContent = () => {
  const titleFontSize = '48px' // Font size for the title
  const buttonWidth = useBreakpointValue({
    base: '130px',
    md: '130px',
    lg: '146px',
  })
  const buttonHeight = useBreakpointValue({
    base: '40px',
    md: '45px',
    lg: '50px',
  })

  const content = {
    title: [
      { text: 'Revolutionizing', color: 'black' },
      { text: 'Retail with AI:', color: '#3F77A5' }, // Blue
      { text: 'Smarter Stores, Happier Customers,', color: 'black' },
      { text: 'Maximized Profits', color: '#db7b3a' }, // Orange
    ],
    para: 'VMukti is driving innovation with advanced AI technologies, transforming surveillance, automation, and security for a smarter, more connected world.',

    keyApplications: [
      {
        title: 'Smart Inventory Management',
        description:
          'Computer Vision tracks stock in real-time, while Deep Learning predicts demand, preventing stockouts and excess inventory.',
      },
      {
        title: 'Automated Theft & Fraud Detection',
        description:
          'AI detects suspicious activity and unauthorized product removal, sending instant security alerts to prevent losses.',
      },
      {
        title: 'Customer Behavior Analytics',
        description:
          'AI maps customer movement, analyzes purchase history, and predicts trends to optimize store layouts and marketing.',
      },
      {
        title: 'Personalized Shopping Assistance',
        description:
          'GPT-powered chatbots process queries and refine recommendations, improving customer satisfaction and sales.',
      },
      {
        title: 'Automated Checkout & Billing',
        description:
          'AI recognizes products at self-checkouts, speeding up transactions and reducing errors.',
      },
      {
        title: 'Smart Supply Chain Optimization',
        description:
          'AI improves logistics, reduces delays, and cuts costs by optimizing distribution and warehouse management.',
      },
    ],
    keyBenefits: [
      {
        title: 'Personalized Shopping & Insights',
        svg:
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(`<svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 20.6552C10.7056 19.4495 10.7846 18.8886 11.2585 17.8237C11.8295 16.54 12.9574 15.5724 14.2039 14.9674C17.0668 13.5778 20.6997 15.1087 21.9418 17.7761C23.3667 20.8363 22.0631 24.4258 19.062 25.7653C17.564 26.434 15.8754 26.4679 14.3059 25.8264C12.2995 25.0063 10.7056 22.8392 10.7056 20.6552ZM8.84082 20.3098C8.84082 22.3415 9.6642 24.415 11.0327 25.7844C12.1355 26.8881 14.0635 28.1144 16.231 28.1144C18.1128 28.1144 19.0671 27.9146 20.6485 27.0066C21.0049 26.802 21.2902 26.5383 21.6182 26.3186C21.9972 26.5724 23.7858 28.328 23.9665 28.5978C23.9021 28.6941 23.5322 29.0369 23.8165 29.5042C23.9809 29.7744 26.5861 32.219 27.1609 32.7936C28.7697 34.4025 28.6275 34.3313 29.958 33.0008C31.4144 31.5445 31.1849 31.6399 29.8545 30.3072L28.6112 29.1331C28.1916 28.7134 27.8204 28.3457 27.4027 27.9242C27.3003 27.8209 27.2347 27.7445 27.1232 27.6512C26.4443 27.0838 26.4493 26.8711 25.9003 26.8711C25.5865 26.8711 25.5401 27.0187 25.3478 27.1474C24.872 26.4368 23.4435 25.4623 22.9995 24.7992C26.4759 19.6077 23.0148 12.7624 16.6366 12.6032C12.5923 12.5023 8.84082 15.9868 8.84082 20.3098Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17734 11.5384C2.74885 11.5384 2.50408 11.4304 2.14131 11.4002L2.1333 21.6991C2.13706 22.2166 2.22539 22.1171 2.7605 22.1079L7.94293 22.1056C7.84707 20.9539 7.80477 21.31 7.80477 19.8955C7.80477 18.7807 8.22426 17.3889 8.61006 16.6257C9.5356 14.7947 10.7595 13.4296 12.6149 12.4807C13.4013 12.0785 14.7364 11.6073 15.8856 11.6073C15.6574 11.2959 15.4998 11.6603 14.2501 11.0328C13.9474 10.8808 13.8346 10.7965 13.5758 10.602C13.3338 10.4204 13.2117 10.1669 12.9157 10.0879C12.8219 10.4394 11.9686 10.9419 11.6507 11.1022C10.2552 11.8057 8.30945 11.6173 7.10217 10.6524C6.87122 10.4679 6.73494 10.2503 6.49253 10.0879C6.0684 10.3719 6.04548 10.623 5.13505 11.0787C4.59391 11.3494 3.9589 11.5384 3.17734 11.5384Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8912 6.63441H25.7619L22.5886 0.552733C22.5331 0.454506 22.4882 0.332367 22.4214 0.236413C22.2718 0.021282 22.1052 0.000330621 21.7599 0.000132981C20.5619 -0.000855218 19.3628 0.00398831 18.1646 0.00398831L19.034 3.27858C19.1777 3.84986 19.8846 6.33785 19.8912 6.63441Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4051 18.2375C17.4051 17.4172 18.5792 17.3907 18.5792 18.2375C18.5792 19.0163 17.4051 18.9647 17.4051 18.2375ZM12.5703 21.6909C12.5703 21.9974 12.9402 22.2097 13.2999 22.4809L15.3714 24.0699C16.1477 24.6744 16.379 24.0302 17.4647 22.5793C17.7456 22.2037 19.8915 19.5445 19.8915 19.2735C19.8915 18.7513 19.7032 18.0844 19.625 17.6061C19.3488 15.9197 18.7465 16.4749 17.1287 16.5108C16.1635 16.5323 16.2322 16.6884 15.4516 17.7345L12.9353 21.0199C12.7836 21.2208 12.5703 21.4044 12.5703 21.6909Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.276367 6.63469H6.07798L7.80467 0.00426907C6.6296 0.00426907 5.45424 0.0102942 4.27927 0.00130158C3.68289 -0.00314532 3.67379 -0.0147073 3.29126 0.73998C3.08364 1.14969 2.90755 1.56187 2.69064 1.93511C2.47512 2.30598 2.30287 2.64968 2.09516 3.0663C1.83269 3.59291 0.355917 6.29337 0.276367 6.63469Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5371 6.63433H18.7862C18.7796 6.33757 18.0769 3.8559 17.9427 3.33384C17.8042 2.79458 17.6593 2.26856 17.5153 1.68918C17.3965 1.21109 17.1286 0.478934 17.1286 0.00390625H13.5371V6.63433Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18311 6.63433H12.4322V0.00390625H8.90979L7.18311 6.63433Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.039 10.4334C4.00131 10.4334 4.75046 10.2737 5.44052 9.58876C5.89954 9.13301 6.40719 8.45965 6.42329 7.73975H0C0.110678 9.06917 1.52686 10.4334 3.039 10.4334Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9545 10.4334C16.9706 10.4334 17.6611 10.3555 18.4942 9.58886C18.8996 9.21582 19.4194 8.43139 19.4769 7.73975H13.0537C13.0808 8.95592 14.5893 10.4334 15.9545 10.4334Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5158 10.4334C23.4958 10.4334 24.2472 10.3219 24.9864 9.58876C25.2805 9.29685 25.3827 9.20208 25.6034 8.82439C25.7791 8.52378 25.9691 8.18424 25.9691 7.73975H19.5459C19.5988 8.37437 20.1416 9.25831 20.5323 9.58511C20.986 9.96458 21.7192 10.4334 22.5158 10.4334Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46203 10.4334C10.5475 10.4334 11.1291 10.3522 11.9748 9.56188L12.1455 9.38717C12.2098 9.31701 12.2458 9.28055 12.3104 9.20683C12.6567 8.81204 12.8626 8.2628 12.9845 7.73975H6.49219C6.60672 7.97859 6.60406 8.27604 6.85902 8.75433C7.30983 9.60023 8.41533 10.4334 9.46203 10.4334Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8525 11.5384C19.0605 11.5384 21.78 12.7797 23.1864 14.4595C23.3565 14.6626 23.6462 15.0769 23.8283 15.1989V11.4002C22.7716 11.6464 21.8411 11.5496 20.8802 11.1022C20.4761 10.9139 19.7656 10.4155 19.5462 10.0879C19.3434 10.2238 19.2115 10.3927 18.9846 10.5623C18.786 10.7106 18.577 10.8629 18.3701 10.9839C18.1737 11.0986 17.9039 11.2165 17.6502 11.2999C17.1861 11.4525 17.2583 11.3617 16.8989 11.5155C16.8885 11.52 16.8671 11.5291 16.8525 11.5384Z" fill="white"/>
        </svg>`),
      },
      {
        title: 'AI-Powered Inventory & Demand Forecasting',
        svg:
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(`<svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3109 20.8315H19.0874C19.8472 20.8315 19.7193 21.8292 19.2204 21.8292H9.3109C8.62355 21.8292 8.62355 20.8315 9.3109 20.8315ZM3.40904 34H2.32327C1.77591 33.9819 1.30223 33.9067 0.892436 33.6395C0.297233 33.2514 0 32.6227 0 31.6722V5.9341C0 4.67431 0.692578 3.67285 1.86219 3.67285H4.5889V5.53503C4.5889 6.46962 5.52098 7.26422 6.51759 7.26422H16.2276C16.8805 7.26422 17.2907 7.08086 17.6508 6.75873L18.0918 6.20205C18.4023 5.53158 18.2893 4.57256 18.2893 3.67285H21.0826C21.9558 3.67285 22.8118 4.59522 22.8118 5.40204V23.4254C21.0268 23.4254 19.7777 23.6913 18.5383 24.938C17.3525 26.1309 16.9592 27.3162 16.9592 29.0119C16.9592 31.0312 18.4367 32.9617 20.1599 33.659C20.6085 33.8405 20.7369 33.8005 20.883 34H3.45828H3.40904ZM4.45591 22.6273C4.01898 22.6273 3.75476 22.2446 3.47283 21.9476C2.75023 21.1865 3.73257 20.4493 4.38942 21.4302C5.03648 20.9968 5.45681 20.0335 6.1851 20.0335C6.3194 20.0335 6.58408 20.2148 6.58408 20.499C6.58408 20.904 5.42818 21.8842 5.10446 22.2117C4.92596 22.3924 4.78103 22.6273 4.45591 22.6273ZM8.77884 16.2426C8.77884 15.906 9.13901 15.7106 9.51038 15.7106H18.9544C19.928 15.7106 19.665 16.7082 19.2869 16.7082H9.17791C8.98998 16.7082 8.77884 16.4308 8.77884 16.2426ZM4.45591 17.5727C4.13043 17.5727 3.15014 16.7078 3.21468 16.2648C3.24844 16.0335 3.43003 15.8436 3.65787 15.8436C4.12437 15.8436 4.07307 16.2069 4.45591 16.3091C4.80472 16.0755 5.69184 14.9125 6.05211 14.9125C6.33666 14.9125 6.58408 15.1175 6.58408 15.378C6.58408 15.7396 6.00221 16.1927 5.63644 16.5585C5.4251 16.7698 4.73897 17.5727 4.45591 17.5727ZM9.3109 10.6561H19.1539C19.8221 10.6561 19.7787 11.6536 19.0874 11.6536H9.44389C8.52889 11.6536 8.65582 10.6561 9.3109 10.6561ZM4.52241 12.4517C4.0616 12.4517 4.13593 12.3636 3.70767 11.9363C3.52236 11.7513 3.21757 11.5364 3.20899 11.2461C3.20078 10.9695 3.50156 10.7192 3.77276 10.7505C4.06039 10.7837 4.24048 11.1104 4.45591 11.2546C4.65606 10.9557 5.18309 10.4984 5.46996 10.2069C5.63756 10.0365 5.79079 9.8184 6.05939 9.80936C6.36277 9.7991 6.58408 10.0066 6.58408 10.39C6.58408 10.6456 4.77795 12.4517 4.52241 12.4517Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.615 30.4084C21.3473 30.4084 20.2194 29.2342 20.1779 29.0525C20.0685 28.5731 20.4852 28.4797 20.8168 28.4797C21.0449 28.4797 21.4188 29.0135 21.615 29.1449C22.0744 28.8372 23.397 27.3043 23.6463 27.1795C23.9932 27.0059 24.4082 27.2685 24.4082 27.6152C24.4082 27.8781 23.9625 28.2272 23.793 28.3967C23.4771 28.7125 21.9242 30.4084 21.615 30.4084ZM17.6245 28.3468C17.6245 29.7145 17.6804 30.4154 18.5643 31.5969C19.0404 32.2331 19.7141 32.7731 20.5215 33.0981C24.2989 34.6182 28.1534 30.9444 26.6231 26.9965C26.0222 25.4464 24.3102 24.0903 22.679 24.0903C21.6221 24.0903 21.2107 24.0563 20.218 24.5555C18.8477 25.2446 17.6245 26.746 17.6245 28.3468Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1706 2.94134C10.3596 2.94134 10.3084 3.15827 10.3084 2.0102C10.3084 0.829962 12.5696 0.652298 12.5696 2.20969C12.5696 2.49918 12.4422 2.94134 12.1706 2.94134ZM9.1778 2.20969C9.1778 2.44052 9.26416 2.74129 9.31079 2.94134C8.84708 2.94134 5.88394 2.85526 5.59268 3.01409C4.94562 3.36671 5.12058 5.64158 5.47694 6.11013C5.66113 6.35233 6.04799 6.5992 6.45098 6.5992H16.294C16.7482 6.5992 16.9848 6.48738 17.2209 6.26233C17.4702 6.02461 17.6241 5.78511 17.6241 5.40208C17.6241 4.30904 17.8398 3.17319 17.1326 2.96727C16.9021 2.90002 13.9487 2.94134 13.5672 2.94134C13.6433 2.02718 13.8251 1.00511 12.4773 0.240261C11.7117 -0.19425 10.47 -0.0374755 9.79118 0.694917C9.49964 1.00949 9.1778 1.62904 9.1778 2.20969Z" fill="white"/>
        </svg>`),
      },
      {
        title: 'Automated Checkout & Theft Prevention',
        svg:
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(`<svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00449621 3.65232C0.00449621 5.97634 -0.262816 5.71091 3.32481 5.71091C3.45878 6.28602 3.68036 6.91778 3.86388 7.49602C4.75374 10.2993 5.74675 13.7089 6.65331 16.3941L7.77398 19.9883C7.37013 20.2586 6.44648 21.2833 6.03084 21.6982C5.40837 22.3197 4.85213 22.9387 4.85213 24.1055C4.85213 25.9388 6.30151 26.9609 8.10605 26.9609H27.3639C28.6539 26.9609 28.3599 26.091 28.3599 24.6367C28.3599 23.8613 26.6677 24.039 26.3677 24.039H7.77398C7.98574 23.7228 8.66985 23.11 8.98593 22.7939C9.4103 22.3695 9.79675 21.9959 10.2139 21.5649C10.565 21.2021 10.4286 21.2416 11.0932 21.2489L22.1842 21.2499C23.7791 21.2499 24.8736 21.3978 25.8646 19.95C26.1822 19.4861 26.4096 18.8378 26.6778 18.3061L30.6084 9.95159C30.859 9.33263 31.2154 8.89874 31.2154 8.03509C31.2154 6.66834 30.1915 5.64451 28.8248 5.64451C26.3428 5.64451 26.899 5.58833 26.899 8.23436C26.899 8.91731 26.7506 9.55624 26.6072 10.134C26.346 11.1864 25.8056 12.326 25.1542 13.1966C24.9894 13.4168 24.8447 13.6382 24.6592 13.8304C23.1275 15.4166 21.9275 16.2263 19.7411 16.7483L17.7349 17.0006C17.4549 17.0006 17.5278 16.9582 17.2662 16.9376C16.0099 16.8384 15.3578 16.7683 14.0624 16.2232C12.3769 15.5141 10.8324 14.1156 9.89584 12.5539C8.74576 10.6361 8.43164 8.92597 8.63474 6.70252C8.76043 5.32656 7.67239 5.64451 6.31305 5.64451C5.7583 4.48835 6.03474 2.78906 4.05527 2.78906H1.00055C0.379633 2.78906 0.00449621 3.03554 0.00449621 3.65232Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4731 11.2891C15.6871 11.2891 15.0524 10.3665 14.3979 9.71197C14.1753 9.48937 13.7024 9.0749 13.5813 8.79721C13.397 8.37464 13.5472 7.83596 14.3481 7.83596C14.5831 7.83596 15.1824 8.50423 15.3607 8.68267C15.6334 8.95521 16.0801 9.33956 16.2739 9.62895C16.5843 9.42109 17.1763 8.75976 17.4858 8.45024L19.9096 6.02642C20.3066 5.62944 21.1845 4.4906 21.8005 5.23214C22.2859 5.81638 21.5331 6.39516 21.2378 6.69049L18.1166 9.81153C17.8647 10.0635 16.7607 11.2891 16.4731 11.2891ZM17.7348 15.6055C20.8463 15.6055 23.4271 13.8294 24.7965 11.1126C25.491 9.73483 25.733 7.74319 25.3868 6.22687C25.2623 5.68132 25.1292 5.23198 24.9261 4.76181C23.7683 2.08137 21.0071 0 18.0669 0C16.1381 0 14.5795 0.400574 13.1243 1.49884C12.9253 1.64896 12.7753 1.74204 12.6035 1.90784C11.2434 3.22138 10.5545 4.29039 10.0962 6.17389C9.48351 8.69157 10.4273 11.5085 12.2396 13.3313C12.9625 14.0585 13.6283 14.4444 14.5246 14.8977C15.3147 15.2972 16.5701 15.6055 17.7348 15.6055Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70671 33.9998C10.0353 33.9977 11.3599 32.6722 11.3599 31.3435C11.3599 30.0454 10.8426 29.0701 9.58729 28.5341C7.31835 27.5653 4.96038 29.9315 5.87483 32.1802C6.07036 32.661 6.35975 33.0792 6.73832 33.3753C7.11705 33.6714 7.74218 33.9977 8.23412 33.9998H8.70671Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7066 33.9998C27.0352 33.9977 28.3598 32.6722 28.3598 31.3435C28.3598 30.0454 27.8426 29.0701 26.5873 28.5341C24.3183 27.5653 21.9604 29.9315 22.8748 32.1802C23.2713 33.1553 24.2939 33.9977 25.2354 33.9998H25.7066Z" fill="white"/>
        </svg>`),
      },
      {
        title: 'Store Layout & Customer Flow Analysis',
        svg:
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(`<svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7944 3.41592V15.3318C17.7944 15.9081 17.9084 16.4332 18.0597 16.8936C18.2261 17.3997 18.487 17.7039 18.8492 18.0107C19.5186 18.5777 20.7175 18.7476 21.9252 18.7476H28.1215C30.5705 18.7476 32.2524 18.0856 32.2524 15.3318V3.41592C32.2524 0.804483 30.7262 0 28.1215 0H21.9252C20.7427 0 19.5602 0.166519 18.8928 0.70119C18.1782 1.27389 17.7944 2.15894 17.7944 3.41592Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18.6682V30.5841C0 33.1955 1.52622 34 4.13096 34H10.3272C12.776 34 14.458 33.3379 14.458 30.5841V18.6682C14.458 16.0568 12.9318 15.2524 10.3272 15.2524H4.13096C1.68196 15.2524 0 15.9144 0 18.6682Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7944 25.5793C17.7944 27.2914 17.611 30.7809 18.0597 32.1459C18.5709 33.7006 20.2564 33.9999 21.9252 33.9999H28.1215C30.5705 33.9999 32.2524 33.3377 32.2524 30.5839V25.5793C32.2524 23.3088 31.1754 22.084 28.9159 22.084H21.131C18.8715 22.084 17.7944 23.3088 17.7944 25.5793Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.41592V8.42056C0 10.6911 1.07706 11.9159 3.33652 11.9159H11.1215C13.3809 11.9159 14.458 10.6911 14.458 8.42056C14.458 6.70845 14.6414 3.21895 14.1927 1.85401C14.0263 1.3479 13.7654 1.04385 13.4032 0.737032C12.7338 0.170018 11.5349 0 10.3272 0H4.13096C2.94827 0 1.76573 0.166519 1.09848 0.70119C0.383887 1.27389 0 2.15894 0 3.41592Z" fill="white"/>
        </svg>`),
      },
    ],
  }

  return (
    <>
      {/* Import the custom font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600&display=swap');
        `}
      </style>

      {/* Container Box with background and width */}
      {/* Main Container Box */}
      <Box
        as="section"
        style={{ fontFamily: "'Wix Madefor Display', sans-serif" }}
        backgroundColor="#F3F3F3"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        {/* Title Container with relative positioning */}
        <Box width="90%" position="relative" mb="20px">
          {/* Title Text (above the white rectangle) */}
          <Text
            fontSize={{ base: '24px', md: '48px' }}
            fontWeight="600"
            lineHeight="normal"
            textAlign="left"
            width="90%"
            position="relative"
            zIndex="1" // Ensures text stays above the rectangle
          >
            {content.title.map((part, index) => (
              <Text as="span" color={part.color} display="inline" key={index}>
                {index !== 0 && ' '}
                {part.text}
              </Text>
            ))}
            <Text as="span" color="#3F77A5" display="inline">
              .
            </Text>{' '}
            {/* Static blue dot without space */}
          </Text>
        </Box>

        {/* Arrow & Description - Flex Container */}
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="start"
          width="90%"
          justifyContent="left"
          mt="1%" // Adjust spacing as needed
        >
          {/* Left Section: Arrow & Description */}
          <Box
            flex="1"
            maxWidth={{ base: '100%', md: '30%' }}
            textAlign={{ base: 'center', md: 'left' }}
            position="relative" // Ensure child absolute positioning works inside
          >
            {/* Arrow */}
            <Box mb="8px" display="flex" justifyContent="flex-start">
              <svg
                width="40"
                height="40"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                  fill="#3F77A5"
                />
              </svg>
            </Box>

            {/* Description */}
            <Text
              color="#000"
              fontWeight="500"
              textAlign={{ base: 'center', md: 'left' }}
              fontSize={{ base: '14px', md: '16px' }}
              maxW="100%"
            >
              {' '}
              {content.para}
            </Text>

            {/* Button Below the Description */}
            <Button
              marginTop="20px"
              width={buttonWidth}
              height={buttonHeight}
              justifyContent="space-between"
              alignItems="center"
              bg="white"
              color="#3F77A5"
              borderRadius="20px"
              _hover={{ bg: '#2c5a7a', color: 'white' }}
              px={{ base: '12px', md: '15px', lg: '20px' }}
              display="flex"
            >
              Book Demo
              <Box
                as="span"
                display="flex"
                alignItems="center"
                marginLeft="8px"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                    fill="#3F77A5"
                  />
                </svg>
              </Box>
            </Button>
          </Box>
        </Flex>

        {/* Two White Boxes Above Key Applications - Bottom Aligned */}
        <Flex
          width="90%"
          // justifyContent="space-between"
          alignItems="flex-end" // Changed to align bottoms
          mt={{ base: '-5%', md: '-10%' }}
          gap="2%"
          position="relative"
        >
          {/* Small White Square (35% width) - Fixed height */}
          <Box
            flex="0 0 30%"
            minHeight={{ base: '180px', md: '336px' }} // Changed to minHeight
            backgroundColor="white"
            borderRadius="24px"
            flexShrink="0"
          />

          {/* Large White Rectangle (60% width) - Will extend upward */}
          <Box
            flex="0 0 68%"
            minHeight={{ base: '300px', md: '630px' }} // Changed to minHeight
            height="auto" // Prevent sudden jumps
            backgroundColor="white"
            borderRadius="24px"
            flexShrink="1"
          />
        </Flex>

        {/* Key Applications Section */}
        {/* <Flex mx="2%"> */}
        <Flex
          width="90%"
          // flexShrink="0"
          borderRadius="24px"
          backgroundColor="#FFF"
          px="2%"
          py="2%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap="10"
          marginTop="5%"
          position="relative" // Needed for absolute positioning inside
        >
          {/* SVG Positioned at Top Right */}
          <Box
            position="absolute"
            top="0"
            right="0"
            width="70%" // SVG covers 70% of the background width
            zIndex="0"
          >
            <Image src={BrochureImage1} alt="" width="100%" opacity="0.8" />
          </Box>
          <Box
            position="absolute"
            bottom="10%"
            left="0"
            width="70%" // SVG covers 70% of the background width
            zIndex="0"
          >
            <Image src={BrochureImage2} alt="" width="100%" opacity="0.8" />
          </Box>

          <Text
            fontSize={{ base: '20px', md: '36px' }}
            fontWeight="700"
            color="#000"
            maxWidth={'90%'}
            textAlign="flex-start"
            width={'100%'}
            mt="1%"
          >
            Key Applications
          </Text>

          {content.keyApplications.map((card, index) => (
            <Box
              key={index}
              width={{ base: '100%', md: '48%' }} // Responsive: 1-column mobile, 2-column desktop
              maxWidth="645px"
              flexShrink="0"
              gap="2"
              // borderRadius="24px"
              // padding="2%"
              display="flex"
              flexDirection="column"
              // marginBottom="5%"
              zIndex={1}
            >
              {/* Grey Placeholder */}
              <Box
                width="100%"
                height={{ base: '200px', md: '368px' }}
                backgroundColor="#F3F3F3"
                borderRadius="24px"
                flexShrink="0"
                // marginBottom="16px"
              />

              {/* Title */}
              <Text
                color="#000"
                fontSize={{ base: '12px', md: '16px' }}
                fontWeight="700"
                textAlign="left"
              >
                {card.title}
              </Text>

              {/* Blue Dash */}
              <Box
                width="18px"
                height="3px"
                borderRadius="2px"
                // marginTop="5px"
                backgroundColor="#3F77A5"
                alignSelf="flex-start"
              />

              {/* Description */}
              <Text
                color="#696969"
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight="500"
                textAlign="left"
                // marginTop="10px"
              >
                {card.description}
              </Text>
            </Box>
          ))}
        </Flex>
        {/* </Flex> */}

        {/* Key Benefits Section */}
        <Box
          width="90%"
          backgroundColor="#3F77A5"
          borderRadius="24px"
          flexShrink="0"
          marginTop="40px"
          padding="24px"
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Key Benefits Title */}
          <Text
            color="#FFF"
            fontSize="36px"
            fontWeight="600"
            fontFamily="'Wix Madefor Display', sans-serif"
            textAlign={{ base: 'center', md: 'left' }}
            marginBottom={{ base: '16px', md: '0' }}
          >
            Key Benefits
          </Text>

          {/* Benefits Grid */}
          <Flex
            flex="1"
            justifyContent="space-evenly"
            alignItems="center"
            flexWrap="wrap"
            gap="20px"
          >
            {content.keyBenefits.map((benefit, index) => (
              <Box
                key={index}
                textAlign="center"
                width={{ base: '50%', md: 'auto' }}
                maxWidth="160px" // Controls text wrapping for two lines
              >
                {/* SVG Icon */}
                <Box
                  // width="40px"
                  // height="40px"
                  // backgroundColor="white"
                  // borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start" // Aligns icon to the left
                  // paddingLeft="8px" // Adds slight spacing from the edge
                >
                  <img src={benefit.svg} alt={benefit.title} />
                </Box>
                <Text
                  color="#FFF"
                  fontSize="16px"
                  fontWeight="500"
                  width="190px"
                  lineHeight="1.2"
                  textAlign="left"
                  mt="5%"
                  wordBreak="break-word" // or "break-all"
                  overflowWrap="break-word"
                >
                  {benefit.title}
                </Text>{' '}
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Bottom elements */}
        <Flex
          justifyContent="flex-end" // Align to the right
          alignItems="center" // Vertically center
          width="90%" // Match the grid width
          mt="2%" // Margin top
          position="relative" // Use relative positioning
          zIndex="2" // Ensure it's above other elements
        >
          {/* Line */}
          <Box
            width="30%" // Fixed width for the line
            height="1px"
            backgroundColor="#3f77a5"
            flexShrink={0} // Prevent the line from shrinking
            marginRight="2%" // Space between line and button
          />

          {/* Button */}
          <Button
            height={{ base: '40px', md: '50px' }} // Responsive height
            minWidth="146px" // Minimum width to fit content
            backgroundColor="white"
            color="#3F77A5"
            fontSize="14px"
            fontWeight="600"
            borderRadius="12px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="8px 16px" // Padding for better spacing
            gap="8px" // Space between text and icon
            zIndex="2"
            _hover={{ backgroundColor: '#f0f0f0' }}
          >
            All Industries
            <svg
              style={{
                width: '1em',
                height: '1em',
                minWidth: '14px',
                minHeight: '14px',
                flexShrink: 0, // Prevent the icon from shrinking
              }}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM3.06066 17.0607L17.0607 3.06066L14.9393 0.939339L0.93934 14.9393L3.06066 17.0607Z"
                fill="#3F77A5"
              />
            </svg>
          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default IndustryContent
