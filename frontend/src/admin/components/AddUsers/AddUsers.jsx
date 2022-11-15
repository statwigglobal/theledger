import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { COUNTRY_CODE } from "../../../constants/countryCode";
import "./AddUsers.css";

export default function AddUsers(props) {
  const { addresses, onSuccess, defaultRoles, handleClose } = props;

  const [OrgNature, setOrgNature] = useState("existing");

  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      phoneNumber: "",
      role: "",
      warehouse: "",
    },
  });

  const watchEmail = watch("emailId");
  const watchPhone = watch("phoneNumber");

  const addUser = (values) => {
    const reqData = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailId: values.emailId,
      phoneNumber: values.phoneNumber,
      role: values.role,
      warehouse: [values.warehouse.id],
    };

    onSuccess(reqData);
  };

  const options = [{ label: "The Shawshank Redemption", year: 1994 }];
  return (
    <div className="addOrganization-container">
      <form onSubmit={handleSubmit(addUser)}>
        <div className="addorganization-header">
          <p className="vl-subheading f-500 vl-blue">Add Users</p>
          <i className="fa-solid fa-xmark" onClick={handleClose}></i>
        </div>
        <div className="addorganization-body">
          <div className="input-set">
            <p className="vl-body f-500 vl-black">Personal detail</p>
            <div className="input-two-column-space">
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="First Name"
                    {...field}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName && "First Name is required!"}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Last Name"
                    {...field}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName && "Last Name is required!"}
                  />
                )}
              />
            </div>
            <div className="input-two-column-space">
              <Controller
                name="emailId"
                control={control}
                rules={{ required: watchPhone ? false : true }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Email Address"
                    {...field}
                    inputProps={{ style: { textAlign: "left" } }}
                    error={Boolean(errors.emailId)}
                    helperText={errors.emailId && "Email ID is required!"}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                rules={{ required: watchEmail ? false : true }}
                render={({ field }) => (
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry={COUNTRY_CODE}
                    className="vl-custom-phone-input-2"
                    {...field}
                    maxLength={15}
                    style={{
                      borderColor: Boolean(errors.phone) ? "#da323c" : "",
                    }}
                  />
                )}
              />
              {errors.phone?.type === "custom" ? (
                <span className="error-msg text-dangerS">
                  {errors.phone?.message}
                </span>
              ) : null}
            </div>
          </div>
          <div className="input-set">
            <div className="radio-btn-group">
              <FormControl>
                <Controller
                  name="organizationExists"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      {...field}
                    >
                      <div className="vl-radio-btn vl-align-center">
                        <Radio
                          value={"existing"}
                          inputProps={{ "aria-label": "A" }}
                        />
                        <p className="vl-body f-400 vl-grey-md vl-line-sm">
                          Existing Organization
                        </p>
                      </div>
                      <div className="vl-radio-btn vl-align-center">
                        <Radio
                          value={"new"}
                          inputProps={{ "aria-label": "B" }}
                        />
                        <p className="vl-body f-400 vl-grey-md vl-line-sm">
                          New Organization
                        </p>
                      </div>
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </div>
          </div>

          <div className="input-set">
            {OrgNature === "existing" ? (
              <>
                <p className="vl-body f-500 vl-black">Location details</p>
                <div className="input-two-column-space">
                  <Controller
                    name="role"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={defaultRoles}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Assign Role"
                            error={Boolean(errors.role)}
                            helperText={errors.role && "Role is required!"}
                          />
                        )}
                        {...field}
                        onChange={(event, value) => {
                          field.onChange(value);
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="warehouse"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Autocomplete
                        fullWidth
                        id="combo-box-demo"
                        options={addresses}
                        getOptionLabel={(option) =>
                          option.title ? option.title : ""
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Assign Warehouse"
                            error={Boolean(errors.warehouse)}
                            helperText={
                              errors.warehouse && "Warehouse is required!"
                            }
                          />
                        )}
                        {...field}
                        onChange={(event, value) => {
                          field.onChange(value);
                        }}
                      />
                    )}
                  />
                </div>
              </>
            ) : (
              <>
                <p className="vl-body f-500 vl-black">Organization details</p>
                <div className="input-full-space">
                  <TextField
                    disabled
                    fullWidth
                    variant="outlined"
                    label="Organization Name"
                  />
                </div>
                <div className="input-three-column-space">
                  <Autocomplete
                    disabled
                    fullWidth
                    id="combo-box-demo"
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="Region" />
                    )}
                  />
                  <Autocomplete
                    disabled
                    fullWidth
                    id="combo-box-demo"
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="Country" />
                    )}
                  />
                  <Autocomplete
                    disabled
                    fullWidth
                    id="combo-box-demo"
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} label="City" />
                    )}
                  />
                </div>
                <div className="input-add-column-space">
                  <TextField
                    disabled
                    fullWidth
                    variant="outlined"
                    label="Pin"
                  />
                  <TextField
                    disabled
                    fullWidth
                    multiline
                    variant="outlined"
                    label="Address"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="addorganization-actions">
          <button className="vl-btn vl-btn-sm vl-btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}
