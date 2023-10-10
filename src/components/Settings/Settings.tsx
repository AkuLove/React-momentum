import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoSettingsOutline } from 'react-icons/io5';

import style from './Settings.module.scss';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ToggleSettings } from '../../store/settingsSlice';

function Settings() {
  const settings = useAppSelector((state) => state.settings.settingsList);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  const variants = {
    initial: {
      translateX: '-100%',
      opacity: 0,
    },
    animate: {
      translateX: 0,
      opacity: 1,
    },
    exit: {
      translateX: '-100%',
      opacity: 0,
    },
  };

  return (
    <div className={style.settings}>
      <AnimatePresence>
        {active && (
          <motion.ul
            className={style.settingsList}
            {...variants}
            transition={{ duration: 0.4 }}
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
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
