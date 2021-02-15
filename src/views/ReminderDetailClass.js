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
  checkboxLabelStyles: {
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
  }
})


/**
 * React 클래스형
 */
class ReminderDetailClass extends React.Component {

  constructor(props) {

    //test
    console.log('constructor:::'+props)

    super(props)

    //test
    // localStorage.setItem('reminderList', JSON.stringify([{ checked: false, text: '유툽 마이크' },{ checked: false, text: '아이패드 매직 키보드' },{ checked: false, text: '애플워치' },{ checked: true, text: '애플펜슬 2세대' }]))

    let reminderListString = localStorage.getItem('reminderList')
    let reminderList = JSON.parse(reminderListString)

    //test
    console.dir(reminderList)

    // TOOD: LocalStorage
    this.state = {
      reminderTitle: '사야할 것들',
      reminderList
    }
  }

  render() {
    //test
    console.log('render:::')

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
                <sliceSourceBounds  width="505" height="984" bottomleftorigin="true" x="0" y="-120"></sliceSourceBounds>
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
      <form noValidate autoComplete="off">
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
                <label htmlFor="chk0" className={classes.checkboxLabelStyles}>{item.text}</label>
              </div>
          })}
          {/* end: 미리알림 목록 loop */}
        </div>
        {/* bottom */}
        <div className="bottom" className={classes.bottomStyles}>
          {/* TODO: 새로운 미리 알림 버튼 */}
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
    // console.log('componentDidUpdate:::')
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
