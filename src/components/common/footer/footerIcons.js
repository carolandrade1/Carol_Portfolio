import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';

function FooterIcons() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
    >
      <Text tag="a" padding="5px" href="https://www.linkedin.com/in/carolandrade1/" target="_blank" rel="noopener noreferrer" title="Linkedin" color="fonts.main">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14L14 21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 9H2L2 21H6L6 9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Text>
      <Text tag="a" padding="5px" href="https://github.com/carolandrade1" target="_blank" rel="noopener noreferrer" title="Github" color="fonts.main">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Text>
      <Text tag="a" padding="5px" href="https://codepen.io/carolandrade1" target="_blank" rel="noopener noreferrer" title="Codepen" color="fonts.main">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V15.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 8.5L12 15.5L2 8.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 15.5L12 8.5L22 15.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2V8.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Text>
    </Box>
  );
}

export default FooterIcons;
