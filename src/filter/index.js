import { h } from 'hyperapp';
import './index.css';
import { Routes } from '/route-list';
import { RangeSlider } from '/slider';

const Filter = ({ filter, state, actions, search }) => (
  <div class="filter">
    <div class="filter__content">
      <div class="filter__module module">
        <div class="module__header">Jeg vil sykle sånn ca...</div>
        <div class="module__content">
          <RangeSlider
            state={state.lengthSlider}
            actions={actions.lengthSlider}
            display={v => `${v} km`}
          />
        </div>
      </div>
      <div class="filter__module module">
        <div class="module__content">
          <button
            class="filter__search"
            onclick={() => search(state.lengthSlider.value)}
          >
            Finn rute
          </button>
        </div>
      </div>
    </div>
  </div>
);

export { Filter };
