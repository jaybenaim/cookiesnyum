import React from "react";
import { connect } from "react-redux";
import { filterGallery } from "../../../redux/actions/galleryActions";
import { Select } from "react-materialize";

const BoxForm = (props) => {
  const { box } = props;
  return (
    <div className="box-container">
      <Select
        id="box"
        label="Select Box"
        value={box}
        name="box"
        multiple={false}
        options={{
          classes: `validate `,
          dropdownOptions: {
            alignment: "left",
            autoTrigger: false,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
          },
        }}
        onChange={(e) => props.handleChange(e)}
      >
        <option value="basic" className="basic">
          Basic (Dozen)
        </option>
        <option value="mixed" className="mixed">
          Mixed (6 Premium {"&"} 6 Basic)
        </option>
        <option value="surprise" className="surprise">
          Surprise (Dozen)
        </option>
        <option value="premium" className="premium">
          Premium (Dozen)
        </option>
      </Select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.gallery.filter,
});

export default connect(mapStateToProps, { filterGallery })(BoxForm);
