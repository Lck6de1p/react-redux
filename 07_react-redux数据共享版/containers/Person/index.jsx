import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value

    const personObj = {id: nanoid(), name, age}
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    const {count, personList} = this.props
    return (
      <div>
        <h2>我是Person组件, 上方求和为{count}</h2>
        <input ref={c => this.nameNode = c}type="text" placeholder="输入名字"/>
        <input ref={c => this.ageNode = c}type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>add</button>
        <ul>
          {
            personList.map(p => {
              return <li key={p.id}>姓名： {p.name}--年龄： {p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({personList: state.person, count: state.count}),
  {
    addPerson: createAddPersonAction
  }
)(Person)