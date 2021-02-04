import React from 'react'
import PropTypes from 'prop-types'
// import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import { makeStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import { FormControl, FormControlLabel, makeStyles } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
// import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import reminderDetailStyles from '../assets/css/reminder-detail.css';




// material-ui styles
const materialClasses = theme => ({
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
})
// const materialClasses = materialStyles()


class ReminderDetailClass extends React.Component {

  // TOOD: 
  state = {
    whatever: ''
  }

  componentDidMount() {
    console.log('componentDidMount:::')
  }

  render() {
    const {whatever} = this.state
    const {classes} =this.props


    return <section>
    {/* top */}
    <div className="top">
      {/* header 영역 */}
      <div id="headerWrapper" className={reminderDetailStyles.headerWrapperStyles}>
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            목록
          </Typography>
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
      <div id="titleWrapper" className={reminderDetailStyles.titleWrapperStyles}>미리알림 제목</div>
    </div>
    {/* middle */}
    <div className="middle">
      <form noValidate autoComplete="off">
        <div className="rowWrapper">
          {/* TODO : loop */}
          <div className="row" className={reminderDetailStyles.rowStyles}>
            <Checkbox
              id="chk0"
              icon={<CircleUnchecked />}
              checkedIcon={<CircleChecked style={{ color: "#eaeaea" }} />}
              className={classes.checkboxStyle}
            />
            <label htmlFor="chk0" className={reminderDetailStyles.checkboxLabelStyles}>밀레니얼 슈퍼리치 도서</label>
          </div>
          <div className="row" className={reminderDetailStyles.rowStyles}>
            <Checkbox
              id="chk1"
              icon={<CircleUnchecked />}
              checkedIcon={<CircleChecked style={{ color: "#eaeaea" }} />}
              className={classes.checkboxStyle}
            />
            <label htmlFor="chk1" className={reminderDetailStyles.checkboxLabelStyles}>마사지건</label>
          </div>
        </div>
        {/* bottom */}
        <div className="bottom" className={reminderDetailStyles.bottomStyles}>
          {/* TODO: 새로운 미리 알림 버튼 */}
          <AddCircleIcon className={classes.addCircleIconStyle} />
          <label className={reminderDetailStyles.addButtonLabelStyles}>새로운 미리 알림</label>
        </div>
      </form>
    </div>
  </section>
  }

}

ReminderDetailClass.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(materialClasses)(ReminderDetailClass)
