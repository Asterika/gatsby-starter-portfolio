import React, { Component } from 'react'

const Thumbnail = (props) => (
  <img src={props.pic} alt="" style={{height:280, width:380, margin:12,
  display:"inline"}}/>
)

export default Thumbnail;
