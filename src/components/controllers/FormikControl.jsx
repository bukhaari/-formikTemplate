import BaseField from "./BaseField";
import BaseBtn from "./BaseBtn";
import BaseCheckBox from "./BaseCheckBox";
import BaseTextArea from "./BaseTextArea";
import BaseText from "./BaseText";
import BaseRadioBox from "./BaseRadioBox";
import BaseFieldArray from "./BaseFieldArray";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "field":
      return <BaseField {...rest} />;
    case "button":
      return <BaseBtn {...rest} />;
    case "checkbox":
      return <BaseCheckBox {...rest} />;
    case "textArea":
      return <BaseTextArea {...rest} />;
    case "typography":
      return <BaseText {...rest} />;
    case "radio":
      return <BaseRadioBox {...rest} />;
    case "fieldArray":
      return <BaseFieldArray {...rest} />;
    // case "select":
    //   return <Select {...rest} />;
    // case "date":
    //   return <DatePicker {...rest} />;
    // case "chakraInput":
    //   return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
