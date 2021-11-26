import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker() {
  const [date, setDate] = useState(new Date());

  // const { setField } = this.props.setField

  // function handleChange(date) {
  //   console.log("Datepicker: dateOfBirthField...", date)
  //   setDate(date);
  //   // this.props.setField("dateOfBirth", date)
  //   this.props.setField("dateOfBirthField", date)
  // }

  // return <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={handleChange} />
  return <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={() => this.props.setField("dateOfBirthField", date)} />
}

export default Datepicker;
