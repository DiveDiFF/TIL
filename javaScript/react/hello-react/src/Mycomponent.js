import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mycomponent extends Component {
  static defaultProps = {
    name: '기본 이름'
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }

  state = {
    number: 0
  }

  // constructor 메서드에서 state를 정의하는 방법
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0
  //   }
  // }

  render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다. </p>
        <p>저는 {this.props.age}살 입니다. </p>
        <p>숫자: {this.state.number} </p>
        <button onClick={() => {
            this.setState({
              number: this.state.number + 1
            })
          }
        }>더하기</button>
      </div>
    );
  }
}

// prop types 설정하는 전통적 방법
// Mycomponent.PropTypes = {
//   name: PropTypes.string
// }

// default props 를 설정하는 전통적 방법
// Mycomponent.defaultProps = {
//   name: '기본이름'
// }

export default Mycomponent;