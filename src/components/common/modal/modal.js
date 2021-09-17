import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../button/button';
import breakpointsMedia from '../../../theme/util/breakpoints/breakpoints';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0,0,0,0.3);
  position: fixed;
  align-items: stretch;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  transition: .3s;
  z-index: 999;
  padding: 0 10px;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const CloseButton = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  right: 30px;

  button {
    border-radius: 50%;
  }

  ${breakpointsMedia({
    md: css`
      display: flex;
    `,
  })}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        // isOpen = false;
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.3,
        }}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
        <CloseButton>
          <Button>
            X
          </Button>
        </CloseButton>
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
