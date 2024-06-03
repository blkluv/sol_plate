import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    color: black;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
`

const Welcome = styled.div`
  @keyframes welcome-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(-45deg, #ffb07c, #ff3e88, #2969ff, #ef3cff, #ff3c87);
  background-size: 300% 300%;
  animation: welcome-fade-in .5s ease, backgroundGradient 30s ease infinite;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));

  & img {
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    &:nth-child(1) {animation-delay: 0s;}
    &:nth-child(2) {animation-delay: 1s;}
  }

  & > div {
    padding: 0px;
    filter: drop-shadow(0 4px 3px rgba(0,0,0,.07)) drop-shadow(0 2px 2px rgba(0,0,0,.06));
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1>Welcome to 🅰️TL5️⃣D City Casino #🅰️5️🎰</h1>
        <p>
          A fair, simple and decentralized casino on Solana. 1️⃣ Create a <a href="https://phantom.app/">Phantom</a> wallet account. 1️⃣ Buy <a href="https://phantom.app/">$SOL</a> or <a href="https://phantom.app/">$USD</a> with a debit card. 🎰 Instant payouts. ▶️ Subscribe to ATL5️⃣D Discord to receive 1/2 of your monthly losses back in Bitcoin $RNT.
        </p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://www.spatial.io/s/ATLverse-662eb8858ef79a2eef2b8193?share=9164371680450447654', '_blank')}>
          🚀 ATLVERSE
        </button>
        <button onClick={() => window.open('https://atl5d.com', '_blank')}>
          🅰️ ATL5D
        </button>
        <button onClick={() => window.open('https://discord.com/servers/atl5d-1244450286337003520', '_blank')}>
          💬 PPV DISCORD
        </button>
      </Buttons>
    </Welcome>
  )
}
