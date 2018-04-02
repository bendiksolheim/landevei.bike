import { h } from 'hyperapp';
import './index.css';
import { Slider } from 'hyperapp-slider';

/** Expects values in meter per second. Returns value in meters per second
 *
 */
/*const Slider = ({ min, max, value, onChange, display }) => {
  return (
    <div className="slider">
      <div className="slider__value">{display(value)}</div>
      <div className="slider__slider">
        <RangeSlider
          defaultValue={value}
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
    </div>
  );
};*/

const RangeSlider = ({ state, actions, display }) => (
  <div class="range-slider">
    <div class="range-slider__value">{display(state.value)}</div>
    <div class="range-slider__slider">
      <Slider state={state} actions={actions} />
    </div>
  </div>
);

export { RangeSlider };
