import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from "@material-ui/core";
import React, { useState } from "react";

function FormikSelectField({ data }) {
  const [purchaseItem, setPurchaseItem] = useState(data[0].value);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="purchase-item">Purchase Item</InputLabel>
      <Select
        value={purchaseItem}
        onChange={event => setPurchaseItem(event.target.value)}
        input={
          <OutlinedInput
            labelWidth={22}
            name="purchaseItem"
            id="purchase-item"
          />
        }
      >
        {data.map(item => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FormikSelectField;
