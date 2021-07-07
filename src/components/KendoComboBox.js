import * as React from "react";
import { ComboBox } from "@progress/kendo-react-dropdowns";

const KendoComboBox = () => {
  const sports = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
  const [allowCustom, setAllowCustom] = React.useState(false);

  const onChange = event => {
    setAllowCustom(event.target.checked);
  };

  return <div className="example-wrapper">
      <div className="example-config">
        <input id="ac" type="checkbox" className="k-checkbox" onChange={onChange} checked={allowCustom} />
        <label className="k-checkbox-label" htmlFor="ac">
          Allow custom values
        </label>
      </div>
      <div>
        <div>Favorite sport:</div>
        <ComboBox data={sports} allowCustom={allowCustom} />
      </div>
    </div>;
};

export default KendoComboBox;