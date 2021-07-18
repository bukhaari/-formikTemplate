import { FieldArray } from "formik";
import BaseBtn from "./BaseBtn";
import BaseField from "./BaseField";

function BaseFieldArray(props: any) {
  const {
    values,
    parentclass,
    ArrayName,
    subName,
    Btnwidth = "0.2rem",
  } = props;

  return (
    <FieldArray
      name={ArrayName}
      render={(fields) => (
        <div>
          {values.map((value: any, index: any) => (
            <div key={index}>
              {subName.map((sub: any, index2: any) => (
                <BaseField
                  key={index2}
                  name={`${ArrayName}[${index}].${sub.name}`}
                  lable={sub.label}
                  parentclass={parentclass}
                />
              ))}

              <BaseBtn
                width={Btnwidth}
                type="button"
                label="+"
                onClick={() => fields.insert(index, "")}
                parentclass={parentclass}
              />
              <BaseBtn
                width="0.2rem"
                type="button"
                label="-"
                onClick={() => fields.remove(index)}
                parentclass={parentclass}
              />
            </div>
          ))}
        </div>
      )}
    />
  );
}

export default BaseFieldArray;
