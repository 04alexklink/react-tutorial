import React from 'react'

function NameList() {

  const names = ['Alex','Adam','Ben']
    const nameList = names.map(name => 
        <h1>{name}</h1>
      )
    return (
        <div>
          {/* {names.map(name => 
            <h1>{name}</h1>
          )} */}
          {nameList}
        </div>
    )
}

export default NameList
