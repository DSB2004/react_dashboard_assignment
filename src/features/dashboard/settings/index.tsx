import React from "react";
import SettingsBar from "../../../components/settingsBar";
import ToggleButton from "../../../components/toggleButton";
import ThemeController from "../../../components/themeController";
export default function Settings() {
  return (
    <div className="my-10 mx-auto min-w-96 w-3/4 bg-white   dark:bg-neutral-900 duration-300 rounded-lg  overflow-y-auto">
      <h1 className="uppercase font-bold duration-300  dark:text-white text-center py-4 text-2xl">
        Settings
      </h1>
      <SettingsBar>
        <h1>Theme</h1>
        <ThemeController />
      </SettingsBar>
      <SettingsBar>
        <h1>Push Notification</h1>
        <ToggleButton />
      </SettingsBar>
      <SettingsBar>
        <h1>Online Status</h1>
        <ToggleButton />
      </SettingsBar>
      <SettingsBar>
        <h1>Auto Update</h1>
        <ToggleButton />
      </SettingsBar>
      <SettingsBar>
        <h1>Setting 1</h1>
      </SettingsBar>
      <SettingsBar>
        <h1>Setting 2</h1>
      </SettingsBar>
      <SettingsBar>
        <h1>Setting 3</h1>
      </SettingsBar>
    </div>
  );
}
