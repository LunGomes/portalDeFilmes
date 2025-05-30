import styled from 'styled-components';

const StyledWrapper = styled.div`
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
  }

  .input {
    border-style: none;
    height: 50px;
    width: 50px;
    padding: 10px;
    outline: none;
    border-radius: 50%;
    transition: .5s ease-in-out;
    background-color: #9E2A2B;
    box-shadow: 0px 0px 3px #f3f3f3;
    padding-right: 40px;
    color: #FFF4B0;
  }

  .input::placeholder,
  .input {
    font-size: 17px;
  }

  .input::placeholder {
    color: #9E2A2B;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    background-color: transparent;
    transition: .2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #9E2A2B;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }`;

function Pesq() {
  return (
    <>
      <StyledWrapper>
        <div className="input-wrapper">
          <button className="icon"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#FFF4B0" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#FFF4B0" d="M22 22L20 20" />
            </svg>
          </button>
          <input placeholder="search.." className="input" name="text" type="text" />
        </div>
      </StyledWrapper>
    </>
  );
}

export default Pesq;