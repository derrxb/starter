import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, config } from 'react-spring/renderprops.cjs';
import Modal from 'react-modal';
import Media from '../shared/Media';
import NavOption from './NavOption';

const MenuLauncher = styled.button`
  background: #ff9e00;
  color: black;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  width: 64px;
  padding: 0.5em;
  outline: none;
  border: none;
  display: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  ${Media.lessThan('laptop')`
    display: block;
  `};
`;

const NavDropdownHeader = styled.li`
  display: flex !important;
  align-items: center;
  background: #2d67a7 !important;
  h4 {
    color: white;
    margin: 0;
    padding: 0.5em 1em;
  }
`;

const NavDropdownWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  li {
    display: block;
    width: 100%;
    height: 48px;
    margin-left: none;
    padding-left: none;
    margin: 0;
    &:nth-of-type(odd) {
      background: #eee;
    }
  }
`;

const ModalStyle = {
  overlay: {
    zIndex: 5,
    background: 'rgba(14,30,37,.54)',
  },
  content: {
    height: 'fit-content',
    width: 'calc(100% - 80px)',
    padding: 0,
    border: 'none',
    borderRadius: '10px',
  },
};

const NavMobile = ({ links, nature, ...rest }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <MenuLauncher onClick={() => setShowModal(!showModal)}>Menu</MenuLauncher>
      {showModal && (
        <Spring
          from={{ transform: 'scale(0)', opacity: 0 }}
          to={{ transform: 'scale(1)', opacity: 1 }}
          config={config.stiff}
        >
          {({ opacity, transform }) => (
            <Modal
              isOpen={showModal}
              style={{
                overlay: {
                  ...ModalStyle.overlay,
                  opacity,
                },
                content: {
                  ...ModalStyle.content,
                  transform,
                },
              }}
              onRequestClose={() => setShowModal(false)}
              contentLabel="Site Menu"
            >
              <NavDropdownWrapper data-testid="menu-nav-modal">
                <NavDropdownHeader>
                  <h4>Menu</h4>
                </NavDropdownHeader>

                {links.map(item => (
                  <li key={`${item.name}-${item.to}`}>
                    <NavOption
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...rest}
                      nature={nature}
                      data-testid="modal-nav-link"
                      to={item.to}
                    >
                      {item.name}
                    </NavOption>
                  </li>
                ))}
              </NavDropdownWrapper>
            </Modal>
          )}
        </Spring>
      )}
    </>
  );
};

NavMobile.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
  nature: PropTypes.string.isRequired,
};

export default NavMobile;
