import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';

import style from './Settings.module.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ToggleSettings } from '../../store/settingsSlice';

function Settings() {
  const settings = useAppSelector((state) => state.settings.settingsList);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  return (
    <div className={style.settings}>
      {active && (
        <ul className={style.settingsList}>
          {settings.map((setting, i) => (
            <li className={style.item} key={setting.id}>
              <span className={style.value}>{setting.value}</span>
              <span className={style.include}>ВЫКЛ</span>
              <input
                className={style.input}
                checked={setting.include}
                type="checkbox"
                id={`check${i}`}
                onClick={() => dispatch(ToggleSettings(setting.id))}
              />
              <label htmlFor={`check${i}`} className={style.label} />
              <span className={style.include}>ВКЛ</span>
            </li>
          ))}
        </ul>
      )}
      <button
        className={style.button}
        type="button"
        onClick={() => setActive(() => !active)}
      >
        <IoSettingsOutline />
      </button>
    </div>
  );
}

export default Settings;
