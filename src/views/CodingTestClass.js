import React from 'react'
import PropTypes from 'prop-types'

const styleClasses = {
  fontWhite: {
    color: "#fff"
  }
}

/**
 * React 클래스형
 */
class CodingTestClass extends React.Component {

  constructor(props) {

    super(props)

    let clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
    console.log(`clothes ===> ${JSON.stringify(clothes)}`)
    /* let unqClothes = clothes.reduce((acc, cur, idx, src) => {
      //test
      console.log(`acc ===> ${JSON.stringify(acc)}`)
      
      cur.forEach(cloth => {
          if(!acc.includes(cloth)) {
              acc.push(cloth)
          }            
      })
    }) */

  }


  /**
   * React LifeCycle에서 동작
   * state 변경이 일어났을때에도 동작
   */
  render() {

    // const { reminderTitle, reminderList } = this.state
    // const {classes} = this.props

    return <section><span className={styleClasses.fontWhite}>코딩테스트</span></section>
  }

}

/* CodingTestClass.propTypes = {
} */

export default CodingTestClass
