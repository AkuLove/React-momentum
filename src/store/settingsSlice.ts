import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettingsState } from '../types/interfaces/settings/ISettingsState';

const initialState: ISettingsState = {
  settingsList: [
    {
      id: 'audio',
      include: true,
      value: 'Аудио',
    },
    {
      id: 'weather',
      include: true,
      value: 'Погода',
    },
    {
      id: 'time',
      include: true,
      value: 'Время',
    },
    {
      id: 'date',
      include: true,
      value: 'Дата',
    },
    {
      id: 'greeting',
      include: true,
      value: 'Приветствие',
    },
    {
      id: 'quotes',
      include: true,
      value: 'Цитаты',
    },
    {
      id: 'notes',
      include: true,
      value: 'Заметки',
    },
  ],
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    ToggleSettings(state, action: PayloadAction<string>) {
      const clickedSetting = state.settingsList.find(
        (setting) => setting.id === action.payload
      );
      if (clickedSetting) {
        clickedSetting.include = !clickedSetting.include;
      }
    },
  },
});

export const { ToggleSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
