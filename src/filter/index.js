import { h } from 'hyperapp';
import './index.css';
import { Routes } from '/route-list';
import { RangeSlider } from '/slider';

const Filter = ({ filter, state, actions, search }) => (
  <div class="filter">
    <div class="filter__intro">Jeg ønsker å sykle ca...</div>
    <RangeSlider
      state={state.lengthSlider}
      actions={actions.lengthSlider}
      display={v => `${v} km`}
    />
  </div>
);

export { Filter };
