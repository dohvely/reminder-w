import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
// import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'



const styleClasses = theme => ({
  appBarStyle: {
    backgroundColor: "#000000"
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    color: "#0e82f9",
    float : "left",
    paddingLeft: "2px",
    paddingRight: "0px"
  },
  title: {
    flexGrow: 1,
    color: "#0e82f9",
    fontSize: "1.0em"
  },
  listButton: {
    color: "#0e82f9"
  },
  checkboxStyle: {
    color: "#cacaca",
    paddingLeft: "19px"
  },
  addCircleIconStyle: {
    color: "#e9b901",
    fontSize: "2.1em",
    fontWeight: "bold",
    marginTop: "9px",
    marginLeft: "9px"
  },
  headerWrapperStyles: {
    border: "1px solid",
    padding: "0 5px 0 5px"
  },
  titleWrapperStyles: {
    padding: "1px 15px 1px 15px",
    fontSize: "2.15em",
    fontWeight: "bold",
    color: "#e9b901"
  },
  rowTextStyles: {
    color: '#cacaca'
  },
  rowStyles: {
    paddingTop: "11px",
    borderBottom: "1px solid #353535"
  },
  bottomStyles: {
    position: "absolute",
    bottom: "0",
    height: "7%",
    width: "100%"
  },
  addButtonLabelStyles: {
    color: "#e9b901",
    float: "right",
    marginRight: "240px",
    marginTop: "14px"
  },
})


/**
 * React 클래스형
 */
class ReminderDetailClass extends React.Component {

  constructor(props) {

    super(props)

    let reminderListString = localStorage.getItem('reminderList')

    let reminderList = reminderListString !== null ? JSON.parse(reminderListString) : []

    // this.state는 constructor 함수 안에서만 사용 가능하다.
    this.state = {
      reminderTitle: '사야할 것들',
      reminderList
    }
  }

  // reminderList localStorage에 빈 객체 추가(새로 입력될 정보)
  fnAddEmptyReminderToStorage = () => {

    // 1. 기존 reminderList
    let reminderList = this.state.reminderList === undefined || this.state.reminderList.length == 0 ? [] : this.state.reminderList

    // 2. empty list를 추가한 reminderList
    reminderList.push({ text: '', checked: false, focus: false })

    this.setState({
      reminderList
    })
  }

  // reminderList localStorage에 데이터 객체 추가(새로 입력한 정보)
  fnReplaceReminderOnStorage = ({reminderIndex, reminderText}) => {

    this.state.reminderList[reminderIndex].text = reminderText
    // localStorage.setItem('reminderList', JSON.stringify(this.state.reminderList))
  }

  // reminderList localStorage에 데이터 제거
  fnRemoveReminderOnStorage = ({reminderIndex}) => {

    console.log('fnRemoveReminderOnStorage ===> '+reminderIndex)

    if(this.state.reminderList[reminderIndex] !== undefined) {

      let tempReminderList = [...this.state.reminderList]
      tempReminderList.splice(reminderIndex, 1)

      // this.state.reminderList = tempReminderList
      this.setState({
        reminderList: tempReminderList
      })
      localStorage.setItem('reminderList', JSON.stringify(tempReminderList))
    }
  }

  // 새로운 미리알림 버튼 클릭 이벤트 함수
  fnAddNewReminder = () => {

    this.fnAddEmptyReminderToStorage()
  }

  // 미리알림 input blur 이벤트 함수
  fnBlurOnInput = (e, index) => {

    if(e.target.value.trim() !== '') {
      
      // 입력한 index위치의 미리알림 데이터를 reminderList의 index 데이터에 업데이트
      let args = {
        reminderIndex: index,
        reminderText: e.target.value.trim()
      }
      this.fnReplaceReminderOnStorage(args)
    } else {

      // 아무 입력을 하지 않았다면 제거
      this.fnRemoveReminderOnStorage({ reminderIndex: index })
    }
  }

  // form enter 이벤트 함수
  fnOnSubmit = (e) => {

    if(e.keyCode === 13 || e.which === 13) {

      this.fnAddEmptyReminderToStorage()
    }
  }

  /**
   * React LifeCycle에서 동작
   * state 변경이 일어났을때에도 동작
   */
  render() {

    const { reminderTitle, reminderList } = this.state
    const {classes} =this.props

    return <section>
    {/* top */}
    <div className="top">
      {/* header 영역 */}
      <div id="headerWrapper" className={classes.headerWrapperStyles}>
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>목록</Typography>
          <SvgIcon className={classes.listButton}>
            <metadata>
              <sfw  xmlns="&ns_sfw;">
                <slices></slices>
                <sliceSourceBounds width="505" height="984" bottomleftorigin="true" x="0" y="-120"></sliceSourceBounds>
              </sfw>
            </metadata>
            <g>
              <g>
                <g>
                  <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10
                    S17.5,2,12,2z"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="7" cy="12" r="2"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="12" cy="12" r="2"/>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="17" cy="12" r="2"/>
                </g>
              </g>
            </g>
          </SvgIcon>
        </Toolbar>
      </AppBar>
      </div>
      {/* title 영역 */} 
      <div id="titleWrapper" className={classes.titleWrapperStyles}>{reminderTitle}</div>
    </div>
    {/* middle */}
    <div className="middle">
      <form noValidate autoComplete="off" onSubmit={e => e.preventDefault() }>
        <div className="rowWrapper">
          {/* start: 미리알림 목록 loop */}
          {reminderList.map((item, index) => {
            return <div className="row" className={classes.rowStyles} key={index}>
                <Checkbox
                  id="chk0"
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleChecked style={{ color: "#eaeaea" }} />}
                  className={classes.checkboxStyle}
                  checked={item.checked}
                />
                {/* test */}
                <label htmlFor="chk0" className={classes.rowTextStyles}>
                  <InputBase
                    className={classes.rowTextStyles}
                    defaultValue={item.text}
                    inputProps={{ 'aria-label': 'naked' }}
                    onBlur={e => this.fnBlurOnInput(e, index)}
                    onKeyPress={this.fnOnSubmit}
                  />
                </label>
                {/* real */}
                {/* <label htmlFor="chk0" className={classes.rowTextStyles}>{item.text}</label> */}
              </div>
          })}
          {/* end: 미리알림 목록 loop */}
        </div>
        {/* bottom */}
        <div className="bottom" className={classes.bottomStyles} onClick={this.fnAddNewReminder}>
          {/* 새로운 미리 알림 버튼 */}
          <AddCircleIcon className={classes.addCircleIconStyle} />
          <label className={classes.addButtonLabelStyles}>새로운 미리 알림</label>
        </div>
      </form>
    </div>
  </section>
  }

  // "Mounting은 Lifecycle이 종료될 때까지 한 번만 일어납니다."
  componentDidMount() {
    /** componentDidMount: 컴포넌트가 화면에 모두 그려진 이후 호출. 첫 렌더링 이후 실행 */

    //test
    // console.log('componentDidMount:::')

    
    //test
    /* setTimeout(function(){
      this.setState({reminderList: [{ checked: false, text: '유툽 마이크' },{ checked: false, text: '아이패드 매직 키보드' },{ checked: true, text: '애플펜슬 2세대' }]})
    }.bind(this), 2000) */

  }

  componentDidUpdate() {

    //test
    console.log('componentDidUpdate ===> ' + JSON.stringify(this.state.reminderList))

    localStorage.setItem('reminderList', JSON.stringify(this.state.reminderList))
  }

  componentWillUnmount() {
    //test
    // console.log('componentWillUnmount:::')
  }

}

ReminderDetailClass.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleClasses)(ReminderDetailClass)
