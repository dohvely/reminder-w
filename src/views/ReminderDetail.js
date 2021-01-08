import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { FormControl, FormControlLabel, makeStyles } from '@material-ui/core'
// import { FormControl, FormControlLabel, makeStyles, TextField } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';


// material-ui styles
const materialStyles = makeStyles((theme) => ({
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
  //test
  arrowIconStyle: {
    marginRight: "0"
  }
}))

// custom styles
const headerWrapperStyles = {
  border: "1px solid",
  padding: "0 5px 0 5px",
}
const titleWrapperStyles = {
  padding: "1px 15px 1px 15px",
  fontSize: "2.15em",
  fontWeight: "bold",
  color: "#e9b901"
}
const checkboxLabelStyles = {
  color: '#cacaca'
}
const rowStyles = {
  paddingTop: "11px",
  borderBottom: "1px solid #353535",
}
const bottomStyles = {
  position: "absolute",
  bottom: "0",
  height: "7%",
  width: "100%",
}
const addButtonLabelStyles = {
  color: "#e9b901",
  float: "right",
  marginRight: "240px",
  marginTop: "14px"
}



function ReminderDetail() {
  const materialClasses = materialStyles()

  return (
    <section>
      {/* top */}
      <div className="top">
        {/* header 영역 */}
        <div id="headerWrapper" style={headerWrapperStyles}>
        <AppBar position="static" className={materialClasses.appBarStyle}>
          <Toolbar>
            <IconButton edge="start" className={materialClasses.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h6" className={materialClasses.title}>
              목록
            </Typography>
            <SvgIcon className={materialClasses.listButton}>
              <g id="Guide"/><g id="Layer_2"><g><g><path d="M3.5,9.5c-0.38,0-0.74-0.14-1.02-0.4C2.18,8.82,2.01,8.45,2,8.05c-0.01-0.4,0.13-0.78,0.4-1.07     C2.68,6.68,3.05,6.52,3.45,6.5c0.4-0.01,0.78,0.13,1.08,0.4C4.82,7.18,4.99,7.55,5,7.95c0.01,0.4-0.13,0.78-0.4,1.07     C4.32,9.32,3.95,9.48,3.55,9.5l0,0C3.53,9.5,3.52,9.5,3.5,9.5z M3.54,9L3.54,9L3.54,9z M3.5,7.5c-0.01,0-0.01,0-0.02,0     c-0.13,0-0.26,0.06-0.35,0.16C3.04,7.76,3,7.88,3,8.02c0,0.13,0.06,0.26,0.16,0.35C3.26,8.46,3.38,8.5,3.52,8.5l0,0     c0.13,0,0.26-0.06,0.35-0.16C3.96,8.24,4,8.12,4,7.98c0-0.13-0.06-0.26-0.16-0.35C3.75,7.55,3.63,7.5,3.5,7.5z"/></g><g><path d="M8,9.5C7.17,9.5,6.5,8.83,6.5,8S7.17,6.5,8,6.5S9.5,7.17,9.5,8S8.83,9.5,8,9.5z M8,7.5C7.72,7.5,7.5,7.72,7.5,8     S7.72,8.5,8,8.5S8.5,8.28,8.5,8S8.28,7.5,8,7.5z"/></g><g><path d="M12.5,9.5C11.67,9.5,11,8.83,11,8s0.67-1.5,1.5-1.5S14,7.17,14,8S13.33,9.5,12.5,9.5z M12.5,7.5C12.22,7.5,12,7.72,12,8     s0.22,0.5,0.5,0.5S13,8.28,13,8S12.78,7.5,12.5,7.5z"/></g></g></g>
            </SvgIcon>
          </Toolbar>
        </AppBar>
        </div>
        {/* title 영역 */} 
        <div id="titleWrapper" style={titleWrapperStyles}>미리알림 제목</div>
      </div>
      {/* middle */}
      <div className="middle">
        <form noValidate autoComplete="off">
          <div className="rowWrapper">
            {/* TODO : loop */}
            <div className="row" style={rowStyles}>
              <Checkbox
                id="chk0"
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked style={{ color: "#eaeaea" }} />}
                className={materialClasses.checkboxStyle}
              />
              <label for="chk0" style={checkboxLabelStyles}>밀레니얼 슈퍼리치 도서</label>
            </div>
            <div className="row" style={rowStyles}>
              <Checkbox
                id="chk1"
                icon={<CircleUnchecked />}
                checkedIcon={<CircleChecked style={{ color: "#eaeaea" }} />}
                className={materialClasses.checkboxStyle}
              />
              <label for="chk1" style={checkboxLabelStyles}>마사지건</label>
            </div>
          </div>
          {/* bottom */}
          <div className="bottom" style={bottomStyles}>
            {/* TODO: 새로운 미리 알림 버튼 */}
            <AddCircleIcon className={materialClasses.addCircleIconStyle} />
            <label style={addButtonLabelStyles}>새로운 미리 알림</label>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ReminderDetail
