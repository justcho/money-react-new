import styled from "styled-components";
import React, {useState} from "react";


const Wrapper = styled.section`
  background: #fff;padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{margin: 0 -12px;
    >li{
      background: #d9d9d9;border-radius: 18px;
      display: inline-block;padding: 3px 18px;
      font-size: 14px;margin: 8px 12px;
      &.selected{
        background: #f60;
      }
    }
  }
  > button{
    background: none;border: none;padding: 2px 4px;
    border-bottom: 1px solid #333;color: #666;
    margin-top: 8px;
  }
`
const TagsSection:React.FC =(props)=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selected,setSelected] = useState<string[]>([])
  const addTags = () =>{
    const tagName = window.prompt('新标签名称为')
    if(tagName !== null && tagName.length !== 0){
      setTags([...tags,tagName])
    }else{
      window.alert('标签名不为空')
    }
  }
  const toggleTag = (tag:string) =>{
    const index = selected.indexOf(tag)
    // 如果他有 就 过滤 了 他
    if(index>=0){
      setSelected(selected.filter(t=> t!==tag))
    }else{
      setSelected([...selected,tag])
    }
  }
  const getClass =( tag:string) => selected.indexOf(tag)>=0 ? 'selected':''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={()=>toggleTag(tag)} className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={addTags}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection};