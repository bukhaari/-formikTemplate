import TextError from "./textError";
import { ErrorMessage, FastField } from "formik";
import {
  RadioGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
} from "@material-ui/core";

function BaseCheckBox(props) {
  const {
    name,
    row = true,
    label,
    options = [],
    formLabel,
    parentclass,
  } = props;

  return (
    <div className={parentclass}>
      <FastField name={name}>
        {({ field }) => {
          return (
            <div className={parentclass}>
              <FormControl>
                <FormLabel>{formLabel}</FormLabel>
                <RadioGroup row={row}>
                  {options.length > 0 ? (
                    options.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Checkbox />}
                        label={option.label}
                        {...field}
                        value={option.value}
                        checked={field.value.includes(option.value)}
                      />
                    ))
                  ) : (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={label}
                      {...field}
                      // checked={field.value === field.value}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </div>
          );
        }}
      </FastField>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default BaseCheckBox;
