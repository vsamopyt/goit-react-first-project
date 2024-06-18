// src/components/App.jsx
import SectionWraper from '../SectionWraper/SectionWraper';
import ModuleTwoEventProcessing from '../ModuleTwoEventProcessing/ModuleTwoEventProcessing';
import ModuleTwoEventObject from '../ModuleTwoEventObject/ModuleTwoEventObject';
import ModuleTwoReadingProps from '../ModuleTwoReadingProps/ModuleTwoReadingProps';
import ModuleTwoReactivity from '../ModuleTwoReactivity/ModuleTwoReactivity';
import ModuleTwoSeveralStates from '../ModuleTwoSeveralStates/ModuleTwoSeveralStates';
import ModuleTwoConditionIsolation from '../ModuleTwoConditionIsolation/ModuleTwoConditionIsolation';
import ModuleTwoElevationOfState from '../ModuleTwoElevationOfState/ModuleTwoElevationOfState';
import ModuleTwoUpdateObjects from '../ModuleTwoUpdateObjects/ModuleTwoUpdateObjects';

const App = () => {
  return (
    <div>
      <p
        style={{
          margin: '8px',
          padding: '12px 24px',
          color: '#fff',
          backgroundColor: '#000',
          borderRadius: '8px',
        }}
      >
        Please update your email!
      </p>

      <SectionWraper title="Event processing, Function link">
        {<ModuleTwoEventProcessing />}
      </SectionWraper>

      <SectionWraper title="Event object">
        {<ModuleTwoEventObject />}
      </SectionWraper>

      <SectionWraper title="Reading props">
        {
          <ModuleTwoReadingProps message="Turn up Music">
            Play some music
          </ModuleTwoReadingProps>
        }
        {
          <ModuleTwoReadingProps message="Turn down Music">
            Upload some music
          </ModuleTwoReadingProps>
        }
      </SectionWraper>

      <SectionWraper title="Reactivity">
        <ModuleTwoReactivity />
      </SectionWraper>

      <SectionWraper title="Several states">
        <ModuleTwoSeveralStates />
      </SectionWraper>

      <SectionWraper
        title="Conditional Isolation"
        text="Стан є локальним для екземпляра компонента. Якщо ми відображаємо один і той самий компонент декілька разів, кожна копія матиме абсолютно ізольований стан! Зміна одного з них не вплине на інший."
      >
        <ModuleTwoConditionIsolation />
        <ModuleTwoConditionIsolation />
      </SectionWraper>

      <SectionWraper
        title="Elevation of state"
        text="А що, якщо нам потрібно, щоб всі ClickCounter тримали свої стани синхронізованими? Правильний спосіб зробити це в React - це видалити стан з дочірніх компонентів і додати його до їхнього найближчого спільного батька, тобто створити спільний стан."
      >
        <ModuleTwoElevationOfState />
      </SectionWraper>

      <SectionWraper title="Update objects" text="Стан може містити будь-який тип значення, включаючи об'єкти. const [values, setValues] = useState({x:0,y:0})">
      < ModuleTwoUpdateObjects/>
      </SectionWraper>
    </div>
  );
};

export default App;
