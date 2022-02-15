import TextFieldForm from "./Forms/TextFieldForm"

function FormikController(props) {
    const { control, ...otherProps } = props
    console.log(props)
    switch (control) {
      case "textfield":
        return <TextFieldForm {...otherProps} />
      
    //   case "select":
    //     return <Select {...rest} />
    //   case "radio":
    //     return <RadioButtons {...rest} />
    //   case "checkbox":
    //     return <CheckBoxes {...rest} />
      default:
        return null
    }
  }
  export default FormikController