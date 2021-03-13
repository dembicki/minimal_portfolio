import React, { useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

// TODO: implement menu closing when click outside of this component

export default function Menu({ size }) {
  const [open, setOpen] = useState(false);
  const menuSize = size || 15;

  const Icon = styled.svg`
    display: block;
    position: fixed;
    top: 3rem;
    right: 3rem;
    margin: auto;
    width: 40px;
    height: 33px;
  `;

  const Wrapper = styled.div`
    position: fixed;
    z-index: 3;
    right: -4rem;
    top: -4rem;
    height: ${menuSize}rem;
    width: ${menuSize}rem;
    cursor: pointer;
    border-radius: ${menuSize}rem;
    display: flex;
    &:hover {
      background-color: white;
      ${Icon} path {
        fill: black;
        transition: fill 0.3s ease-in-out;
      }
    }
    ${!open} {
      background-color: white;
      height: ${menuSize * 3}rem;
      width: ${menuSize * 3}rem;
      border-radius: ${menuSize * 3}rem;
      right: -8rem;
      top: -8rem;
      ${Icon} {
        path {
          fill: black;
        }
      }
    }
  `;

  const Nav = styled.nav`
    font-size: 3.5rem;
    text-align: left;
    letter-spacing: 0.2rem;
    line-height: 5rem;
    color: red;
    display: flex;
    align-self: center;
    margin-left: 6rem;
    ul {
      transition: all 0.2s ease-in-out;
      list-style-type: none;
      &:hover {
        transform: skewY(5deg);
      }
      a {
        padding: 0.5rem;
        text-decoration: none;
        display: block;
        color: black;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  `;

  const handleMenuClick = () => setOpen(!open);

  return (
    <Wrapper onClick={handleMenuClick} className="hover">
      {open && (
        <Nav>
          <ul>
            <li>
              <Link to="top" smooth duration={700} offset={-70}>
                Home
              </Link>
            </li>
            <li>
              <Link to="experience" smooth duration={700}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={700}>
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      )}
      <Icon>
        <svg
          width="40"
          height="33"
          viewBox="0 0 40 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.42857 14.1429H38.5714C38.9503 14.1429 39.3137 14.0187 39.5816 13.7977C39.8495 13.5766 40 13.2769 40 12.9643V10.6071C40 10.2946 39.8495 9.99479 39.5816 9.77377C39.3137 9.55274 38.9503 9.42857 38.5714 9.42857H1.42857C1.04969 9.42857 0.686328 9.55274 0.418419 9.77377C0.15051 9.99479 0 10.2946 0 10.6071L0 12.9643C0 13.2769 0.15051 13.5766 0.418419 13.7977C0.686328 14.0187 1.04969 14.1429 1.42857 14.1429ZM38.5714 28.2857H1.42857C1.04969 28.2857 0.686328 28.4099 0.418419 28.6309C0.15051 28.8519 0 29.1517 0 29.4643L0 31.8214C0 32.134 0.15051 32.4338 0.418419 32.6548C0.686328 32.8758 1.04969 33 1.42857 33H38.5714C38.9503 33 39.3137 32.8758 39.5816 32.6548C39.8495 32.4338 40 32.134 40 31.8214V29.4643C40 29.1517 39.8495 28.8519 39.5816 28.6309C39.3137 28.4099 38.9503 28.2857 38.5714 28.2857ZM38.8545 2.8754e-07H15.4313C15.2808 -9.65796e-05 15.1318 0.0242821 14.9927 0.0717418C14.8537 0.119202 14.7274 0.188811 14.621 0.276588C14.5146 0.364365 14.4302 0.468587 14.3727 0.583291C14.3151 0.697996 14.2856 0.820932 14.2857 0.945067V3.76922C14.2856 3.89335 14.3151 4.01629 14.3727 4.131C14.4302 4.2457 14.5146 4.34992 14.621 4.4377C14.7274 4.52548 14.8537 4.59509 14.9927 4.64254C15.1318 4.69 15.2808 4.71438 15.4313 4.71429H38.8545C39.0049 4.71438 39.1539 4.69 39.293 4.64254C39.432 4.59509 39.5583 4.52548 39.6647 4.4377C39.7711 4.34992 39.8555 4.2457 39.913 4.131C39.9706 4.01629 40.0001 3.89335 40 3.76922V0.945067C40.0001 0.820932 39.9706 0.697996 39.913 0.583291C39.8555 0.468587 39.7711 0.364365 39.6647 0.276588C39.5583 0.188811 39.432 0.119202 39.293 0.0717418C39.1539 0.0242821 39.0049 -9.65796e-05 38.8545 2.8754e-07ZM38.8545 18.8571H15.4313C15.2808 18.857 15.1318 18.8814 14.9927 18.9289C14.8537 18.9763 14.7274 19.046 14.621 19.1337C14.5146 19.2215 14.4302 19.3257 14.3727 19.4404C14.3151 19.5551 14.2856 19.6781 14.2857 19.8022V22.6264C14.2856 22.7505 14.3151 22.8734 14.3727 22.9881C14.4302 23.1028 14.5146 23.2071 14.621 23.2948C14.7274 23.3826 14.8537 23.4522 14.9927 23.4997C15.1318 23.5471 15.2808 23.5715 15.4313 23.5714H38.8545C39.0049 23.5715 39.1539 23.5471 39.293 23.4997C39.432 23.4522 39.5583 23.3826 39.6647 23.2948C39.7711 23.2071 39.8555 23.1028 39.913 22.9881C39.9706 22.8734 40.0001 22.7505 40 22.6264V19.8022C40.0001 19.6781 39.9706 19.5551 39.913 19.4404C39.8555 19.3257 39.7711 19.2215 39.6647 19.1337C39.5583 19.046 39.432 18.9763 39.293 18.9289C39.1539 18.8814 39.0049 18.857 38.8545 18.8571Z"
            fill="white"
          />
        </svg>
      </Icon>
    </Wrapper>
  );
}
