import { h } from 'hyperapp';
import './index.css';
import { Routes } from '/route-list';
import { RangeSlider } from '/slider';

const Filter = ({ filter, state, actions, search }) => (
  <div class="filter">
    <RangeSlider
      state={state.lengthSlider}
      actions={actions.lengthSlider}
      display={v => `${v} km`}
    />
    <button
      class="filter__search"
      onclick={() => search(state.lengthSlider.value)}
    >
      Finn rute
    </button>
  </div>
);

export { Filter };
