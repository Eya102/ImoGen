import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';




const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`




const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ImageForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;`;

  const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
  `;
  
const StyledTextarea= styled.textarea`
  
  height:35%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};

  }
`
const Input = styled.input`
  
height:35%;
padding: 12px;
font-size: 16px;
border: 1px solid #ccc;
border-radius: 4px;

flex: 1;
background-color: transparent;
border: 1px solid ${({ theme }) => theme.text_secondary};
outline: none;
font-size: 18px;
color: ${({ theme }) => theme.text_primary};
border-radius: 12px;
padding: 12px 16px;
&:focus {
  border: 1px solid ${({ theme }) => theme.primary};

}
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const GenerateImage = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transform :translatex(-50px);
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Generator = () => {
  
  const [textData, setTextData] = useState("");
  const [imageData, setImageData] = useState(null);
  const [imagename, setImageName]=useState("")
  const [result , setresult] =useState("")
  const [loading , setloading]=useState(false)

  const handleTextChange = (event) => {
    setTextData(event.target.value);
  }

  const handleImageChange = (event) => {
      setImageData(event.target.files[0])}
      const handleImagename = (event) => {
        setImageName(event.target.value)}
    
  const SendDatatoserver = async ()=>{
    setloading(true)
    console.log(textData)
    console.log(imageData)
  try{

  
    const res= await fetch("http://localhost:3000/textlogo",{
      method : "POST",
      headers : {
       "content-type":"application/json"},
       body : JSON.stringify({

         prompt: textData,
         nom : imagename
       })
      })
      if (res.status===200){
        const data = await res.json();
        
        setTimeout(() => {
          setresult(data.image);
          setloading(false);
        }, 2000);
      } else {
        
      }
    }catch(error){
      console.log(error)
    }
  }
  
  

  
 
  return (
    <div id="Generator">
      <Container>
        <Wrapper>
          <Title>Create your image</Title>
          <Desc>The text can be written in French or English</Desc>
          <ImageForm>
            <StyledTextarea
              rows="4"
              placeholder="Write your text here"
              value={textData}
              onChange={handleTextChange}
            ></StyledTextarea>
            
            <Input type="text" placeholder='Give a name for your image' value={imagename} onChange={handleImagename}></Input>
           
            

            <ButtonContainer>
              <ButtonContainer>
                <GenerateImage onClick={SendDatatoserver}>Generate your image</GenerateImage>
              </ButtonContainer>
            </ButtonContainer>
          </ImageForm>
          <ImageForm>
          {loading ? (
        <p style={{color: 'white',textAlign:"center"}}>Loading</p>
      ) : (
         result && <img src={require("../../images/"+result)} alt="Image" />
      )}
          
          </ImageForm>
        </Wrapper>
      </Container>
    </div>
  );
}


export default Generator
