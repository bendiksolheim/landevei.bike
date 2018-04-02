import React from 'react';
import RangeSlider from 'rc-slider/lib/Range';
import './index.css';

const RANGE_MIN = 0;
const RANGE_MAX = 100000;

const Range = ({ onDistanceChange, distance }) => (
  <div className="range">
    <div className="range__values">
      <div className="range__min">{distance.min}km</div>
      <div className="range__max">{distance.max}km</div>
    </div>
    <RangeSlider
      min={RANGE_MIN}
      max={RANGE_MAX}
      defaultValue={[RANGE_MIN, RANGE_MAX]}
      onChange={onDistanceChange}
      allowCross={false}
    />
  </div>
);

export { Range };
