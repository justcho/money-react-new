import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{ margin-right: 16px; white-space: nowrap }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background: none;
    }
  }
`
const NoteSection:React.FC =(props)=>{
  const [note,setNote]= useState('')
  const refInput =  useRef<HTMLInputElement>(null)
  const onBlur =()=>{
    if(refInput.current !== null){
      setNote(refInput.current.value)
    }
  }
  console.log(note)
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        {/* 受控模式*/}
        {/*<input type="text" placeholder="在这里添加备注"*/}
        {/*       value={note}*/}
        {/*        onChange={(e)=>setNote(e.target.value)}*/}
        {/*/>*/}
        {/*非受控模式*/}
        <input type="text" placeholder="在这里添加备注"
               defaultValue={note}
               ref={refInput}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}
export {NoteSection}