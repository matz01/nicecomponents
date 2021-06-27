import React, { useState } from "react";
import "./selectslide.css";

export type SelectslideProps = {
  /**
   * a text to be rendered in the component.
   */
};

export function Selectslide() {
  const [active, setActive] = useState(false);
  return (
    <section>
      <div className={`cs-select cs-skin-slide ${active ? "cs-active" : ""}`}>
        <span
          className="cs-placeholder"
          onClick={() => {
            setActive(!active);
          }}
        >
          Honeymoon
        </span>
        <div className="cs-options">
          <ul>
            <li className="icon-camera" data-option="" data-value="sightseeing">
              <span>Sight Seeinga</span>
            </li>
            <li className="icon-money" data-option="" data-value="business">
              <span>Business</span>
            </li>
            <li
              className="icon-heart cs-selected"
              data-option=""
              data-value="honeymoon"
            >
              <span>Honeymoon</span>
            </li>
            <li className="icon-food" data-option="" data-value="food">
              <span>Gourmet</span>
            </li>
            <li className="icon-shirt" data-option="" data-value="shopping">
              <span>Shopping</span>
            </li>
          </ul>
        </div>
        <select className="cs-select cs-skin-slide">
          <option value="sightseeing" data-class="icon-camera">
            Sight Seeing
          </option>
          <option value="business" data-class="icon-money">
            Business
          </option>
          <option
            onClick={() => {
              alert("zz");
              setActive(!active);
            }}
            value="honeymoon"
            data-class="icon-heart"
          >
            Honeymoon
          </option>
          <option value="food" data-class="icon-food">
            Gourmet
          </option>
          <option value="shopping" data-class="icon-shirt">
            Shopping
          </option>
        </select>
      </div>
    </section>
  );
}
