import { h } from 'hyperapp';
import './index.css';
import { Routes } from '/route-list';
import { RangeSlider } from '/slider';

function msToKm(ms) {
  return Math.ceil(ms * 3.6);
}

function kmToMs(km) {
  return km / 3.6;
}

function secondsToMinutes(s) {
  return Math.ceil(s / 60);
}

function minutesToSeconds(m) {
  return m * 60;
}

function timeDisplay(m) {
  const hours = Math.floor(m / 60);
  const minutes = m % 60;
  let display = '';
  if (hours) {
    const hText = hours == 1 ? 'time' : 'timer';
    display += `${hours} ${hText}`;
  }
  if (minutes) {
    if (hours) {
      display += ', ';
    }

    const mText = minutes == 1 ? 'minutt' : 'minutter';
    display += `${minutes} ${mText}`;
  }

  return display;
}

const Filter = ({ filter, state, actions, search }) => (
  <div class="filter">
    <div class="filter__content">
      <div class="filter__module module">
        <div class="module__header">
          Jeg kommer til å ha en snittfart på ca...
        </div>
        <div class="module__content">
          <RangeSlider
            state={state.speed}
            actions={actions.speed}
            display={v => `${v}km/t`}
          />
        </div>
      </div>
      <div class="filter__module module">
        <div class="module__header">...og har omtrent...</div>
        <RangeSlider
          state={state.time}
          actions={actions.time}
          display={timeDisplay}
        />
      </div>
      <div class="filter__module module">
        <div class="module__header">...å sykle på.</div>
        <div class="module__content">
          <button class="filter__search" onClick={search}>
            Finn rute!
          </button>
        </div>
      </div>
    </div>
  </div>
);

export { Filter };
